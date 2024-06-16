import { Component, Input } from "@angular/core";
import { Footer } from "../../../models/footer";
import { Link } from "../../../models/link";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  @Input() fot!: Footer;
  @Input() web!: number;
  links!: any[];

  createLink = (link: string) => {
    return "/web/" + this.web + link;
  };

  ngOnInit() {
    this.links = this.sorter(this.fot.links);
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
