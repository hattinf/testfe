import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { RegisterProp } from "../../../models/register-prop";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-register-prop",
  templateUrl: "./register-prop.component.html",
  styleUrl: "./register-prop.component.scss",
})
export class RegisterPropComponent {
  @Input() set code(prop: RegisterProp) {
    if (prop) {
      this.register
        .get("id")
        ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
      this.register
        .get("text")
        ?.setValue(prop.text, { onlySelf: true, emitEvent: false });
      this.register
        .get("textSize")
        ?.setValue(prop.textSize, { onlySelf: true, emitEvent: false });
      this.register
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.register
        .get("textStyle")
        ?.setValue(prop.textStyle, { onlySelf: true, emitEvent: false });
      this.register
        .get("subText")
        ?.setValue(prop.subText, { onlySelf: true, emitEvent: false });
      this.register
        .get("subTextSize")
        ?.setValue(prop.subTextSize, { onlySelf: true, emitEvent: false });
      this.register
        .get("subTextWeight")
        ?.setValue(prop.subTextWeight, { onlySelf: true, emitEvent: false });
      this.register
        .get("subTextStyle")
        ?.setValue(prop.subTextStyle, { onlySelf: true, emitEvent: false });
      this.register
        .get("color")
        ?.setValue(prop.color, { onlySelf: true, emitEvent: false });
      this.register
        .get("backgroundColor")
        ?.setValue(prop.backgroundColor, { onlySelf: true, emitEvent: false });
    }
  }
  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  change!: {
    id: number;
    props: {
      id: number;
      text: string;
      textSize: string;
      textWeight: string;
      textStyle: string;
      subText: string;
      subTextSize: string;
      subTextWeight: string;
      subTextStyle: string;
      color: string;
      backgroundColor: string;
    };
  };

  sub = new Subscription();
  register = new FormGroup({
    id: new FormControl(0),
    text: new FormControl(""),
    textSize: new FormControl(""),
    textWeight: new FormControl(""),
    textStyle: new FormControl(""),
    subText: new FormControl(""),
    subTextSize: new FormControl(""),
    subTextWeight: new FormControl(""),
    subTextStyle: new FormControl(""),
    color: new FormControl(""),
    backgroundColor: new FormControl(""),
  });

  ngOnInit() {
    this.sub.add(
      this.register.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          let update: UpdateProp = {
            id: this.id,
            props: changes,
          };
          this.updateEvent(update);
        }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  toggleValue(control: FormControl, value: string) {
    control.value === value
      ? control.patchValue("")
      : control.patchValue(value);
  }

  toggleBol(control: FormControl) {
    control.value ? control.patchValue(false) : control.patchValue(true);
  }
}
