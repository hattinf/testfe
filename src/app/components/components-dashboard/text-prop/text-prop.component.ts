import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { TextProp } from "../../../models/text-prop";
import { UpdateProp } from "../../../models/update";
import { ImagesService } from "../../../services/images.service";

@Component({
  selector: "app-text-prop",
  templateUrl: "./text-prop.component.html",
  styleUrl: "./text-prop.component.scss",
})
export class TextPropComponent {
  @Input() set code(prop: TextProp) {
    if (prop) {
      this.text
        .get("id")
        ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
      this.text
        .get("text")
        ?.setValue(prop.text, { onlySelf: true, emitEvent: false });
      this.text
        .get("textSize")
        ?.setValue(prop.textSize, { onlySelf: true, emitEvent: false });
      this.text
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.text
        .get("textStyle")
        ?.setValue(prop.textStyle, { onlySelf: true, emitEvent: false });
      this.text
        .get("subText")
        ?.setValue(prop.subText, { onlySelf: true, emitEvent: false });
      this.text
        .get("subTextSize")
        ?.setValue(prop.subTextSize, { onlySelf: true, emitEvent: false });
      this.text
        .get("subTextWeight")
        ?.setValue(prop.subTextWeight, { onlySelf: true, emitEvent: false });
      this.text
        .get("subTextStyle")
        ?.setValue(prop.subTextStyle, { onlySelf: true, emitEvent: false });
      this.text
        .get("color")
        ?.setValue(prop.color, { onlySelf: true, emitEvent: false });
      this.text
        .get("backgroundColor")
        ?.setValue(prop.backgroundColor, { onlySelf: true, emitEvent: false });
      this.text
        .get("toggleSide")
        ?.setValue(prop.toggleSide, { onlySelf: true, emitEvent: false });
      this.text
        .get("toggleColor")
        ?.setValue(prop.toggleColor, { onlySelf: true, emitEvent: false });
      this.text
        .get("toggleFlip")
        ?.setValue(prop.toggleFlip, { onlySelf: true, emitEvent: false });
      this.text
        .get("image")
        ?.setValue(prop.image, { onlySelf: true, emitEvent: false });
      this.text
        .get("imageTintColor")
        ?.setValue(prop.imageTintColor, { onlySelf: true, emitEvent: false });
      this.text
        .get("imageDarken")
        ?.setValue(prop.imageDarken, { onlySelf: true, emitEvent: false });
      this.text
        .get("imageToggle")
        ?.setValue(prop.imageToggle, { onlySelf: true, emitEvent: false });
      this.text
        .get("alignText")
        ?.setValue(prop.alignText, { onlySelf: true, emitEvent: false });
      this.text
        .get("justifyText")
        ?.setValue(prop.justifyText, { onlySelf: true, emitEvent: false });
    }
  }

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  constructor(private imageService: ImagesService) {}

  sub = new Subscription();
  text = new FormGroup({
    id: new FormControl(0),
    text: new FormControl(""),
    textSize: new FormControl(""),
    textWeight: new FormControl(""),
    textStyle: new FormControl(""),
    subText: new FormControl(""),
    subTextSize: new FormControl(""),
    subTextWeight: new FormControl(""),
    subTextStyle: new FormControl(""),
    color: new FormControl(""),
    backgroundColor: new FormControl(""),
    toggleSide: new FormControl(false),
    toggleColor: new FormControl(""),
    toggleFlip: new FormControl(false),
    image: new FormControl(""),
    imageToggle: new FormControl(""),
    imageTintColor: new FormControl(""),
    imageDarken: new FormControl(""),
    alignText: new FormControl(""),
    justifyText: new FormControl(""),
  });

  ngOnInit() {
    this.sub.add(
      this.text.valueChanges
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

  updateEvent(update: any) {
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

  handleChange($event: any) {
    this.imageService.onFileChange($event, this.text.controls["image"]);
  }

  handleRemove() {
    this.imageService.onFileRemove(this.text.controls["image"]);
  }

  setAlignText(value: string) {
    this.text.controls["alignText"].patchValue(value);
  }

  setJustifyText(value: string) {
    this.text.controls["justifyText"].patchValue(value);
  }
}
