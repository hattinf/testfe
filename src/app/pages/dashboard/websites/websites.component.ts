import { Component } from "@angular/core";
import {
  BehaviorSubject,
  Subscription,
  switchMap,
  tap,
  catchError,
} from "rxjs";
import { WebsiteService } from "../../../services/website.service";
import { Website } from "../../../models/website";
import { ActivatedRoute } from "@angular/router";
import { SelectedService } from "../../../services/selected.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-websites",
  templateUrl: "./websites.component.html",
  styleUrl: "./websites.component.scss",
})
export class WebsitesComponent {
  loading: boolean = true;
  toggle: boolean = false;
  websiteData!: Website[];

  fetchWeb$ = new BehaviorSubject({});
  sub = new Subscription();

  selectedWeb!: number;

  web = new FormGroup({
    name: new FormControl(""),
  });

  website$ = this.fetchWeb$.asObservable().pipe(
    switchMap((value) => {
      return this.websiteService.getWebsites();
    }),
    tap(() => (this.loading = false)),
  );

  constructor(
    private websiteService: WebsiteService,
    private selectedServices: SelectedService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub.add(
      this.website$.subscribe((payload) => {
        this.websiteData = payload;
      }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleAdd() {
    this.toggle = !this.toggle;
  }

  onSubmit() {
    const body = this.web.value;
    this.websiteService.createWebsite(body).subscribe((res) => {
      this.fetchWeb$.next({});
      this.toggle = false;
      this.loading = true;
    });
  }
}
