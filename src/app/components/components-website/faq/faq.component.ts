import { Component, Input } from "@angular/core";
import { Faq } from "../../../models/faq";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrl: "./faq.component.scss",
})
export class FaqComponent {
  @Input() id!: number;
  @Input() data!: {
    faqs: Faq[];
  };
  @Input() color!: string;
  @Input() backgroundColor!: string;
  @Input() borderColor!: string;
  @Input() textColor!: string;

  selected: number = -1;

  toggleAccordion(index: number) {
    if (this.selected === index) {
      this.selected = -1;
    } else {
      this.selected = index;
    }
  }
}
