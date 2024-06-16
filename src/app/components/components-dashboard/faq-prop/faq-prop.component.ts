import { Input, Output, EventEmitter, Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { FormGroup, FormControl } from "@angular/forms";
import { Subscription, debounceTime, distinctUntilChanged } from "rxjs";
import { Faq, Faqs } from "../../../models/faq";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-faq-prop",
  templateUrl: "./faq-prop.component.html",
  styleUrl: "./faq-prop.component.scss",
})
export class FaqPropComponent {
  @Input() set code(prop: Faqs) {
    this.faqProp = prop;
    this.faqs = prop.data.faqs;
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

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  faqProp!: Faqs;
  faqs!: Faq[];
  toggle = false;
  selected!: Faq;
  selectedIndex: number = -1;

  sub = new Subscription();

  form = new FormGroup({
    id: new FormControl(0),
    color: new FormControl(""),
    backgroundColor: new FormControl(""),
    borderColor: new FormControl(""),
    textColor: new FormControl(""),
  });

  faqForm = new FormGroup({
    answer: new FormControl(""),
    question: new FormControl(""),
  });

  ngOnInit() {
    this.sub.add(
      this.form.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          this.faqProp.id = changes.id || 0;
          this.faqProp.color = changes.color || "";
          this.faqProp.backgroundColor = changes.backgroundColor || "";
          this.faqProp.borderColor = changes.borderColor || "";
          this.faqProp.textColor = changes.textColor || "";
          this.updateFaq();
        }),
    );
    this.sub.add(
      this.faqForm.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes) => {
          this.faqs[this.selectedIndex] = changes as Faq;
          this.updateFaq();
        }),
    );
  }

  updateFaq() {
    this.faqProp.data.faqs = this.faqs;
    let update: UpdateProp = {
      id: this.id,
      props: this.faqProp,
    };
    this.updateEvent(update);
  }

  select(selected: Faq, index: number) {
    if (!this.toggle) {
      this.toggleOpen();
    }
    this.faqForm.get("question")?.setValue(selected.question, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.faqForm.get("answer")?.setValue(selected.answer, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.selected = selected;
    this.selectedIndex = index;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.faqs, event.previousIndex, event.currentIndex);
    this.updateFaq();
  }

  toggleOpen() {
    this.toggle = !this.toggle;
  }

  addFaq() {
    this.faqs.push({
      answer: "Placeholder Answer",
      question: "Placeholder Question",
    });
  }

  daleteFaq(i: number) {
    this.faqs.splice(i, 1);
    this.updateFaq();
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }
}
