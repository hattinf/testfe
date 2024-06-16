import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { UpdateProp } from "../../../models/update";
import { Input, Output, EventEmitter } from "@angular/core";
import { Divider } from "../../../models/divider";

@Component({
  selector: "app-divider-editor",
  templateUrl: "./divider-editor.component.html",
  styleUrl: "./divider-editor.component.scss",
})
export class DividerEditorComponent {
  @Input() set code(prop: Divider) {
    if (prop) {
      this.form
        .get("id")
        ?.setValue(prop.id, { onlySelf: true, emitEvent: false });
      this.form
        .get("color")
        ?.setValue(prop.color, { onlySelf: true, emitEvent: false });
      this.form
        .get("size")
        ?.setValue(prop.size, { onlySelf: true, emitEvent: false });
    }
  }

  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

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
  ];

  change!: {
    id: number;
    props: {
      id: number;
      color: string;
      size: number;
    };
  };

  sub = new Subscription();
  form = new FormGroup({
    id: new FormControl(0),
    color: new FormControl(""),
    size: new FormControl(0),
  });

  ngOnInit() {
    this.sub.add(
      this.form.valueChanges
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

  getSize() {
    let i = this.form.get("size")?.value;
    if (i) {
      return this.sizeValues[i];
    } else {
      return "h-0";
    }
  }
}
