import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Link from "next/link";
import { Hexagon } from "lucide-react";
export const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${colors.primary};
  padding: 20px;
  max-width: 100px;
  height: 100vh;
  gap: 200px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 200px;
  gap: 60px;
`;

export const StyledHomeLogo = styled(Hexagon)`
  margin-top: 20px;
`;

export const CenteredBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  color: ${colors.secondary};
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    flex-shrink: 0;
  }

  span {
    font-size: 14px;
  }
`;

export const Switcher = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: ${colors.tertiary};
  padding: 10px;
  border-radius: 20px;
  color: ${colors.secondary};
  border: 0;
`;
