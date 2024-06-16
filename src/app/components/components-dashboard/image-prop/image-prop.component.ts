import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { ImagesService } from "../../../services/images.service";
import { Image } from "../../../models/image";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-image-prop",
  templateUrl: "./image-prop.component.html",
  styleUrl: "./image-prop.component.scss",
})
export class ImagePropComponent {
  @Input() set code(prop: Image) {
    if (prop) {
      this.image.patchValue(prop, { onlySelf: true, emitEvent: false });
      this.image.controls["padding"].setValue(prop.padding, {
        onlySelf: true,
        emitEvent: false,
      });
    }
  }
  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  paddingValue: string[] = [
    "p-0",
    "p-1",
    "p-2",
    "p-3",
    "p-4",
    "p-5",
    "p-6",
    "p-7",
    "p-8",
    "p-9",
    "p-10",
    "p-11",
    "p-12",
    "p-14",
    "p-16",
    "p-20",
    "p-24",
    "p-28",
    "p-32",
    "p-36",
    "p-40",
    "p-44",
    "p-48",
    "p-52",
    "p-56",
    "p-60",
    "p-64",
    "p-72",
    "p-80",
    "p-96",
  ];

  constructor(private imageService: ImagesService) {}

  sub = new Subscription();

  image = new FormGroup({
    id: new FormControl(0),
    imageAltText: new FormControl(""),
    imageBackground: new FormControl(""),
    imageHeight: new FormControl(""),
    imageLink: new FormControl(""),
    padding: new FormControl(0),
  });

  ngOnInit() {
    this.sub.add(
      this.image.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes: any) => {
          let update: UpdateProp = {
            id: this.id,
            props: {
              id: changes.id,
              imageAltText: changes.imageAltText,
              imageBackground: changes.imageBackground,
              imageHeight: changes.imageHeight,
              imageLink: changes.imageLink,
              padding: changes.padding,
            },
          };
          this.updateEvent(update);
        }),
    );
  }

  handleChange($event: any) {
    this.imageService.onFileChange($event, this.image.controls["imageLink"]);
  }

  handleRemove() {
    this.imageService.onFileRemove(this.image.controls["imageLink"]);
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  getPadding() {
    let i = this.image.get("padding")?.value;
    if (i) {
      return this.paddingValue[i];
    } else {
      return "p-0";
    }
  }
}
