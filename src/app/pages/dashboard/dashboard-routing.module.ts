import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { WebsitesComponent } from "./websites/websites.component";
import { WebsitesEditorComponent } from "./websites-editor/websites-editor.component";
import { SettingsComponent } from "./settings/settings.component";
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  ExtraOptions,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from "@angular/router";
import { WebsitesViewerComponent } from "./websites-viewer/websites-viewer.component";
import { WebsitesCreateComponent } from "./websites-create/websites-create.component";
import { WebsiteRegisteredComponent } from "./website-registered/website-registered.component";
import { canDeactivateGuard } from "../../guards/can-deactivate.guard";
import { LoginComponent } from "./login/login.component";
import { AdminerComponent } from "./adminer/adminer.component";
import { ErrorComponent } from "./error/error.component";

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: "always",
};

const routes: Routes = [
  {
    path: "dashboard/login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "websites", pathMatch: "full" },
      {
        path: "websites/:id",
        component: WebsitesViewerComponent,
      },
      {
        path: "websites",
        component: WebsitesComponent,
      },
      {
        path: "websites/:id/registered",
        component: WebsiteRegisteredComponent,
      },
      {
        path: "websites/:id/pages/:id2/editor",
        component: WebsitesEditorComponent,
        canDeactivate: [canDeactivateGuard],
      },
      { path: "adminer", component: AdminerComponent },
      { path: "**", component: ErrorComponent, pathMatch: "full" },
    ],
  },

  { path: "**", component: ErrorComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
