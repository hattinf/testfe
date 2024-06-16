import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { WebsiteService } from "../../../services/website.service";
import { Page } from "../../../models/page";

@Component({
  selector: "app-create-page",
  templateUrl: "./create-page.component.html",
  styleUrl: "./create-page.component.scss",
})
export class CreatePageComponent {
  @Input() set code(data:Page[]){
    this.pages = data.filter((ele)=> ele.slug != "/")
  }

  pages!: Page[];
  @Input() websiteID!: number;

  @Output() update = new EventEmitter<null>();

  toggleOpen: boolean = false;
  

  constructor(private websiteService: WebsiteService) {}

  sub = new Subscription();
  page = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z -']+"),
    ]),
    sub: new FormControl(false),
    slug: new FormControl("/"),
  });

  subPage = new FormControl()
  
  ngOnInit() {
    this.subPage.patchValue(this.pages[0].id)
  }

  onSubmit() {
    if (this.page.valid) {
      let body = this.page.value;
      this.websiteService.createPage(body, this.websiteID, body.sub ? this.subPage.value : null).subscribe({
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.toggleOpen = false;
          this.page.reset();
          this.update.emit()
        },
      });
    }
  }

  onCancel() {
    this.page.reset();
    this.toggleOpen = false;
    this.sub.unsubscribe();
  }


  open() {
    this.sub.add(
      this.page.controls.title.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((value) => {
          this.page.controls.slug.patchValue("/" + value);
        }),
    );
    this.toggleOpen = true;
  }
}
