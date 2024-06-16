import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { WebComponent } from "./pages/web/web.component";
import { PageComponent } from "./components/components-website/page/page.component";
import { OverviewComponent } from "./pages/web/overview/overview.component";

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: "always",
};

const routes: Routes = [
  {
    path: "web",
    component: OverviewComponent,
  },
  {
    path: "web/:id",
    component: WebComponent,
    children: [{ path: "**", component: PageComponent, children: [] }],
  },
  { path: "", redirectTo: "web", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
