import {
  Hexagon,
  House,
  Search,
  Bookmark,
  Share,
  Settings,
} from "lucide-react";
import { SideBarItemData } from "../types/sideBarItem";
import { PAGE } from "./public-page.config";

export const items: SideBarItemData[] = [
  { label: "Home", link: PAGE.SEARCHPAGE, icon: House },
  { label: "Search", link: PAGE.SHARE, icon: Search },
  { label: "Save", link: PAGE.SETTING, icon: Bookmark },
  { label: "Share", link: PAGE.SHARE, icon: Share },
  { label: "Setting", link: PAGE.SHARE, icon: Settings },
];
