import { Link } from "./link";

export interface Footer {
  id: number;
  bottomText: string;
  backgroundColor: string;
  linkColor: string;
  links: Link[];
}

export interface UpdateFooter {
  bottomText: string;
  backgroundColor: string;
  linkColor: string;
}

export interface CreateFooter {
  bottomText: string;
  backgroundColor: string;
  linkColor: string;
  website: number;
}
