import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Subscription, debounceTime, distinctUntilChanged } from "rxjs";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ImagesService } from "../../../services/images.service";
import { Participant, Showcase } from "../../../models/showcase";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-showcase-prop",
  templateUrl: "./showcase-prop.component.html",
  styleUrl: "./showcase-prop.component.scss",
})
export class ShowcasePropComponent {
  @Input() set code(prop: Showcase) {
    this.data = prop;
    this.participants = prop.data.participants;
    this.form
      .get("id")
      ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
    this.form
      .get("color")
      ?.setValue(prop.color, { onlySelf: true, emitEvent: false });
    this.form
      .get("backgroundColor")
      ?.setValue(prop.backgroundColor, { onlySelf: true, emitEvent: false });
    this.form
      .get("borderColor")
      ?.setValue(prop.borderColor, { onlySelf: true, emitEvent: false });
    this.form
      .get("textColor")
      ?.setValue(prop.textColor, { onlySelf: true, emitEvent: false });
  }

  data!: Showcase;
  participants!: Participant[];
  toggle = false;
  selected!: Participant;
  selectedIndex: number = -1;

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  constructor(private imageService: ImagesService) {}

  sub = new Subscription();
  form = new FormGroup({
    id: new FormControl(0),
    color: new FormControl(""),
    backgroundColor: new FormControl(""),
    borderColor: new FormControl(""),
    textColor: new FormControl(""),
  });

  participantForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    image: new FormControl(""),
    link: new FormControl(""),
  });

  ngOnInit() {
    this.sub.add(
      this.form.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes: any) => {
          this.data.id = changes.id;
          this.data.color = changes.color;
          this.data.backgroundColor = changes.backgroundColor;
          this.data.borderColor = changes.borderColor;
          this.data.textColor = changes.textColor;
          this.upadateParticipant();
        }),
    );
    this.sub.add(
      this.participantForm.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes: any) => {
          this.participants[this.selectedIndex] = changes;
          this.upadateParticipant();
        }),
    );
  }

  select(selected: Participant, index: number) {
    this.participantForm.get("name")?.setValue(selected.name, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.participantForm.get("description")?.setValue(selected.description, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.participantForm.get("image")?.setValue(selected.image, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.participantForm.get("link")?.setValue(selected.link, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    if (!this.toggle) {
      this.toggleOpen();
    }
    this.selected = selected;
    this.selectedIndex = index;
  }

  addParticipant() {
    const newParticipant = {
      name: "Place Holder",
      description: "Place Holder",
      image: "",
      link: "",
    };
    this.participants.push(newParticipant);
    this.upadateParticipant();
  }

  upadateParticipant() {
    this.data.data.participants = this.participants;
    let update: UpdateProp = {
      id: this.id,
      props: this.data,
    };
    this.updateEvent(update);
  }

  deleteParticipant(index: number) {
    this.participants.splice(index, 1);
    this.upadateParticipant();
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants, event.previousIndex, event.currentIndex);
    this.upadateParticipant();
  }

  toggleOpen() {
    this.toggle = !this.toggle;
  }

  trackByFn(index: Number, item: any) {
    return index;
  }

  handleChange($event: any) {
    this.imageService.onFileChange(
      $event,
      this.participantForm.controls["image"],
    );
  }

  handleRemove() {
    this.imageService.onFileRemove(this.participantForm.controls["image"]);
  }
}
