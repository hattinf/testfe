import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RegisterService } from "../../../services/register.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  @Input() id!: number;
  @Input() text!: string;
  @Input() textSize!: string;
  @Input() textWeight!: string;
  @Input() textStyle!: string;
  @Input() subText!: string;
  @Input() subTextSize!: string;
  @Input() subTextWeight!: string;
  @Input() subTextStyle!: string;
  @Input() color!: string;
  @Input() backgroundColor!: string;

  webID!: number;
  message!: {
    msg: string;
    error: boolean;
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private register: RegisterService,
  ) {}

  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    newsletter: new FormControl(false),
  });

  ngOnInit() {
    this.activatedRoute.params.subscribe((value) => {
      this.webID = value["id"];
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.register.registerData(form.value, this.webID).subscribe({
        error: (e) => {
          this.message = {
            msg: "Already registered or server error!",
            error: true,
          };

          ("Already registered or server error!");
        },
        complete: () =>
          (this.message = {
            msg: "Successfully registered!",
            error: false,
          }),
      });
    }
  }

  get name() {
    return this.registerForm.get("name");
  }

  get surname() {
    return this.registerForm.get("surname");
  }

  get email() {
    return this.registerForm.get("email");
  }

  getTextColorClass(color: string): string {
    return color;
  }

  getBgColorClass(color: string): string {
    return color;
  }
}
