import { Component } from "@angular/core";
import { BehaviorSubject, Subscription, switchMap, tap } from "rxjs";
import { WebsiteService } from "../../../services/website.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.scss",
})
export class OverviewComponent {
  loading: boolean = true;
  websiteData!: any[];

  fetchWeb$ = new BehaviorSubject({});
  sub = new Subscription();

  website$ = this.fetchWeb$.asObservable().pipe(
    switchMap((value) => {
      return this.websiteService.getWebsitesPublic();
    }),
    tap(() => (this.loading = false)),
  );

  constructor(
    private websiteService: WebsiteService,
    private sanitizer: DomSanitizer,
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
}
