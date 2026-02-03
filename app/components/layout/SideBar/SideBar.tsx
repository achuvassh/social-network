import { items } from "../../../helpers/variables/sideBarItems";
import { SideBarItem } from "./SideBarItem";
import {
  CenteredBox,
  ColumnContainer,
  FlexContainer,
  SideBarContainer,
  StyledHomeLogo,
  StyledLink,
  Switcher,
} from "./SideBarStyles";
import { colors } from "../../../styles/colors";
import { CircleUserRound, Moon, Sun } from "lucide-react";
import { PAGE } from "../../../helpers/variables/public-page.config";

export function SideBar() {
  return (
    <SideBarContainer>
      <FlexContainer>
        <StyledHomeLogo className="home-logo" color={colors.secondary} />
        <ColumnContainer>
          {items.map((item, index) => (
            <SideBarItem item={item} key={index} />
          ))}
        </ColumnContainer>
      </FlexContainer>
      <CenteredBox>
        <Switcher className="toggle-switch">
          <Sun />
          <Moon />
        </Switcher>
        <StyledLink href={PAGE.PROFILE}>
          <CircleUserRound size={25} color={colors.secondary} />
        </StyledLink>
      </CenteredBox>
    </SideBarContainer>
  );
}
