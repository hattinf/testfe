import { Component } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { TokenStorageService } from "../../../services/token-storage.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.dashboard();
    }
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.dashboard();
      },
      (err) => {
        if (err.status === 403) {
          this.errorMessage = "Invalid username or password";
        }
        this.isLoginFailed = true;
      },
    );
  }

  dashboard() {
    window.location.href = "/dashboard/websites";
  }
}
