import styled from "styled-components";
import { StickyTop } from "style";
import { IconBeforeArrow, IconArrow } from "assets/icons";
import { Menu } from "components";
import { useDispatch, useSelector } from "react-redux";
import { openCloseMenu, menuReselect } from "store";
import { ExploreServers } from "ui";

export function TopMenu() {
  const dispatch = useDispatch();
  const state = useSelector(menuReselect);

  function openMenu() {
    dispatch(openCloseMenu());
  }

  return (
    <>
      <Wrapper>
        <Title>Game Center</Title>
        <MenuIcon onClick={openMenu}>
          {!state ? <IconBeforeArrow /> : <IconArrow />}
        </MenuIcon>
      </Wrapper>
      <Menu />
      <ExploreServers />
    </>
  );
}

const Wrapper = styled(StickyTop)`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2f3136;
`;

const Title = styled.p`
  font-size: 15px;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  transform: translateY(3px);
  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;
