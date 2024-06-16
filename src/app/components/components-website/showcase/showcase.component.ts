import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription, debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-showcase",
  templateUrl: "./showcase.component.html",
  styleUrl: "./showcase.component.scss",
})
export class ShowcaseComponent {
  @Input() id!: number;
  @Input() data!: any;
  @Input() color!: string;
  @Input() backgroundColor!: string;
  @Input() borderColor!: string;
  @Input() textColor!: string;

  sub = new Subscription();
  search = new FormControl("");
  searchValue = "";

  selectedIndex!: number;

  participants!: any[];

  ngOnInit() {
    this.participants = this.data.participant;

    this.sub.add(
      this.search.valueChanges
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((value) => {
          if (value) {
            this.participants = this.data.participant.filter((ele: any) => {
              return ele.name.toLowerCase().includes(value.toLowerCase());
            });
          } else {
            this.participants = this.data.participant;
          }
        }),
    );
  }

  selected(i: number) {
    this.selectedIndex = i;
  }

  deselect() {
    this.selectedIndex = -1;
  }
}
