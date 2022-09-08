import { FC } from "react";
import styled from "styled-components";
import { IconInputPlus } from "assets/icons";
import { InputToolBar } from "components";
import { AlignCenter, Inputs } from "style";

export const Input: FC = () => {
  return (
    <Wrapper>
      <Plus>
        <IconInputPlus />
        <Line />
      </Plus>
      <MessageInput type="text" placeholder="Message #welcome" />
      <InputToolBar />
    </Wrapper>
  );
};

const Wrapper = styled(AlignCenter)`
  width: 95%;
  height: 40px;
  background: #484a52;
  transform: translateY(-7px);
  border-radius: 5px;
  overflow: hidden;
  justify-content: space-between;
  padding-right: 10px;
`;

const Plus = styled(AlignCenter)`
  min-width: 45px;
  height: 98%;
  justify-content: space-between;
  padding-left: 10px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 1px;
  height: 33px;
  background: gray;
`;

const MessageInput = styled(Inputs)`
  width: 80%;
  margin-left: 14px;
  font-size: 17px;
  user-select: text;
`;
