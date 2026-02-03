class PublicPage {
  HOME = "/";
  SAVE = "/save";
  SHARE = "/share";
  SETTING = "/setting";
  SEARCHPAGE = "/search";
  PROFILE = "/profile";
  SEARCH(searchTerm: string) {
    return `/s?term=${searchTerm}`;
  }
}

export const PAGE = new PublicPage();
