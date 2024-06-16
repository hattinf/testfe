import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../services/public-data.service";

@Component({
  selector: "app-fail",
  templateUrl: "./fail.component.html",
  styleUrl: "./fail.component.scss",
})
export class FailComponent {
  webId: number = this.dataService.getCurrentWebsite();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) {}
}
