import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { UpdateProp } from "../../../models/update";
import { Media } from "../../../models/media";

@Component({
  selector: "app-media-prop",
  templateUrl: "./media-prop.component.html",
  styleUrl: "./media-prop.component.scss",
})
export class MediaPropComponent {
  @Input() set code(prop: Media) {
    if (prop) {
      this.mediaForm
        .get("id")
        ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("media")
        ?.setValue(prop.media, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("text")
        ?.setValue(prop.text, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("textSize")
        ?.setValue(prop.textSize, { onlySelf: true, emitEvent: false });

      this.mediaForm
        .get("subText")
        ?.setValue(prop.subText, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("color")
        ?.setValue(prop.color, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("backgroundColor")
        ?.setValue(prop.backgroundColor, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("textStyle")
        ?.setValue(prop.textStyle, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("subTextSize")
        ?.setValue(prop.subTextSize, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("subTextWeight")
        ?.setValue(prop.subTextWeight, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("subTextStyle")
        ?.setValue(prop.subTextStyle, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.mediaForm
        .get("textToggle")
        ?.setValue(prop.textToogle, { onlySelf: true, emitEvent: false });
    }
  }

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  sub = new Subscription();
  mediaForm = new FormGroup({
    id: new FormControl(0),
    media: new FormControl(""),
    text: new FormControl(""),
    textSize: new FormControl(""),
    subText: new FormControl(""),
    textWeight: new FormControl(""),
    textStyle: new FormControl(""),
    subTextSize: new FormControl(""),
    subTextWeight: new FormControl(""),
    subTextStyle: new FormControl(""),
    color: new FormControl(""),
    backgroundColor: new FormControl(""),
    textToggle: new FormControl(false),
  });

  ngOnInit() {
    this.sub.add(
      this.mediaForm.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          let update: UpdateProp = {
            id: this.id,
            props: changes,
          };
          this.updateEvent(update);
        }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  toggleValue(control: FormControl, value: string) {
    control.value === value
      ? control.patchValue("")
      : control.patchValue(value);
  }

  handleToggle(control: FormControl) {
    control.value === true ? control.setValue(false) : control.setValue(true);
  }

  toggleBol(control: FormControl) {
    control.value ? control.patchValue(false) : control.patchValue(true);
  }
}
