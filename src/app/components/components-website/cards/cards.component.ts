import { Component, Input } from "@angular/core";
import { Card } from "../../../models/cards";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
})
export class CardsComponent {
  @Input() id!: number;
  @Input() data!: {
    cards: Card[];
  };
  @Input() backgroundColor!: string;

  calculateGrid() {
    if (this.data.cards.length === 4) {
      return "md:grid-cols-4";
    } else if (this.data.cards.length === 3) {
      return "md:grid-cols-3";
    } else if (this.data.cards.length === 2) {
      return "md:grid-cols-2";
    } else {
      return "md:grid-cols-1";
    }
  }
}
