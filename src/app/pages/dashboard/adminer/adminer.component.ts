import { Component } from "@angular/core";
import { TokenStorageService } from "../../../services/token-storage.service";
import { AuthService } from "../../../services/auth.service";
import { BehaviorSubject, Subscription, switchMap, tap } from "rxjs";
import { AdminService } from "../../../services/admin.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../../../models/user";

@Component({
  selector: "app-adminer",
  templateUrl: "./adminer.component.html",
  styleUrl: "./adminer.component.scss",
})
export class AdminerComponent {
  toggle: boolean = false;
  isAdmin = false;
  loading: boolean = true;
  userData!: User[];
  fetchUser$ = new BehaviorSubject({});
  sub = new Subscription();
  selectedWeb!: number;

  error!: string;

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
      this.passwordValidator,
    ]),
    roles: new FormControl("user", Validators.required),
  });

  users$ = this.fetchUser$.asObservable().pipe(
    switchMap((value) => {
      return this.adminService.getUsers();
    }),
    tap(() => (this.loading = false)),
  );

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private adminService: AdminService,
  ) {}

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.isAdmin = user.roles.includes("ROLE_ADMIN");
    this.sub.add(
      this.users$.subscribe((payload) => {
        this.userData = payload;
      }),
    );
  }

  onSubmit() {
    if (this.form.valid) {
      let body = {
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password,
        roles: [this.form.value.roles],
      };
      this.authService.register(body).subscribe(
        (res) => {
          this.fetchUser$.next({});
          this.loading = true;
          this.toggle = false;
        },
        (err) => {
          this.error = err.error;
        },
      );
    }
  }

  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    if (!regex.test(value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(() => {
      this.fetchUser$.next({});
      this.loading = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleAdd() {
    this.toggle = !this.toggle;
  }
}
