import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { AUTH_API } from "./auth.service";
import { Image } from "../models/image";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  onFileChange(event: any, control: FormControl) {
    this.onFileRemove(control);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let string = reader.result as string;
      const data = string.split(",")[1];
      this.saveImage({ image: data }).subscribe((image) => {
        control.setValue(AUTH_API + "image/" + image.id);
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onFileRemove(control: FormControl) {
    const url = control.value;
    if (url) this.deleteImage(url).subscribe(() => control.setValue(""));
  }

  public saveImage(body: any): Observable<any> {
    return this.http.post(AUTH_API + "image", body);
  }

  public deleteImage(url: string): Observable<{}> {
    return this.http.delete(url);
  }

  public getImage(url: string): Observable<Image> {
    return this.http.get<Image>(url);
  }
}
