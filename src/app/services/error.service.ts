import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "./notifications.service";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  constructor(
    private router: Router,
    private notification: NotificationService,
  ) {}
  errorDashboard(error: number) {
    switch (error) {
      case 403:
        this.router.navigate(["/dashboard/websites"]);
        this.notification.showError("Error", "Access Denied");
        break;
      case 404:
        this.router.navigate(["/dashboard/websites"]);
        this.notification.showError("Error", "Website Not Found");
        break;
      default:
        this.router.navigate(["/dashboard/websites"]);
        this.notification.showError("Error", "Internal Server Error");
        break;
    }
  }
}
