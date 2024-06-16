import { Component, Input } from "@angular/core";

interface value {
  [key: string]: string;
}

@Component({
  selector: "app-divider",
  templateUrl: "./divider.component.html",
  styleUrl: "./divider.component.scss",
})
export class DividerComponent {
  @Input() id!: number;
  @Input() color!: string;
  @Input() size!: number;

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
  ];

  returnSize() {
    return this.sizeValues[this.size];
  }
}
