import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AUTH_API } from "./auth.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(AUTH_API + "user");
  }

  public deleteUser(id: number): Observable<{}> {
    return this.http.delete<{}>(AUTH_API + "user/" + id);
  }
}
