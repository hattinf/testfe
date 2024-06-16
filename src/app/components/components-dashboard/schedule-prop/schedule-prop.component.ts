import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { Activity, Schedule } from "../../../models/schedule";
import { UpdateProp } from "../../../models/update";

@Component({
  selector: "app-schedule-prop",
  templateUrl: "./schedule-prop.component.html",
  styleUrl: "./schedule-prop.component.scss",
})
export class SchedulePropComponent {
  @Input() props!: Schedule;
  @Input() set code(props: Schedule) {
    this.main.get("mainDate")?.setValue(props.data.date, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("mainTitle")?.setValue(props.data.title, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("titleStyle")?.setValue(props.data.titleStyle, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("titleWeight")?.setValue(props.data.titleWeight, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("titleSize")?.setValue(props.data.titleSize, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("color")?.setValue(props.data.color, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("titleColor")?.setValue(props.data.titleColor, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.main.get("textColor")?.setValue(props.data.textColor, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.activities = this.props.data.activities;
  }
  @Input() id!: number;
  @Output() update = new EventEmitter<UpdateProp>();

  sub = new Subscription();
  main = new FormGroup({
    mainDate: new FormControl(""),
    mainTitle: new FormControl(""),
    titleStyle: new FormControl(""),
    titleWeight: new FormControl(""),
    titleSize: new FormControl(""),
    color: new FormControl(""),
    titleColor: new FormControl(""),
    textColor: new FormControl(""),
  });

  form = new FormGroup({
    title: new FormControl(""),
    from: new FormControl(""),
    to: new FormControl(""),
    description: new FormControl(""),
    location: new FormControl(""),
  });

  activities!: Activity[];
  selected!: Activity;
  selectedIndex!: number;
  toggle: boolean = false;

  ngOnInit() {
    this.sub.add(
      this.main.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changes: any) => {
          this.props.data.date = changes.mainDate;
          this.props.data.title = changes.mainTitle;
          this.props.data.titleStyle = changes.titleStyle;
          this.props.data.titleWeight = changes.titleWeight;
          this.props.data.titleSize = changes.titleSize;
          this.props.data.color = changes.color;
          this.props.data.titleColor = changes.titleColor;
          this.props.data.textColor = changes.textColor;
          this.updateSchedule();
        }),
    );
    this.sub.add(
      this.form.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((change: any) => {
          this.activities[this.selectedIndex] = change as Activity;
          this.updateSchedule();
        }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  select(selected: Activity, index: number) {
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
    this.form.get("from")?.setValue(selected.from, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("to")?.setValue(selected.to, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.form.get("location")?.setValue(selected.location, {
      onlySelf: true,
      emitEvent: false,
      preserveFocus: true,
    });
    this.selected = selected;
    this.selectedIndex = index;
  }

  updateEvent(update: UpdateProp) {
    this.update.emit(update);
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  toggleOpen() {
    this.toggle = !this.toggle;
  }

  closeToggle() {
    this.toggle = false;
  }

  deleteActivity(i: number) {
    this.activities.splice(i, 1);
    this.updateSchedule();
  }

  addActivity() {
    let card = {
      title: "sample title",
      description: "sample description",
      from: "",
      to: "",
      location: "none",
    };
    this.activities.push(card);
    this.updateSchedule();
  }

  updateSchedule() {
    this.props.data.activities = this.activities;
    let update: UpdateProp = {
      id: this.id,
      props: this.props,
    };
    this.updateEvent(update);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activities, event.previousIndex, event.currentIndex);
    this.updateSchedule();
  }

  toggleValue(control: FormControl, value: string) {
    control.value === value
      ? control.patchValue("")
      : control.patchValue(value);
  }

  toggleBol(control: FormControl) {
    control.value ? control.patchValue(false) : control.patchValue(true);
  }
}
