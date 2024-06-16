import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  CreateViewComponent,
  UpdateViewComponent,
  ViewComponent,
} from "../models/components";
import { Page } from "../models/page";
import { Website } from "../models/website";
import { AUTH_API } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class ComponentsService {
  constructor(private http: HttpClient) {}

  public deleteComponent(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API + "components/" + id);
  }

  public createComponent(
    body: CreateViewComponent,
    pageID: number,
  ): Observable<ViewComponent> {
    return this.http.post<ViewComponent>(
      AUTH_API + "pages/" + pageID + "/component",
      body,
    );
  }

  public updateComponents(
    body: UpdateViewComponent,
    pageID: number,
  ): Observable<ViewComponent> {
    return this.http.put<ViewComponent>(
      AUTH_API + "components/" + pageID,
      body,
    );
  }

  public updateComponentData(
    pageData: Page,
    websiteData: Website,
    pageID: number,
  ) {
    let deleteArr: ViewComponent[] = [];

    const editArr: ViewComponent[] = pageData.components.filter(
      (elem: ViewComponent) => elem.id != 0,
    );

    const addArray: ViewComponent[] = pageData.components.filter(
      (elem: ViewComponent) => elem.id === 0,
    );

    const page = websiteData.page.find((ele: Page) => ele.id === pageData.id);
    if (page) {
      page.components.forEach((comparisonObj: ViewComponent) => {
        const found = pageData.components.some(
          (originalObj: ViewComponent) => originalObj.id === comparisonObj.id,
        );
        if (!found) {
          deleteArr.push(comparisonObj);
        }
      });
    } else {
      return throwError("Page not found");
    }

    let deleteRequests = deleteArr.map((ele: ViewComponent) =>
      this.deleteComponent(ele.id),
    );

    let addRequests = addArray.map((ele: ViewComponent) => {
      let newComponent: CreateViewComponent = {
        page: pageID,
        name: ele.name,
        props: ele.prop,
        type: ele.type,
        position: ele.position,
      };
      return this.createComponent(newComponent, pageID);
    });

    let editRequest = editArr.map((ele: ViewComponent) => {
      let updateComponent: UpdateViewComponent = {
        props: ele.prop,
        name: ele.name,
        type: ele.type,
        position: ele.position,
      };
      return this.updateComponents(updateComponent, ele.id);
    });

    return [...deleteRequests, ...addRequests, ...editRequest];
  }
}
