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

export interface Selected {
  payload: any;
  type: string;
}

export interface SelectedRetrieved {
  id: number;
  props: any;
}

export interface SelectedNavUpdate {
  type: string;
  data: any;
}
