import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { ImagesService } from "../../../services/images.service";
import { environment } from "../../../../environments/environment.development";
import { Image, ImageBar } from "../../../models/image-bar";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-bar-editor",
  templateUrl: "./bar-editor.component.html",
  styleUrl: "./bar-editor.component.scss",
})
export class BarEditorComponent {
  @Input() set code(prop: ImageBar) {
    if (prop) {
      this.bar.patchValue(prop, { onlySelf: true, emitEvent: false });
      this.images = prop.images.images;
      this.props = prop;
    }
  }

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  props!: ImageBar;
  images!: Image[];
  sub = new Subscription();
  bar = new FormGroup({
    id: new FormControl(0),
    barColor: new FormControl(""),
  });

  upload = new FormGroup({
    image: new FormControl(""),
  });

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.sub.add(
      this.bar.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes: any) => {
          let update: UpdateProp = {
            id: this.id,
            props: {
              id: changes.id,
              barColor: changes.barColor,
              images: {
                images: this.images,
              },
            },
          };
          this.updateEvent(update);
        }),
    );
  }

  /*
   * Remove image from the bar
   */
  handleRemove(i: number) {
    this.imageService.deleteImage(this.images[i].image);
    this.images.splice(i, 1);
    this.updateImages();
  }

  /*
   * Update Bar Properties
   */
  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  /*
   * Update Images
   */
  updateImages() {
    this.props.images.images = this.images;
    let update: UpdateProp = {
      id: this.id,
      props: this.props,
    };
    this.updateEvent(update);
  }

  /*
   * Handle Image file changes and Convert to base64
   */
  onFileChange(event: any, control: FormControl) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let string = reader.result as string;
      const data = string.split(",")[1];
      control.patchValue(data);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleUpload() {
    const upload = {
      image: this.upload.value.image,
    };
    this.imageService.saveImage(upload).subscribe((res) => {
      this.images.push({
        image: environment.apiUrl + "image/" + res.id,
      });
    });
    this.updateImages();
    this.upload.reset();
  }
}
