import { Component, Input, HostListener } from "@angular/core";
import { Navigation } from "../../../models/navigation";
import { textColor } from "../../../models/colors";
import { Link } from "../../../models/link";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  @Input() nav!: Navigation;
  @Input() web!: number;

  links!: any[];

  createLink = (link: string) => {
    return "/web/" + this.web + link;
  };

  toggleBar: boolean = false;

  ngOnInit() {
    this.links = this.sorter(this.nav.links);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.toggleBar = false;
    } else {
      this.toggleBar = true;
    }
  }

  returnTextColor() {
    return textColor[this.nav.linkColor];
  }

  sorter(links: Link[]) {
    let sorted = links.sort((a, b) => a.url.length - b.url.length);
    let y = [];
    let count = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (count >= sorted.length) break;
      if (sorted[i].url === "/") {
        y.push([sorted[i]]);
        count++;
        continue;
      }
      let filtered = sorted.filter((item) => {
        if (item.url.startsWith(sorted[i].url)) {
          count++;
          return true;
        }
        return false;
      });
      y.push(filtered);
    }
    return y;
  }
}
