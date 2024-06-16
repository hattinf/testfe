import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  SimpleChange,
} from "@angular/core";
import { ComponentAdd, ViewComponent } from "../../../models/components";
import { UpdateNavigation, UpdateProp } from "../../../models/update";
import { SelectedService } from "../../../services/selected.service";
import { Navigation } from "../../../models/navigation";
import { Footer } from "../../../models/footer";
import { Website } from "../../../models/website";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
  styleUrl: "./component.component.scss",
})
export class ComponentComponent {
  @Input() website!: Website;
  @Input() components!: ViewComponent[];
  @Input() componentsPreview!: any[];
  @Output() update = new EventEmitter<ViewComponent[]>();
  @Output() updateNav = new EventEmitter<UpdateNavigation>();
  @Output() updateFoot = new EventEmitter<UpdateNavigation>();
  @Output() addNav = new EventEmitter();
  @Output() addFot = new EventEmitter();
  @Input() open!: boolean;

  selectedComp: number = -1;
  selectedNav: boolean = false;
  selectedFot: boolean = false;
  loading: boolean = false;

  hover: number = -1;
  toggleAdd: boolean = false;
  toggleAddBottom: boolean = false;

  componentValues = [
    { value: "TPR", text: "TEXT" },
    { value: "HRP", text: "HERO" },
    { value: "RPR", text: "REGISTER" },
    { value: "CRP", text: "CARDS" },
    { value: "SHP", text: "SCHEDULE" },
    { value: "DIV", text: "DIVIDER" },
    { value: "FPR", text: "FAQ" },
    { value: "SHC", text: "SHOWCASE" },
    { value: "MDA", text: "MEDIA" },
    { value: "BRP", text: "BAR" },
  ];

  constructor(private selectService: SelectedService) {}

  ngOnInit() {
    this.loading = true;
    this.selectService.retrieveComp().subscribe((value) => {
      if (value.type === "component") {
        this.selectedComp = value.payload.comp.position;
      }
    });
  }

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (this.selectedComp >= 0 && this.open) {
      switch (event.key) {
        case "ArrowDown":
          if (this.selectedComp < this.components.length - 1) {
            const prev = this.selectedComp;
            this.selectedComp = this.selectedComp + 1;
            this.updatePoisition(prev, this.selectedComp);
          }
          break;
        case "ArrowUp":
          if (this.selectedComp > 0) {
            const prev = this.selectedComp;
            this.selectedComp = this.selectedComp - 1;
            this.updatePoisition(prev, this.selectedComp);
          }
          break;
      }
    }
  }

  updateEvent(update: UpdateProp) {
    this.components.forEach((element: ViewComponent, index: number) => {
      if (index === update.id) {
        element.prop = update.props;
      }
    });
    this.update.emit(this.components);
  }

  removeComponent(index: number) {
    this.components.splice(index, 1);
    this.components.forEach((obj, index) => {
      obj.position = index;
    });
    this.update.emit(this.components);
    this.deselect();
  }

  drop(event: CdkDragDrop<string[]>) {
    this.updatePoisition(event.previousIndex, event.currentIndex);
  }

  updatePoisition(prev: number, current: number) {
    moveItemInArray(this.components, prev, current);
    this.components.forEach((obj, index) => {
      obj.position = index;
    });
    this.update.emit(this.components);
    this.toggleSelect(this.components[current], current);
  }

  updateNavigation(update: UpdateNavigation) {
    this.updateNav.emit(update);
  }

  updateFooter(update: UpdateNavigation) {
    this.updateFoot.emit(update);
  }

  hoverEnter(i: number) {
    this.hover = i;
  }

  hoverLeave() {
    this.hover = -1;
    this.toggleAdd = false;
    this.toggleAddBottom = false;
  }

  deselect() {
    this.selectedComp = -1;
    this.selectedNav = false;
    this.selectedFot = false;
    this.selectService.closeSide();
  }

  selectNav() {
    this.selectedComp = -1;
    this.selectedFot = false;
    this.selectedNav = true;
    this.toggleSelectNav(this.website.navigation, "nav");
  }

  selectFot() {
    this.selectedComp = -1;
    this.selectedNav = false;
    this.selectedFot = true;
    this.toggleSelectNav(this.website.footer, "fot");
  }

  toggleAddComponent() {
    this.toggleAdd = !this.toggleAdd;
  }

  toggleAddComponentBottm() {
    this.toggleAddBottom = !this.toggleAddBottom;
  }

  addComponentEvent(event: ComponentAdd) {
    this.addComponent(event.type, event.index);
    this.toggleAddComponent();
  }

  addComponentEventBottom(event: ComponentAdd) {
    this.addComponent(event.type, event.index);
    this.toggleAddComponentBottm();
  }

  addComponent(type: string, position: number) {
    this.deselect();
    switch (type) {
      case "TPR":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            text: "place holder",
            textSize: "text-xl",
            textWeight: "",
            textStyle: "",
            subText: "place holder",
            subTextSize: "text-base",
            subTextWeight: "",
            subTextStyle: "",
            color: "text-black",
            backgroundColor: "bg-white",
            toggleSide: false,
            toggleColor: "bg-black",
            toggleFlip: false,
            imageTintColor: "bg-transparent",
            imageDarken: "brightness-100",
            imageToggle: false,
            alignText: "align-center",
            justifyText: "justify-center",
          },
          position: 0,
        });
        break;
      case "HRP":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            name: "place holder",
            subText: "place holder",
            textWeight: "font-bold",
            textStyle: "",
            subTextSize: "text-xs",
            subTextWeight: "",
            subTextStyle: "",
            textColor: "text-white",
            backgroundColor: "bg-black",
            sizeY: 30,
            imageToggle: false,
            imageTintColor: "",
            imageDarken: "brightness-100",
            alignText: "align-center",
            justifyText: "justify-center",
          },
          position: 0,
        });
        break;
      case "RPR":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            text: "default text",
            textSize: "text-2xl",
            textWeight: "font-bold",
            textStyle: "",
            subText: "default sub text",
            subTextSize: "text-xs",
            subTextWeight: "font-bold",
            subTextStyle: "italic",
            color: "text-white",
            backgroundColor: "bg-black",
          },
          position: 0,
        });
        break;
      case "CRP":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            data: {
              cards: [
                {
                  title: "DEFAULT",
                  titleSize: "text-2xl",
                  titleColor: "text-black",
                  description: "DEFAULT IMAGE IS VERY CUTE",
                  descriptionSize: "text-sm",
                  descriptionColor: "text-gray-500",
                  image: "",
                  color: "bg-white",
                },
              ],
            },
            backgroundColor: "bg-white",
          },
          position: 0,
        });
        break;
      case "SHP":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            data: {
              date: "2021-10-10",
              title: "Sample schedule",
              titleColor: "text-black",
              titleSize: "text-2xl",
              titleWeight: "font-bold",
              titleStyle: "",
              color: "bg-white",
              textColor: "text-black",
              activities: [
                {
                  title: "Sample meeting",
                  description: "Sample meeting schedule description",
                  from: "09:00",
                  to: "12:00",
                  location: "Room 1",
                },
              ],
            },
          },
          position: 0,
        });
        break;
      case "DIV":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            color: "bg-white",
            size: 20,
          },
          position: 0,
        });
        break;
      case "FPR":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            color: "bg-slate-100",
            backgroundColor: "bg-white",
            textColor: "text-black",
            borderColor: "border-black",
            data: {
              faqs: [
                {
                  question: "What is the purpose of this FAQ?",
                  answer:
                    "This FAQ is a way to help answer questions that are frequently asked.",
                },
              ],
            },
          },
          position: 0,
        });
        break;
      case "SHC":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            color: "text-black",
            backgroundColor: "bg-white",
            textColor: "text-black",
            borderColor: "border-black",
            data: {
              participant: [
                {
                  name: "John Doe",
                  image: "",
                  description: "John Doe is the CEO of this company.",
                  link: "https://www.google.com",
                },
                {
                  name: "Jane Doe",
                  image: "",
                  description: "Jane Doe is the CTO of this company.",
                  link: "https://www.google.com",
                },
                {
                  name: "John Smith",
                  image: "",
                  description: "John Smith is the COO of this company.",
                  link: "https://www.google.com",
                },
              ],
            },
          },
          position: 0,
        });
        break;
      case "MDA": {
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            text: "default text",
            textSize: "text-2xl",
            textWeight: "font-bold",
            textStyle: "",
            subText: "default sub text",
            subTextSize: "text-xs",
            subTextWeight: "font-bold",
            subTextStyle: "italic",
            color: "text-white",
            backgroundColor: "bg-black",
            toggleText: true,
          },
          position: 0,
        });
        break;
      }
      case "BRP":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            barColor: "bg-black",
            images: {
              images: [
                {
                  image: "",
                },
              ],
            },
          },
          position: 0,
        });
        break;
      case "IMG":
        this.components.splice(position, 0, {
          id: 0,
          type: type,
          name: "default",
          prop: {
            imageLink: "",
            imageAltText: "",
            imageBackground: "bg-white",
          },
          position: 0,
        });
        break;
    }
    this.components.forEach((obj, index) => {
      obj.position = index;
    });
    this.update.emit(this.components);
  }

  toggleSelect(component: any, i: number) {
    if (this.selectedNav) this.selectedNav = false;
    if (this.selectedFot) this.selectedFot = false;
    this.selectService.selectComp({
      payload: {
        comp: component,
        index: i,
      },
      type: "component",
    });
  }

  toggleSelectNav(navigation: Navigation | Footer, type: string) {
    this.selectService.selectComp({
      payload: {
        nav: navigation,
      },
      type: type === "nav" ? "navigation" : "footer",
    });
  }
}
