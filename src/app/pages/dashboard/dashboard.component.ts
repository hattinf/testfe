import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  roles!: string[];
  isLoggedIn = false;
  isAdmin = false;
  username!: string;
  toggle = false;

  activeParams: any;
  hide: boolean = false;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) {
    this.active.children[0].params.subscribe((value) => {
      this.activeParams = value;
    });
    router.events.subscribe((val) => {
      if (this.router.url.includes("editor")) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.isAdmin = user.roles.includes("ROLE_ADMIN");
      this.roles = user.roles;
      this.username = user.username;
    } else {
      this.router.navigate(["/dashboard/login"]);
    }
  }

  openNav() {
    this.toggle = true;
  }

  closeNav() {
    this.toggle = false;
  }

  logout() {
    if (confirm("Are you sure you want to logout?")) {
      this.tokenStorageService.signOut();
      this.router.navigate(["/dashboard/login"]);
    }
  }

  getDash() {
    return this.hide;
  }

  websiteActive() {
    return this.activeParams["id"] ? true : false;
  }

  getCurrentWebsiteID() {
    return this.activeParams["id"];
  }

  getCurrentPageID() {
    return this.activeParams["id2"];
  }
}
