import { IconType } from "react-icons";

export interface MenuItem {
  path: string;
  name: string;
  icon: IconType;
  routes?: MenuItem[];
}