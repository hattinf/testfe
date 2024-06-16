import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NavigationType, UpdateNavigation } from "../../../models/update";
import { SelectedService } from "../../../services/selected.service";

@Component({
  selector: "app-navigation-section",
  templateUrl: "./navigation-section.component.html",
  styleUrl: "./navigation-section.component.scss",
})
export class NavigationSectionComponent {
  @Input() title!: string;
  @Input() navigation!: NavigationType;
  @Output() update = new EventEmitter<UpdateNavigation>();

  toggle: boolean = false;
  toggleDelete: boolean = false;

  constructor(private selectedServices: SelectedService) {}

  ngOnInit() {
    this.selectedServices.retrieveNavChange().subscribe((value) => {
      this.updateEvent(value);
    });
  }

  toggleOpenDelete() {
    this.toggleDelete = !this.toggleDelete;
  }

  updateEvent(update: UpdateNavigation) {
    this.update.emit(update);
  }

  deleteEvent() {
    let update: UpdateNavigation = {
      type: "delete",
      data: {
        id: this.navigation.id,
        logo: this.navigation.logo,
        backgroundColor: this.navigation.backgroundColor,
        linkColor: this.navigation.linkColor,
        links: this.navigation.links,
      },
    };
    this.updateEvent(update);
    this.toggleOpenDelete();
  }
}
