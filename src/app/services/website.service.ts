import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Website, WebsiteShort } from "../models/website";
import { Page } from "../models/page";
import { AUTH_API } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class WebsiteService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  public getWebsitesPublic(): Observable<Website[]> {
    return this.http.get<any[]>(AUTH_API + "websites/public");
  }

  public getWebsites(): Observable<Website[]> {
    return this.http.get<Website[]>(AUTH_API + "websites");
  }

  public getWebsite(id: number): Observable<Website> {
    return this.http.get<Website>(AUTH_API + "websites/" + id);
  }

  public publishWebsite(id: number): Observable<Website> {
    return this.http.put<Website>(AUTH_API + "websites/" + id + "/publish", {});
  }

  public createWebsite(body: any): Observable<Website> {
    return this.http.post<Website>(AUTH_API + "websites", body);
  }

  public deleteWebsite(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "websites/" + id);
  }

  public updateWebsite(id: number, body: any): Observable<Website> {
    return this.http.put<Website>(AUTH_API + "websites/" + id, body);
  }

  public toggleHidePage(id: number): Observable<Page> {
    return this.http.put<Page>(AUTH_API + "pages/" + id + "/hide", {});
  }

  public deletePage(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "pages/" + id);
  }

  public getPage(id: number): Observable<Page> {
    return this.http.get<Page>(AUTH_API + "pages/" + id);
  }

  public deleteFooter(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "footer/" + id);
  }

  public createPage(
    body: any,
    websiteID: number,
    parentID?: number,
  ): Observable<Page> {
    let parent = parentID ? "?pageId=" + parentID : "";
    return this.http.post<Page>(
      AUTH_API + "websites/" + websiteID + "/page" + parent,
      body,
    );
  }
}
