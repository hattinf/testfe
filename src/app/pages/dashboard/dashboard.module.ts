import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home/home.component";
import { WebsitesComponent } from "./websites/websites.component";
import { WebsitesEditorComponent } from "./websites-editor/websites-editor.component";
import { SettingsComponent } from "./settings/settings.component";
import { ComponentsModuleModule } from "../../components-module.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentComponent } from "../../components/components-dashboard/component-list/component.component";
import { HeroPropComponent } from "../../components/components-dashboard/hero-prop/hero-prop.component";
import { TextPropComponent } from "../../components/components-dashboard/text-prop/text-prop.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ComponentsSelectComponent } from "../../components/components-dashboard/components-select/components-select.component";
import { NavigationSectionComponent } from "../../components/components-dashboard/navigation-section/navigation-section.component";
import { CreatePageComponent } from "../../components/components-dashboard/create-page/create-page.component";
import { WebsitesViewerComponent } from "./websites-viewer/websites-viewer.component";
import { WebsitesCreateComponent } from "./websites-create/websites-create.component";
import { SideComponent } from "../../components/components-dashboard/side/side.component";
import { NavEditorComponent } from "../../components/components-dashboard/nav-editor/nav-editor.component";
import { RegisterPropComponent } from "../../components/components-dashboard/register-prop/register-prop.component";
import { WebsiteRegisteredComponent } from "./website-registered/website-registered.component";
import { CardPropComponent } from "../../components/components-dashboard/card-prop/card-prop.component";
import { ColorComponent } from "../../components/components-dashboard/color/color.component";
import { SchedulePropComponent } from "../../components/components-dashboard/schedule-prop/schedule-prop.component";
import { RangerComponent } from "../../components/components-dashboard/ranger/ranger.component";
import { DividerEditorComponent } from "../../components/components-dashboard/divider-editor/divider-editor.component";
import { FaqPropComponent } from "../../components/components-dashboard/faq-prop/faq-prop.component";
import { ShowcasePropComponent } from "../../components/components-dashboard/showcase-prop/showcase-prop.component";
import { DeleteConfirmComponent } from "../../components/components-dashboard/delete-confirm/delete-confirm.component";
import { MediaPropComponent } from "../../components/components-dashboard/media-prop/media-prop.component";
import { BarEditorComponent } from "../../components/components-dashboard/bar-editor/bar-editor.component";
import { AddComponentComponent } from "../../components/components-dashboard/add-component/add-component.component";
import { LoginComponent } from "./login/login.component";
import { authInterceptorProviders } from "../../http/auth.interceptor";
import { AdminerComponent } from "./adminer/adminer.component";
import { ErrorService } from "../../services/error.service";
import { ErrorHandler } from "@angular/core";
import { ErrorComponent } from "./error/error.component";
import { FooterEditorComponent } from "../../components/components-dashboard/footer-editor/footer-editor.component";
import { ImagePropComponent } from "../../components/components-dashboard/image-prop/image-prop.component";

@NgModule({
  declarations: [
    HomeComponent,
    WebsitesComponent,
    SettingsComponent,
    WebsitesEditorComponent,
    CreatePageComponent,
    ComponentComponent,
    HeroPropComponent,
    TextPropComponent,
    ComponentsSelectComponent,
    NavigationSectionComponent,
    WebsitesViewerComponent,
    WebsitesCreateComponent,
    SideComponent,
    NavEditorComponent,
    RegisterPropComponent,
    WebsiteRegisteredComponent,
    CardPropComponent,
    ColorComponent,
    SchedulePropComponent,
    RangerComponent,
    DividerEditorComponent,
    FaqPropComponent,
    ShowcasePropComponent,
    DeleteConfirmComponent,
    MediaPropComponent,
    BarEditorComponent,
    AddComponentComponent,
    LoginComponent,
    AdminerComponent,
    ErrorComponent,
    FooterEditorComponent,
    ImagePropComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModuleModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [authInterceptorProviders],
})
export class DashboardModule {}
