import { Component, Input } from "@angular/core";
import { Link } from "../../../models/link";

@Component({
  selector: "app-nav-links",
  templateUrl: "./nav-links.component.html",
  styleUrl: "./nav-links.component.scss",
})
export class NavLinksComponent {
  @Input() set code(links: Link[]) {
    this.links = links;
  }
  @Input() textColor: string = "";
  @Input() backgroundColor: string = "";
  @Input() web: number = 0;

  links: Link[] = [];
  mainLink!: Link;
  hover: boolean = false;

  ngOnInit() {
    this.mainLink = this.links[0];
    this.links = this.links.slice(1);
  }

  open() {
    this.hover = true;
  }

  close() {
    this.hover = false;
  }

  createLink = (link: string) => {
    return "/web/" + this.web + link;
  };
}
