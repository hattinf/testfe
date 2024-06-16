import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrl: "./bar.component.scss",
})
export class BarComponent {
  @Input() id!: number;
  @Input() barColor!: string;
  @Input() images!: any;
}
