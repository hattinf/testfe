import { Component, Type } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Subscription, switchMap, tap } from "rxjs";
import { DataService } from "../../../services/public-data.service";
import { TextComponent } from "../text/text.component";
import { HeroComponent } from "../hero/hero.component";
import { PublicWebsite } from "../../../models/website";
import { Page } from "../../../models/page";
import { ViewComponent } from "../../../models/components";
import { RegisterComponent } from "../register/register.component";
import { CardsComponent } from "../cards/cards.component";
import { ScheduleComponent } from "../schedule/schedule.component";
import { DividerComponent } from "../divider/divider.component";
import { FaqComponent } from "../faq/faq.component";
import { ShowcaseComponent } from "../showcase/showcase.component";
import { MediaComponent } from "../media/media.component";
import { BarComponent } from "../bar/bar.component";
import { ImageComponent } from "../image/image.component";

export interface Components {
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
}

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrl: "./page.component.scss",
})
export class PageComponent {
  movieID: number = this.dataService.getCurrentWebsite();
  websiteData!: PublicWebsite;
  loading: boolean = true;

  components!: Components[];
  fetchWeb$ = new BehaviorSubject({});
  sub = new Subscription();

  website$ = this.fetchWeb$.asObservable().pipe(
    switchMap((value) => {
      return this.dataService.getDataWebsite(
        this.movieID,
        this.activatedRoute.snapshot.url,
      );
    }),
    tap(() => (this.loading = false)),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.sub.add(
      this.website$.subscribe((payload) => {
        this.websiteData = payload;
        if (this.websiteData.page) {
          this.setComponents(this.websiteData.page);
        }
      }),
    );

    this.sub.add(
      this.activatedRoute.url.subscribe(() => {
        this.loading = false;
        this.fetchWeb$.next({});
      }),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setComponents(page: Page) {
    this.components = [];
    let component: Components;
    page.components
      .sort((a: ViewComponent, b: ViewComponent) => a.position - b.position)
      .forEach((element: ViewComponent) => {
        switch (element.type) {
          case "HRP": {
            component = {
              component: HeroComponent,
              inputs: element.prop,
            };
            break;
          }
          case "TPR": {
            component = {
              component: TextComponent,
              inputs: element.prop,
            };
            break;
          }
          case "RPR": {
            component = {
              component: RegisterComponent,
              inputs: element.prop,
            };
            break;
          }
          case "CRP": {
            component = {
              component: CardsComponent,
              inputs: element.prop,
            };
            break;
          }
          case "SHP": {
            component = {
              component: ScheduleComponent,
              inputs: element.prop,
            };
            break;
          }
          case "DIV": {
            component = {
              component: DividerComponent,
              inputs: element.prop,
            };
            break;
          }
          case "FPR": {
            component = {
              component: FaqComponent,
              inputs: element.prop,
            };
            break;
          }
          case "SHC": {
            component = {
              component: ShowcaseComponent,
              inputs: element.prop,
            };
            break;
          }
          case "MDA": {
            component = {
              component: MediaComponent,
              inputs: element.prop,
            };
            break;
          }
          case "BRP": {
            component = {
              component: BarComponent,
              inputs: element.prop,
            };
            break;
          }

          case "IMG": {
            component = {
              component: ImageComponent,
              inputs: element.prop,
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
}
