import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ViewComponent } from "../../../models/components";
import { UpdateProp } from "../../../models/update";
import { SelectedService } from "../../../services/selected.service";

@Component({
  selector: "app-components-select",
  templateUrl: "./components-select.component.html",
  styleUrl: "./components-select.component.scss",
})
export class ComponentsSelectComponent {
  @Input() component!: ViewComponent;
  @Input() i!: number;
  @Output() update = new EventEmitter<UpdateProp>();
  @Output() remove = new EventEmitter<number>();
  selected!: boolean;

  constructor(private selectedServices: SelectedService) {}

  toggle: boolean = false;

  ngOnInit() {
    this.selectedServices.retrieveChange().subscribe((value) => {
      this.updateEvent(value);
    });
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  toggleOpen() {
    this.toggle = !this.toggle;
  }

  removeComponent(i: number) {
    this.remove.emit(i);
  }
}
