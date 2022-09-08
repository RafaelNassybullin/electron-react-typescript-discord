import { FC } from "react";
import styled from "styled-components";
import { TopBar, RightBar, Messenger, InputWrap } from "components";

export const Chat:FC = () => {
  return (
    <Wrap>
      <TopBar />
      <Messenger />
      <InputWrap />
      <RightBar />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #373940;
  padding-right: 240px;
`;
