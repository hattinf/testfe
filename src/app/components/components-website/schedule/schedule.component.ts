import { Component, Input } from "@angular/core";
import { textColor, borderColor } from "../../../models/colors";
import { Activity } from "../../../models/schedule";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrl: "./schedule.component.scss",
})
export class ScheduleComponent {
  @Input() id!: number;
  @Input() data!: {
    date: string;
    title: string;
    titleSize: string;
    titleStyle: string;
    titleWeight: string;
    titleColor: string;
    color: string;
    textColor: string;
    activities: Activity[];
  };

  month!: string;
  day!: number;
  year!: number;

  ngOnInit() {
    this.month = this.getMonthString(new Date(this.data.date).getMonth());
    this.day = new Date(this.data.date).getDate();
    this.year = new Date(this.data.date).getFullYear();
  }

  getMonthString(month: number) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month] || "invalid month provided";
  }

  convertBackground(input: string) {
    return textColor[input.replace("bg", "text").toLowerCase()];
  }

  getTextColor(input: string) {
    return textColor[input];
  }

  convertBorder(input: string) {
    return borderColor[input.replace("bg", "border").toLowerCase()];
  }
}
