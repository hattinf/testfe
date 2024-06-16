import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { Page } from "./page";
import { User } from "./user";

export interface Website {
  id: number;
  name: string;
  description: string;
  user: User;
  published: boolean;
  page: Page[];
  footer: any;
  navigation: any;
}

export interface WebsiteShort {
  id: number;
  name: string;
  description: string;
  user: any;
  published: boolean;
}

export interface PublicWebsite {
  id: number;
  name: string;
  description: string;
  page: Page;
  footer: Footer;
  navigation: Navigation;
  published: boolean;
}
