import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AUTH_API } from "./auth.service";
import { Regs, RegsCreate } from "../models/regs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public registerData(body: RegsCreate, websiteID: number): Observable<Regs> {
    return this.http.post<Regs>(
      AUTH_API + "register?websiteId=" + websiteID,
      body,
    );
  }

  public getRegistered(websiteID: number): Observable<Regs[]> {
    return this.http.get<Regs[]>(AUTH_API + "register?websiteId=" + websiteID);
  }

  public deleteRegistered(id: number): Observable<{}> {
    return this.http.delete<any>(AUTH_API + "register/" + id);
  }
}
