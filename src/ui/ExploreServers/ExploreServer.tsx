import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { openCloseMenu2, menuReselect2 } from "store";
import { Overlay, Wrapper } from "style";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayMenu, AnimPopUp } from "animations";
import { List } from "ui";
import { listData } from "data";

export const ExploreServers = () => {
  const state = useSelector(menuReselect2);
  const dispatch = useDispatch();

  function closePopUp() {
    dispatch(openCloseMenu2());
  }

  return (
    <AnimatePresence>
      {state && (
        <Overlay onClick={closePopUp}>
          <PopUpWrap
            as={motion.div}
            variants={OverlayMenu}
            initial="hidden"
            animate="visible"
          >
            <PopUp
              as={motion.div}
              variants={AnimPopUp}
              initial="hidden"
              animate="visible"
            >
              <h2>Create server</h2>
              <p>Create your own discord server!!!</p>
              {listData.map((list) => (
                <List key={list}>{list}</List>
              ))}
              <Button>Other</Button>
            </PopUp>
          </PopUpWrap>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const PopUpWrap = styled(Wrapper)`
  display: grid;
  place-items: center;
`;

const PopUp = styled.div`
  min-width: 450px;
  min-height: 630px;
  background: white;
  color: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background: #19d861;
  color: white;
  outline: none;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
`;
