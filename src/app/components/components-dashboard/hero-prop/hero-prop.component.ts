import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { UpdateProp } from "../../../models/update";
import { HeroProp } from "../../../models/hero-prop";
import { ImagesService } from "../../../services/images.service";

@Component({
  selector: "app-hero-prop",
  templateUrl: "./hero-prop.component.html",
  styleUrl: "./hero-prop.component.scss",
})
export class HeroPropComponent {
  @Input() set code(prop: HeroProp) {
    if (prop) {
      this.page
        .get("id")
        ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
      this.page
        .get("name")
        ?.setValue(prop.name, { onlySelf: true, emitEvent: false });
      this.page
        .get("subText")
        ?.setValue(prop.subText, { onlySelf: true, emitEvent: false });
      this.page
        .get("textColor")
        ?.setValue(prop.textColor, { onlySelf: true, emitEvent: false });
      this.page
        .get("backgroundColor")
        ?.setValue(prop.backgroundColor, { onlySelf: true, emitEvent: false });
      this.page
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.page
        .get("textStyle")
        ?.setValue(prop.textStyle, { onlySelf: true, emitEvent: false });
      this.page
        .get("subTextSize")
        ?.setValue(prop.subTextSize, { onlySelf: true, emitEvent: false });
      this.page
        .get("subTextWeight")
        ?.setValue(prop.subTextWeight, { onlySelf: true, emitEvent: false });
      this.page
        .get("subTextStyle")
        ?.setValue(prop.subTextStyle, { onlySelf: true, emitEvent: false });
      this.page
        .get("textWeight")
        ?.setValue(prop.textWeight, { onlySelf: true, emitEvent: false });
      this.page
        .get("sizeY")
        ?.setValue(prop.sizeY, { onlySelf: true, emitEvent: false });
      this.page
        .get("image")
        ?.setValue(prop.image, { onlySelf: true, emitEvent: false });
      this.page
        .get("imageToggle")
        ?.setValue(prop.imageToggle, { onlySelf: true, emitEvent: false });
      this.page
        .get("imageTintColor")
        ?.setValue(prop.imageTintColor, { onlySelf: true, emitEvent: false });
      this.page
        .get("imageDarken")
        ?.setValue(prop.imageDarken, { onlySelf: true, emitEvent: false });
      this.page
        .get("alignText")
        ?.setValue(prop.alignText, { onlySelf: true, emitEvent: false });
      this.page
        .get("justifyText")
        ?.setValue(prop.justifyText, { onlySelf: true, emitEvent: false });
    }
  }

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  change!: {
    id: number;
    props: {
      id: number;
      name: string;
      subText: string;
      textColor: string;
      backgroundColor: string;
      textWeight: string;
      textStyle: string;
      subTextSize: string;
      subTextWeight: string;
      subTextStyle: string;
      sizeY: number;
      image: string;
      imageToggle: boolean;
      imageTintColor: string;
      imageDarken: string;
      alignText: string;
      justifyText: string;
    };
  };

  sub = new Subscription();
  page = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(""),
    subText: new FormControl(""),
    textWeight: new FormControl(""),
    textStyle: new FormControl(""),
    subTextSize: new FormControl(""),
    subTextWeight: new FormControl(""),
    subTextStyle: new FormControl(""),
    textColor: new FormControl(""),
    backgroundColor: new FormControl(""),
    sizeY: new FormControl(1),
    image: new FormControl(""),
    imageToggle: new FormControl(false),
    imageTintColor: new FormControl(""),
    imageDarken: new FormControl(""),
    alignText: new FormControl(""),
    justifyText: new FormControl(""),
  });

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.sub.add(
      this.page.valueChanges
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

  handleChange($event: any) {
    this.imageService.onFileChange($event, this.page.controls["image"]);
  }

  handleRemove() {
    this.imageService.onFileRemove(this.page.controls["image"]);
  }

  setAlignText(value: string) {
    this.page.controls["alignText"].patchValue(value);
  }

  setJustifyText(value: string) {
    this.page.controls["justifyText"].patchValue(value);
  }

  sizeValues: string[] = [
    "h-0",
    "h-1",
    "h-2",
    "h-3",
    "h-4",
    "h-5",
    "h-6",
    "h-7",
    "h-8",
    "h-9",
    "h-10",
    "h-11",
    "h-12",
    "h-14",
    "h-16",
    "h-20",
    "h-24",
    "h-28",
    "h-32",
    "h-36",
    "h-40",
    "h-44",
    "h-48",
    "h-52",
    "h-56",
    "h-60",
    "h-64",
    "h-72",
    "h-80",
    "h-96",
    "h-100",
    "h-104",
    "h-108",
    "h-112",
    "h-116",
    "h-120",
  ];

  getSize() {
    let i = this.page.get("sizeY")?.value;
    if (i) {
      return this.sizeValues[i];
    } else {
      return "h-0";
    }
  }
}
