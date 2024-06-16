import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CreateNavigation,
  UpdateNavigation,
  Navigation,
} from "../models/navigation";
import { Link, CreateLink } from "../models/link";
import { Website } from "../models/website";
import { AUTH_API } from "./auth.service";
import { CreateFooter, Footer, UpdateFooter } from "../models/footer";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private http: HttpClient) {}

  public updateNavigation(
    id: number,
    body: UpdateNavigation,
  ): Observable<Navigation> {
    return this.http.put<Navigation>(AUTH_API + "navigation/" + id, body);
  }

  public createNavigation(body: CreateNavigation): Observable<Navigation> {
    return this.http.post<Navigation>(AUTH_API + "navigation", body);
  }

  public deleteNavigation(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "navigation/" + id);
  }

  public updateFooter(id: number, body: UpdateFooter): Observable<Footer> {
    return this.http.put<Footer>(AUTH_API + "footer/" + id, body);
  }

  public createFooter(body: CreateFooter): Observable<Footer> {
    return this.http.post<Footer>(AUTH_API + "footer", body);
  }

  public deleteFooter(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "footer/" + id);
  }
  public createNavigationLink(
    navigationID: number,
    body: CreateLink,
  ): Observable<Link> {
    return this.http.post<Link>(
      AUTH_API + "navigation/" + navigationID + "/link",
      body,
    );
  }

  public deleteNavigationLink(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "navigation/link/" + id);
  }

  public updateFooterData(websiteData: Website, footerData: Footer) {
    let requests: any[] = [];
    if (websiteData.footer) {
      switch (websiteData.footer.id) {
        case 0:
          if (footerData && footerData.id != 0) {
            this.deleteFooter(footerData.id).subscribe();
          }
          requests.push(
            this.createFooter({
              bottomText: websiteData.footer.bottomText,
              backgroundColor: websiteData.footer.backgroundColor,
              linkColor: websiteData.footer.linkColor,
              website: websiteData.id,
            }),
          );

          break;
        default:
          if (websiteData.footer != footerData) {
            let updateFooter = {
              bottomText: websiteData.footer.bottomText,
              backgroundColor: websiteData.footer.backgroundColor,
              linkColor: websiteData.footer.linkColor,
            };
            requests.push(
              this.updateFooter(websiteData.footer.id, updateFooter),
            );
          }
          break;
      }
    } else {
      if (footerData && footerData.id != 0) {
        requests.push(this.deleteFooter(footerData.id));
      }
    }

    return requests;
  }

  public updateNavigationData(
    websiteData: Website,
    navigationData: Navigation,
  ) {
    let requests: any[] = [];
    if (websiteData.navigation) {
      switch (websiteData.navigation.id) {
        case 0:
          if (navigationData && navigationData.id != 0) {
            this.deleteNavigation(navigationData.id).subscribe();
          }
          requests.push(
            this.createNavigation({
              logo: websiteData.navigation.logo,
              backgroundColor: websiteData.navigation.backgroundColor,
              linkColor: websiteData.navigation.linkColor,
              website: websiteData.id,
            }),
          );
          break;
        default:
          if (websiteData.navigation != navigationData) {
            let updateNav = {
              logo: websiteData.navigation.logo,
              backgroundColor: websiteData.navigation.backgroundColor,
              linkColor: websiteData.navigation.linkColor,
            };
            requests.push(
              this.updateNavigation(websiteData.navigation.id, updateNav),
            );
            requests.push(
              ...this.updateNavigationLinks(websiteData, navigationData),
            );
          }
      }
    } else {
      if (navigationData && navigationData.id != 0) {
        requests.push(this.deleteNavigation(navigationData.id));
      }
    }
    return requests;
  }

  private updateNavigationLinks(
    websiteData: Website,
    navigationData: Navigation,
  ) {
    let links = navigationData.links;
    let deleteLinks: Link[] = [];

    let editedLinks: Link[] = websiteData.navigation.links.filter(
      (elem: Link) => elem.id != null,
    );

    let addLinks: Link[] = websiteData.navigation.links.filter(
      (elem: Link) => elem.id === 0,
    );

    links.forEach((comparisonObj: Link) => {
      const found = websiteData.navigation.links.some(
        (originalObj: Link) => originalObj.id === comparisonObj.id,
      );
      if (!found) {
        deleteLinks.push(comparisonObj);
      }
    });

    let deleteRequests = deleteLinks.map((ele: Link) =>
      this.deleteNavigationLink(ele.id),
    );

    let addRequests = addLinks.map((ele: Link) => {
      return this.createNavigationLink(websiteData.navigation.id, {
        name: ele.name,
        url: ele.url,
      });
    });

    return [...deleteRequests, ...addRequests];
  }
}
