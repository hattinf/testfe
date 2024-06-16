import { Component, Input } from "@angular/core";
import { colors } from "../../../models/colors";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrl: "./color.component.scss",
})
export class ColorComponent {
  @Input() set select(choice: string) {
    switch (choice) {
      case "text":
        this.prefix = "text";
        break;
      case "background":
        this.prefix = "bg";
        break;
      case "border":
        this.prefix = "border";
        break;
    }
  }
  @Input() label!: string;
  @Input() control!: FormControl;
  prefix!: string;
  colors: any[] = colors;

  open: boolean = false;

  setColor(color: string) {
    this.toggle();
    this.control.patchValue(color);
  }

  selectedColor(color: string) {
    return color === this.rawColor() ? true : false;
  }

  toggle() {
    this.open = !this.open;
  }

  rawColor() {
    let c = this.control.value.replace(this.prefix, "");
    return c;
  }
}
