import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrl: "./image.component.scss",
})
export class ImageComponent {
  @Input() id!: number;
  @Input() imageLink!: string;
  @Input() imageAltText!: string;
  @Input() imageBackground!: boolean;
  @Input() imageHeight!: string;
  @Input() padding!: number;

  sizeValues: string[] = [
    "md:p-0",
    "md:p-1",
    "md:p-2",
    "md:p-3",
    "md:p-4",
    "md:p-5",
    "md:p-6",
    "md:p-7",
    "md:p-8",
    "md:p-9",
    "md:p-10",
    "md:p-11",
    "md:p-12",
    "md:p-14",
    "md:p-16",
    "md:p-20",
    "md:p-24",
    "md:p-28",
    "md:p-32",
    "md:p-36",
    "md:p-40",
    "md:p-44",
    "md:p-48",
    "md:p-52",
    "md:p-56",
    "md:p-60",
    "md:p-64",
    "md:p-72",
    "md:p-80",
    "md:p-96",
  ];

  returnPadding() {
    if (this.padding == null || this.padding == undefined) {
      return "p-10";
    }
    return this.sizeValues[this.padding];
  }
}
