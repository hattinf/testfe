import { Component, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-component",
  templateUrl: "./add-component.component.html",
  styleUrl: "./add-component.component.scss",
})
export class AddComponentComponent {
  @Input() index!: number;
  @Output() closeEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();

  componentValues = [
    {
      group: "Text",
      components: [
        { value: "HRP", text: "TITLE" },
        { value: "TPR", text: "TEXT BlOCK" },
      ],
    },
    {
      group: "Media",
      components: [
        { value: "MDA", text: "VIDEO" },
        { value: "BRP", text: "IMAGE BAR" },
        { value: "IMG", text: "IMAGE" },
      ],
    },
    {
      group: "Cards",
      components: [
        { value: "CRP", text: "CARDS" },
        { value: "SHP", text: "AGENDA" },
        { value: "SHC", text: "SHOWCASE" },
        { value: "FPR", text: "FAQ" },
      ],
    },
    {
      group: "Registration",
      components: [{ value: "RPR", text: "FORM" }],
    },
    {
      group: "Divider",
      components: [{ value: "DIV", text: "DIVIDER" }],
    },
  ];

  closeAdd() {
    this.closeEvent.emit();
  }

  /*
   * Add component to the page
   */
  addComponent(type: string) {
    const add = {
      type: type,
      index: this.index,
    };
    this.addEvent.emit(add);
  }
}
