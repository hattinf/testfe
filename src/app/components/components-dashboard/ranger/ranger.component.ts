import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-ranger",
  templateUrl: "./ranger.component.html",
  styleUrl: "./ranger.component.scss",
})
export class RangerComponent {
  @Input() control!: FormControl;
  @Input() range!: number[];
  values: number[] = [0, 50, 75, 90, 95, 100];

  setValue(value: string) {
    const brightness = value.replace("brightness-", "");
    return this.values.indexOf(parseInt(brightness));
  }

  onInputChange(e: any) {
    const brightness = "brightness-" + this.values[e.target.value];
    this.control.setValue(brightness);
  }
}
