import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  config: {
    positionClass: string;
  } = {
    positionClass: "toast-bottom-right",
  };

  showInfo(title: string, msg: string) {
    this.toastr.info(msg, title, this.config);
  }

  showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title, this.config);
  }

  showError(title: string, msg: string) {
    this.toastr.error(msg, title, this.config);
  }
}
