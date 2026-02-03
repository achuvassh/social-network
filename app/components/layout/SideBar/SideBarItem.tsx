import { SideBarItemData } from "../../../helpers/types/sideBarItem";
import { ColumnContainer, StyledLink } from "./SideBarStyles";

export function SideBarItem({ item }: { item: SideBarItemData }) {
  const { icon: Icon, label, link } = item;
  return (
    <ColumnContainer>
      <StyledLink href={link}>
        <Icon size={25} />
        <span>{label}</span>
      </StyledLink>
    </ColumnContainer>
  );
}
