import { Component, EventEmitter, Output } from "@angular/core";
import { SelectedService } from "../../../services/selected.service";
import { Selected } from "../../../models/selected";

@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrl: "./side.component.scss",
})
export class SideComponent {
  selectedElement!: Selected;
  selectedIndex!: number;
  @Output() selected = new EventEmitter<boolean>();

  constructor(private selectedService: SelectedService) {}

  ngOnInit() {
    this.selectedService.retrieveComp().subscribe((value) => {
      this.selectedElement = value;
      this.selectedIndex = 0;
      if (this.selectedElement.type === "component") {
        this.selectedIndex = this.selectedElement.payload.index;
      }
      this.selected.emit(true);
    });

    this.selectedService.retrieveCloseSide().subscribe(() => {
      this.close();
    });
  }

  updateEvent(update: any) {
    this.selectedService.selectChange(update);
  }

  close() {
    this.selectedElement = {
      type: "none",
      payload: {},
    };
    this.selectedIndex = 0;
    this.selected.emit(false);
  }
}
