import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { PublicWebsite } from "../models/website";
import { AUTH_API } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  public getDataWebsite(
    id: number,
    url: UrlSegment[],
  ): Observable<PublicWebsite> {
    return this.http.get<PublicWebsite>(this.constructUrl(id, url));
  }

  public constructUrl(id: number, url: UrlSegment[]): string {
    let publicUrl: string = AUTH_API + "websites/public/";
    let path: string = "";
    if (url) {
      let pathUrl: string[] = [];
      url.forEach((slug) => {
        pathUrl.push(slug.path);
      });
      path = "?url=" + pathUrl.join("/");
    }
    return publicUrl + id + path;
  }

  public getCurrentWebsite = () => {
    return +this.router.url.split("/")[2];
  };
}
