import { ViewComponent } from "./components";

export interface Page {
  id: number;
  title: string;
  slug: string;
  hidden:boolean;
  sub: boolean;
  components: ViewComponent[];
}
