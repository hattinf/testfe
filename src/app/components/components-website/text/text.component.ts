import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { textColor } from "../../../models/colors";
import { ImagesService } from "../../../services/images.service";

interface value {
  [key: string]: string;
}

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss",
})
export class TextComponent {
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
  @Input() toggleSide!: boolean;
  @Input() toggleColor!: string;
  @Input() toggleFlip!: boolean;
  @Input() image!: string;
  @Input() imageTintColor!: string;
  @Input() imageDarken!: string;
  @Input() imageToggle!: string;
  @Input() alignText!: string;
  @Input() justifyText!: string;

  returnTextColor() {
    return textColor[this.color];
  }

  brig: value = {
    "brightness-0": "brightness-0",
    "brightness-50": "brightness-50",
    "brightness-75": "brightness-75",
    "brightness-90": "brightness-90",
    "brightness-95": "brightness-95",
    "brightness-100": "brightness-100",
  };

  getImageDarken(darken: string) {
    return this.brig[darken];
  }
}
