import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WebComponent } from "./pages/web/web.component";
import { PageComponent } from "./components/components-website/page/page.component";
import { TextComponent } from "./components/components-website/text/text.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FailComponent } from "./components/components-website/fail/fail.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { ComponentsModuleModule } from "./components-module.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./components/components-website/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardsComponent } from "./components/components-website/cards/cards.component";
import { ScheduleComponent } from "./components/components-website/schedule/schedule.component";
import { HeroComponent } from "./components/components-website/hero/hero.component";
import { DividerComponent } from "./components/components-website/divider/divider.component";
import { FaqComponent } from "./components/components-website/faq/faq.component";
import { ShowcaseComponent } from "./components/components-website/showcase/showcase.component";
import { OverviewComponent } from "./pages/web/overview/overview.component";
import { MediaComponent } from "./components/components-website/media/media.component";
import { BarComponent } from "./components/components-website/bar/bar.component";
import { ImageComponent } from "./components/components-website/image/image.component";

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    OverviewComponent,
    PageComponent,
    TextComponent,
    RegisterComponent,
    CardsComponent,
    DashboardComponent,
    FailComponent,
    ScheduleComponent,
    HeroComponent,
    DividerComponent,
    FaqComponent,
    ShowcaseComponent,
    MediaComponent,
    BarComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    ComponentsModuleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
