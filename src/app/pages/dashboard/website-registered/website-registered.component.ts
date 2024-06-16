import { Component } from "@angular/core";
import {
  BehaviorSubject,
  Subscription,
  catchError,
  switchMap,
  tap,
} from "rxjs";
import { RegisterService } from "../../../services/register.service";
import { ActivatedRoute } from "@angular/router";
import { ErrorService } from "../../../services/error.service";
import { Regs } from "../../../models/regs";

@Component({
  selector: "app-website-registered",
  templateUrl: "./website-registered.component.html",
  styleUrl: "./website-registered.component.scss",
})
export class WebsiteRegisteredComponent {
  loading: boolean = true;

  regData!: Regs[];

  fetchReg$ = new BehaviorSubject({});
  sub = new Subscription();

  websiteID!: number;

  reg$ = this.fetchReg$.asObservable().pipe(
    switchMap((value) => {
      return this.register.getRegistered(this.websiteID);
    }),
    tap(() => (this.loading = false)),
    catchError((error) => {
      const status = error.status;
      this.errorService.errorDashboard(status);
      return [];
    }),
  );

  constructor(
    private register: RegisterService,
    private route: ActivatedRoute,
    private errorService: ErrorService,
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe((params: any) => {
        this.websiteID = params["id"];
      }),
    );
    this.sub.add(
      this.reg$.subscribe((payload) => {
        this.regData = payload;
      }),
    );
  }

  deleteRegisteredParticipant(id: number) {
    this.register.deleteRegistered(id).subscribe(() => {
      this.loading = true;
      this.fetchReg$.next({});
    });
  }
}
