import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import {
  Selected,
  SelectedNavUpdate,
  SelectedRetrieved,
} from "../models/selected";

@Injectable({
  providedIn: "root",
})
export class SelectedService {
  private paramSource = new BehaviorSubject(false);
  currentParam = this.paramSource.asObservable();

  private data$: Subject<Selected> = new Subject<Selected>();
  private change$: Subject<SelectedRetrieved> =
    new Subject<SelectedRetrieved>();

  private dataNavChange$: Subject<SelectedNavUpdate> =
    new Subject<SelectedNavUpdate>();

  private closeSide$: Subject<boolean> = new Subject<boolean>();

  setParam(param: boolean) {
    this.paramSource.next(param);
  }

  selectComp(data: Selected): void {
    this.data$.next(data);
  }

  retrieveComp(): Observable<Selected> {
    return this.data$.asObservable();
  }

  selectNavChange(data: SelectedNavUpdate): void {
    this.dataNavChange$.next(data);
  }

  retrieveNavChange(): Observable<SelectedNavUpdate> {
    return this.dataNavChange$.asObservable();
  }

  selectChange(data: SelectedRetrieved): void {
    this.change$.next(data);
  }

  retrieveChange(): Observable<SelectedRetrieved> {
    return this.change$.asObservable();
  }

  closeSide() {
    this.closeSide$.next(true);
  }

  retrieveCloseSide(): Observable<boolean> {
    return this.closeSide$.asObservable();
  }
}
