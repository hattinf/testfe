import { Type } from "@angular/core";
import { TextProp } from "./text-prop";
import { HeroProp } from "./hero-prop";
import { Media } from "./media";
import { Divider } from "./divider";
import { Faqs } from "./faq";
import { ImageBar } from "./image-bar";
import { Image } from "./image";
import { Regs } from "./regs";
import { Showcase } from "./showcase";
import { Schedule } from "./schedule";

export interface ViewComponent {
  id: number;
  name: string;
  prop: any;
  type: string;
  position: number;
}

export interface CreateViewComponent {
  page: number;
  name: string;
  props:
    | TextProp
    | HeroProp
    | Media
    | Divider
    | Faqs
    | ImageBar
    | Image
    | Regs
    | Showcase
    | Schedule;
  type: string;
  position: number;
}

export interface UpdateViewComponent {
  name: string;
  props:
    | TextProp
    | HeroProp
    | Media
    | Divider
    | Faqs
    | ImageBar
    | Image
    | Regs
    | Showcase
    | Schedule;
  type: string;
  position: number;
}

export interface ComponentAdd {
  type: string;
  index: number;
}
