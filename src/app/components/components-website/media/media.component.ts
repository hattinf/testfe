import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { textColor } from "../../../models/colors";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrl: "./media.component.scss",
})
export class MediaComponent {
  @Input() id!: number;
  @Input() media!: string;
  @Input() backgroundColor!: string;
  @Input() color!: string;
  @Input() text!: string;
  @Input() textStyle!: string;
  @Input() textSize!: string;
  @Input() textWeight!: string;
  @Input() subText!: string;
  @Input() subTextStyle!: string;
  @Input() subTextSize!: string;
  @Input() subTextWeight!: string;
  @Input() textToggle!: boolean;

  safeURL!: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    const code = this.media.split("?v=")[1];
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + code,
    );
  }

  getTextColorClass(color: string): string {
    return textColor[color];
  }
}
