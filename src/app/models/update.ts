import { Navigation } from "./navigation";
export type NavigationType = Navigation;

export interface UpdateProp {
  id: number;
  props: any;
}

export interface UpdateNavigation {
  type: string;
  data: any;
}
