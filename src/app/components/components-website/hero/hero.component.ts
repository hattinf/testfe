import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { textColor } from "../../../models/colors";
import { ImagesService } from "../../../services/images.service";

interface value {
  [key: string]: string;
}

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() subText!: string;
  @Input() textWeight!: string;
  @Input() textStyle!: string;

  @Input() textSize!: string;
  @Input() subTextSize!: string;
  @Input() subTextWeight!: string;
  @Input() subTextStyle!: string;
  @Input() textColor!: string;
  @Input() backgroundColor!: string;
  @Input() sizeY!: number;
  @Input() image!: string;
  @Input() imageTintColor!: string;
  @Input() imageDarken!: string;
  @Input() imageToggle!: string;
  @Input() alignText!: string;
  @Input() justifyText!: string;

  brig: value = {
    "brightness-0": "brightness-0",
    "brightness-50": "brightness-50",
    "brightness-75": "brightness-75",
    "brightness-90": "brightness-90",
    "brightness-95": "brightness-95",
    "brightness-100": "brightness-100",
  };

  sizeValues: string[] = [
    "md:h-0",
    "md:h-1",
    "md:h-2",
    "md:h-3",
    "md:h-4",
    "md:h-5",
    "md:h-6",
    "md:h-7",
    "md:h-8",
    "md:h-9",
    "md:h-10",
    "md:h-11",
    "md:h-12",
    "md:h-14",
    "md:h-16",
    "md:h-20",
    "md:h-24",
    "md:h-28",
    "md:h-32",
    "md:h-36",
    "md:h-40",
    "md:h-44",
    "md:h-48",
    "md:h-52",
    "md:h-56",
    "md:h-60",
    "md:h-64",
    "md:h-72",
    "md:h-80",
    "md:h-96",
    "md:h-[28rem]",
    "md:h-[32rem]",
    "md:h-[36rem]",
    "md:h-[40rem]",
    "md:h-[44rem]",
    "md:h-[48rem]",
  ];

  getTextColorClass(color: string): string {
    return textColor[color];
  }

  getBgColorClass(color: string): string {
    return color;
  }

  getImageDarken(darken: string) {
    return this.brig[darken];
  }

  returnSize() {
    return this.sizeValues[this.sizeY];
  }
}
