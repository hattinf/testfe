import { Component, Type, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Observable,
  BehaviorSubject,
  Subscription,
  forkJoin,
  switchMap,
  tap,
  of,
  Subject,
  catchError,
} from "rxjs";
import { HeroComponent } from "../../../components/components-website/hero/hero.component";
import { TextComponent } from "../../../components/components-website/text/text.component";
import { WebsiteService } from "../../../services/website.service";
import { NavigationService } from "../../../services/navigation.service";
import { ComponentsService } from "../../../services/components.service";
import { NotificationService } from "../../../services/notifications.service";
import { SelectedService } from "../../../services/selected.service";
import { RegisterComponent } from "../../../components/components-website/register/register.component";
import { CardsComponent } from "../../../components/components-website/cards/cards.component";
import { ScheduleComponent } from "../../../components/components-website/schedule/schedule.component";
import { DividerComponent } from "../../../components/components-website/divider/divider.component";
import { FaqComponent } from "../../../components/components-website/faq/faq.component";
import { ShowcaseComponent } from "../../../components/components-website/showcase/showcase.component";
import { MediaComponent } from "../../../components/components-website/media/media.component";
import { BarComponent } from "../../../components/components-website/bar/bar.component";
import { CanDeactivateType } from "../../../guards/can-deactivate.guard";
import { ErrorService } from "../../../services/error.service";
import { ImageComponent } from "../../../components/components-website/image/image.component";
import { Page } from "../../../models/page";
import { Navigation } from "../../../models/navigation";
import { Footer } from "../../../models/footer";
import { ViewComponent } from "../../../models/components";

export interface ComponentType {
  component: Type<
    | HeroComponent
    | TextComponent
    | RegisterComponent
    | CardsComponent
    | ScheduleComponent
    | DividerComponent
    | FaqComponent
    | ShowcaseComponent
    | MediaComponent
    | BarComponent
    | ImageComponent
  >;
  inputs: Record<string, unknown>;
  id: number;
  ele: ViewComponent;
}

@Component({
  selector: "app-websites-editor",
  templateUrl: "./websites-editor.component.html",
  styleUrl: "./websites-editor.component.scss",
})
export class WebsitesEditorComponent {
  loading: boolean = true;
  edited: boolean = false;

  websiteID!: number;
  pageID!: number;

  pageData!: Page;
  pageDataSnapshot!: Page;
  navigationData!: Navigation;
  footerData!: Footer;
  websiteData!: any;

  fetchApp$ = new BehaviorSubject({});
  fetchWeb$ = new BehaviorSubject({});
  sub = new Subscription();

  navSelected: boolean = false;
  open: boolean = false;
  toggle: boolean = false;

  selectedComp!: number;

  allowNavigation: Subject<boolean> = new Subject<boolean>();

  canDeactivate(): CanDeactivateType {
    return this.isNavigationAllowed();
  }

  isNavigationAllowed(beforeunloadEvent = false): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (!this.edited) {
        resolve(true);
      } else {
        if (beforeunloadEvent) {
          resolve(false);
        } else {
          if (
            window.confirm(
              "Are you sure you want to leave? Some data may be lost.",
            )
          ) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      }
    });
  }

  @HostListener("window:beforeunload", ["$event"])
  onBeforeUnload(): void {
    this.isNavigationAllowed(true).then((isNavigationAllowed: boolean) => {
      if (event && !isNavigationAllowed) {
        event.preventDefault();
      }
    });
  }

  web$ = this.fetchWeb$.asObservable().pipe(
    switchMap((value) => {
      return this.websiteService.getWebsite(this.websiteID);
    }),
    catchError((error) => {
      const status = error.status;
      this.errorService.errorDashboard(status);
      return [];
    }),
  );

  page$ = this.fetchApp$.asObservable().pipe(
    switchMap((value) => {
      return this.websiteService.getPage(this.pageID);
    }),
    catchError((error) => {
      const status = error.status;
      this.errorService.errorDashboard(status);
      return [];
    }),
    tap(() => (this.loading = false)),
  );

  components!: ComponentType[];

  constructor(
    private websiteService: WebsiteService,
    private navigationService: NavigationService,
    private componentService: ComponentsService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private selectService: SelectedService,
    private errorService: ErrorService,
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe((params) => {
        this.websiteID = params["id"];
        this.pageID = params["id2"];
      }),
    );

    this.sub.add(
      this.web$.subscribe((payload) => {
        this.edited = false;
        this.websiteData = payload;
        // CREATE A DEEP COPY OF THE NAVIGATION DATA
        this.navigationData = JSON.parse(JSON.stringify(payload.navigation));
        this.footerData = JSON.parse(JSON.stringify(payload.footer));
      }),
    );

    this.sub.add(
      this.page$.subscribe((payload) => {
        this.pageData = payload;
        this.pageDataSnapshot = JSON.parse(JSON.stringify(payload));
        this.setComponents();
      }),
    );

    this.sub.add(
      this.selectService.retrieveComp().subscribe((value) => {
        switch (value.type) {
          case "navigation":
            this.selectedComp = -1;
            let nav = document.getElementById("navigation");
            if (nav) {
              this.navSelected = true;
            }
            break;
          case "footer":
            this.selectedComp = -1;
            let footer = document.getElementById("navigation");
            break;
          default:
            this.navSelected = false;
            let ref = document.getElementById(value.payload.comp.position);
            if (ref) {
              this.selectedComp = value.payload.comp.id;
            }
        }
      }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  editedToggle() {
    this.edited = true;
  }

  togglePage() {
    this.toggle = !this.toggle;
  }

  updateComponents(components: ViewComponent[]) {
    this.editedToggle();
    this.pageData.components = components;
    this.setComponents();
  }

  updateNavigation(update: any) {
    this.editedToggle();
    switch (update.type) {
      case "delete":
        this.websiteData.navigation = undefined;
        break;
      case "update":
        this.websiteData.navigation = update.data;
        break;
    }
  }

  updateFooter(update: any) {
    this.editedToggle();
    switch (update.type) {
      case "delete":
        this.websiteData.footer = undefined;
        break;
      case "update":
        this.websiteData.footer = update.data;
        break;
    }
  }

  addNavigation() {
    this.editedToggle();
    if (!this.websiteData.navigation) {
      this.websiteData.navigation = {
        id: 0,
        logo: "",
        links: [],
      };
    }
  }

  addFooter() {
    this.editedToggle();
    if (!this.websiteData.footer) {
      this.websiteData.footer = {
        id: 0,
        bottomText: "Copyright text 2023.",
        backgroundColor: "bg-blue-500",
        linkColor: "text-white",
        links: [],
      };
    }
  }

  updateComponentsData() {
    this.loading = true;

    const navigationDataRequests = this.navigationService.updateNavigationData(
      this.websiteData,
      this.navigationData,
    );

    const footerDataRequests = this.navigationService.updateFooterData(
      this.websiteData,
      this.footerData,
    );

    const componentsDataRequests = this.componentService.updateComponentData(
      this.pageData,
      this.websiteData,
      this.pageID,
    );

    const requests = [
      ...navigationDataRequests,
      ...footerDataRequests,
      ...(<[]>componentsDataRequests),
    ];

    forkJoin(requests).subscribe(() => {
      this.notification.showSuccess(
        "Saved" + this.pageID,
        "Page data was saved",
      );
      this.reload();
    });
  }

  reload() {
    this.fetchWeb$.next({});
    this.fetchApp$.next({});
  }

  setComponents() {
    this.components = [];
    let component: ComponentType;
    this.pageData.components
      .sort((a: ViewComponent, b: ViewComponent) => a.position - b.position)
      .forEach((element: ViewComponent) => {
        switch (element.type) {
          case "HRP": {
            component = {
              component: HeroComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "TPR": {
            component = {
              component: TextComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "RPR": {
            component = {
              component: RegisterComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "CRP": {
            component = {
              component: CardsComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "SHP": {
            component = {
              component: ScheduleComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "DIV": {
            component = {
              component: DividerComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "FPR": {
            component = {
              component: FaqComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "SHC": {
            component = {
              component: ShowcaseComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "MDA": {
            component = {
              component: MediaComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "BRP": {
            component = {
              component: BarComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          case "IMG": {
            component = {
              component: ImageComponent,
              inputs: element.prop,
              id: element.id,
              ele: element,
            };
            break;
          }
          default: {
            break;
          }
        }
        this.components.push(component);
      });
  }

  handleComponentEditor(selected: boolean) {
    this.open = selected;
  }
}
