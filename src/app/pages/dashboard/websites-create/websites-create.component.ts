import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { WebsiteService } from "../../../services/website.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-websites-create",
  templateUrl: "./websites-create.component.html",
  styleUrl: "./websites-create.component.scss",
})
export class WebsitesCreateComponent {
  web = new FormGroup({
    name: new FormControl(""),
  });

  constructor(
    private websiteService: WebsiteService,
    private router: Router,
  ) {}

  onSubmit() {
    const body = this.web.value;
    this.websiteService.createWebsite(body).subscribe((res) => {
      this.router.navigate(["/dashboard/websites"]);
    });
  }
}
