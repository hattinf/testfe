import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/components-website/navigation/navigation.component';
import { FooterComponent } from './components/components-website/footer/footer.component';
import { NavLinksComponent } from './components/components-website/nav-links/nav-links.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NavLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent
  ]
})
export class ComponentsModuleModule { }
