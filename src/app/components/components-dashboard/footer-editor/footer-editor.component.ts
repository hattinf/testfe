import { SelectedService } from "../../../services/selected.service";
import { NavigationType, UpdateNavigation } from "../../../models/update";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { Input, Output, EventEmitter, Component } from "@angular/core";
import { Navigation } from "../../../models/navigation";
import { Footer } from "../../../models/footer";

@Component({
  selector: "app-footer-editor",
  templateUrl: "./footer-editor.component.html",
  styleUrl: "./footer-editor.component.scss",
})
export class FooterEditorComponent {
  @Input() title!: string;
  @Input() navigation!: Footer;
  @Output() update = new EventEmitter<UpdateNavigation>();

  sub = new Subscription();
  nav = new FormGroup({
    bottomText: new FormControl(""),
    backgroundColor: new FormControl(""),
    linkColor: new FormControl(""),
  });

  constructor(private selectedServices: SelectedService) {}

  ngOnInit() {
    this.nav.get("bottomText")?.patchValue(this.navigation.bottomText);
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
              bottomText: changes.bottomText ? changes.bottomText : "",
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
}
