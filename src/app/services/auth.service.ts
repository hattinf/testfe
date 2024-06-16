import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(
      AUTH_API + "auth/login",
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions,
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(
      AUTH_API + "auth/register",
      {
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
      },
      httpOptions,
    );
  }
}
