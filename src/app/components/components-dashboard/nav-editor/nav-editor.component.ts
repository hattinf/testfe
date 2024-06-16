import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { NavigationType, UpdateNavigation } from "../../../models/update";
import { SelectedService } from "../../../services/selected.service";
import { ImagesService } from "../../../services/images.service";

@Component({
  selector: "app-nav-editor",
  templateUrl: "./nav-editor.component.html",
  styleUrl: "./nav-editor.component.scss",
})
export class NavEditorComponent {
  @Input() title!: string;
  @Input() navigation!: NavigationType;
  @Output() update = new EventEmitter<UpdateNavigation>();

  sub = new Subscription();
  nav = new FormGroup({
    logo: new FormControl(""),
    backgroundColor: new FormControl(""),
    linkColor: new FormControl(""),
  });

  constructor(
    private selectedServices: SelectedService,
    private imageService: ImagesService,
  ) {}

  ngOnInit() {
    this.nav.get("logo")?.patchValue(this.navigation.logo);
    this.nav
      .get("backgroundColor")
      ?.patchValue(this.navigation.backgroundColor);
    this.nav.get("linkColor")?.patchValue(this.navigation.linkColor);

    this.sub.add(
      this.nav.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          let update: UpdateNavigation = {
            type: "update",
            data: {
              id: this.navigation.id,
              logo: changes.logo ? changes.logo : "",
              backgroundColor: changes.backgroundColor
                ? changes.backgroundColor
                : "",
              linkColor: changes.linkColor ? changes.linkColor : "",
              links: this.navigation.links,
            },
          };
          this.updateEvent(update);
        }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateEvent(update: UpdateNavigation) {
    this.selectedServices.selectNavChange(update);
    this.update.emit(update);
  }

  handleChange($event: any) {
    this.imageService.onFileChange($event, this.nav.controls["logo"]);
  }

  handleRemove() {
    this.imageService.onFileRemove(this.nav.controls["logo"]);
  }
}
