import { Component } from "@angular/core";
import { Website } from "../../../models/website";
import {
  BehaviorSubject,
  Subscription,
  switchMap,
  tap,
  catchError,
} from "rxjs";
import { WebsiteService } from "../../../services/website.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SelectedService } from "../../../services/selected.service";
import { NotificationService } from "../../../services/notifications.service";
import { Page } from "../../../models/page";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormGroup, FormControl } from "@angular/forms";
import { ErrorService } from "../../../services/error.service";

@Component({
  selector: "app-websites-viewer",
  templateUrl: "./websites-viewer.component.html",
  styleUrl: "./websites-viewer.component.scss",
})
export class WebsitesViewerComponent {
  loading: boolean = true;
  websiteID!: number;
  websiteData!: any;
  editWebsite: boolean = false;

  fetchWeb$ = new BehaviorSubject({});
  sub = new Subscription();

  baseUrl!: SafeResourceUrl;

  website$ = this.fetchWeb$.asObservable().pipe(
    switchMap((value) => {
      return this.websiteService.getWebsite(this.websiteID);
    }),
    catchError((error) => {
      const status = error.status;
      this.errorService.errorDashboard(status);
      return [];
    }),
    tap(() => (this.loading = false)),
  );

  websiteForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(
    private websiteService: WebsiteService,
    private selectedServices: SelectedService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private sanitizer: DomSanitizer,
    private errorService: ErrorService,
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe((params: any) => {
        this.websiteID = params["id"];
      }),
    );

    this.sub.add(
      this.website$.subscribe((payload) => {
        this.websiteData = payload;
        this.websiteForm.get("name")?.setValue(this.websiteData.name);
        this.websiteForm
          .get("description")
          ?.setValue(this.websiteData.description);
        this.websiteData.page = this.websiteData.page.sort(
          (a: Page, b: Page) => a.id - b.id,
        );
      }),
    );

    this.baseUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "http://localhost:4200/web/" + this.websiteID,
    );
  }

  changePreview(path: string[]) {
    this.baseUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "http://localhost:4200/web/" + this.websiteID + path,
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteWebsite(id: number) {
    this.websiteService.deleteWebsite(id).subscribe(() => {
      this.router.navigate(["/dashboard/websites"]).then(() => {
        window.location.reload();
      });
    });
  }

  reload() {
    this.loading = true;
    this.fetchWeb$.next({});
  }

  updateWebsite(form: FormGroup) {
    this.websiteService
      .updateWebsite(this.websiteID, this.websiteForm.value)
      .subscribe(() => {
        this.notificationService.showSuccess(
          "Updated",
          "Website ID:" + this.websiteID,
        );
        this.reload();
        this.toggleEdit();
      });
  }

  publish() {
    this.websiteService.publishWebsite(this.websiteID).subscribe(() => {
      if (this.websiteData.published) {
        this.notificationService.showInfo(
          "Unlisted",
          "Website ID:" + this.websiteID,
        );
      } else {
        this.notificationService.showInfo(
          "Published",
          "Website with ID:" + this.websiteID,
        );
      }
      this.reload();
    });
  }

  hidePage(id: number, page: Page) {
    this.websiteService.toggleHidePage(id).subscribe(() => {
      if (page.hidden) {
        this.notificationService.showInfo(
          "Set to Show",
          "Page tittle: " + page.title,
        );
      } else {
        this.notificationService.showInfo(
          "Set to Hide",
          "Page tittle: " + page.title,
        );
      }
      this.reload();
    });
  }

  deletePage(id: number) {
    this.websiteService.deletePage(id).subscribe(() => {
      this.notificationService.showSuccess("Deleted", "Page ID:" + id);
      this.reload();
    });
  }

  toggleEdit() {
    this.editWebsite = !this.editWebsite;
  }

  goToWebsite() {
    window.open("http://localhost:4200/web/" + this.websiteData.id, "_blank");
  }
}
