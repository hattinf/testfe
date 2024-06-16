import { Component, EventEmitter, Input, Output } from "@angular/core";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { UpdateProp } from "../../../models/update";
import { FormControl, FormGroup } from "@angular/forms";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ImagesService } from "../../../services/images.service";
import { Card, Cards } from "../../../models/cards";

@Component({
  selector: "app-card-prop",
  templateUrl: "./card-prop.component.html",
  styleUrl: "./card-prop.component.scss",
})
export class CardPropComponent {
  @Input() props!: Cards;
  @Input() id!: number;
  @Input() set code(props: Cards) {
    this.backgroundColor.patchValue(props.backgroundColor, {
      onlySelf: true,
      emitEvent: false,
    });
  }
  @Output() update = new EventEmitter<UpdateProp>();

  cards!: any[];
  selected!: Card;
  selectedIndex!: number;
  toggle: boolean = false;

  sub = new Subscription();

  backgroundColor = new FormControl("");

  form = new FormGroup({
    title: new FormControl(""),
    titleSize: new FormControl(""),
    titleColor: new FormControl(""),
    description: new FormControl(""),
    descriptionSize: new FormControl(""),
    descriptionColor: new FormControl(""),
    image: new FormControl(""),
    color: new FormControl(""),
  });

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.cards = this.props.data.cards;
    this.sub.add(
      this.form.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          this.cards[this.selectedIndex] = changes;
          this.updateCards();
        }),
    );
    this.sub.add(
      this.backgroundColor.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          this.props.backgroundColor = changes || "transparent";
          this.updateCards();
        }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  select(selected: Card, index: number) {
    if (!this.toggle) {
      this.toggleOpen();
    }
    this.form.get("title")?.setValue(selected.title, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("description")?.setValue(selected.description, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("titleSize")?.setValue(selected.titleSize, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("descriptionSize")?.setValue(selected.descriptionSize, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("titleColor")?.setValue(selected.titleColor, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("descriptionColor")?.setValue(selected.descriptionColor, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("image")?.setValue(selected.image, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("color")?.setValue(selected.color, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.selected = selected;
    this.selectedIndex = index;
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  toggleOpen() {
    this.toggle = !this.toggle;
  }

  addCard() {
    let card = {
      title: "DEFAULT",
      titleSize: "text-2xl",
      titleColor: "text-black",
      description: "DEFAULT IMAGE IS VERY CUTE",
      descriptionSize: "text-sm",
      descriptionColor: "text-gray-500",
      image: "",
      color: "bg-white",
    };
    this.cards.push(card);
    this.updateCards();
  }

  deleteCard(i: number) {
    this.cards.splice(i, 1);
    this.updateCards();
  }

  updateCards() {
    this.props.data.cards = this.cards;
    let update: UpdateProp = {
      id: this.id,
      props: this.props,
    };
    this.updateEvent(update);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.updateCards();
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  toggleValue(control: FormControl, value: string) {
    control.value === value
      ? control.patchValue("")
      : control.patchValue(value);
  }

  toggleBol(control: FormControl) {
    control.value ? control.patchValue(false) : control.patchValue(true);
  }

  handleChange($event: any) {
    this.imageService.onFileChange($event, this.form.controls["image"]);
  }

  handleRemove() {
    this.imageService.onFileRemove(this.form.controls["image"]);
  }
}
