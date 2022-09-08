import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { openCloseMenu, menuReselect } from "store";
import { AlignCenter } from "style";
import { motion } from "framer-motion";
import { OverlayMenu, AnimMenu } from "animations";
import { menuIcon } from "data";
import { IMenuIcon } from "interfaces";

interface IColor {
  colors: string;
}

export const Menu = () => {
  const state = useSelector(menuReselect);
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(openCloseMenu());
  }

  return (
    <>
      {state && (
        <Overlay onClick={closeMenu}>
          <Wrapper
            as={motion.div}
            variants={OverlayMenu}
            initial="hidden"
            animate="visible"
          >
            <WrapMenu
              as={motion.div}
              variants={AnimMenu}
              initial="hidden"
              animate="visible"
            >
              {menuIcon.map((menuBtn: IMenuIcon) => (
                <BtnItem key={menuBtn.id}>
                  <Text colors={menuBtn.color}>{menuBtn.title}</Text>
                  <Icon colors={menuBtn.color}>
                    <svg
                      aria-hidden="true"
                      role="img"
                      width="15"
                      height="15"
                      viewBox="0 0 8 12"
                    >
                      <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z"></path>
                      <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z"></path>
                    </svg>
                  </Icon>
                </BtnItem>
              ))}
            </WrapMenu>
          </Wrapper>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  z-index: 99;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #0000003d;
`;

const WrapMenu = styled.div`
  width: 210px;
  position: absolute;
  top: 60px;
  left: 15px;
  height: 299px;
  border-radius: 10px;
  background: #18191c;
  color: white;
  padding: 5px 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnItem = styled(AlignCenter)`
  width: 100%;
  padding: 10px 5px;
  border-radius: 3px;
  justify-content: space-between;
  cursor: pointer;
  margin: 5px 0;
  &:hover {
    color: white;
    background: #19d861;
  }
`;
const Text = styled.p<IColor>`
  color: ${(props) => props.colors};
  font-size: 14px;
  &:hover {
    color: white;
  }
`;
const Icon = styled.span<IColor>`
  fill: ${(props) => props.colors};
`;
