import { Link } from "./link";

export interface Navigation {
  id: number;
  logo: string;
  backgroundColor: string;
  linkColor: string;
  links: Link[];
}

export interface UpdateNavigation {
  logo: string;
  backgroundColor: string;
  linkColor: string;
}

export interface CreateNavigation {
  logo: string;
  backgroundColor: string;
  linkColor: string;
  website: number;
}
