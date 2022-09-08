import styled from "styled-components";
import { AbsoluteImage } from "style";
import { FC } from "react";
import { IMessages } from "interfaces";

interface IMessageProps {
  message: IMessages;
}

interface IName {
  colors: string;
}

export const Messages: FC<IMessageProps> = ({ message }) => {
  return (
    <Wrapper>
      <ProfileImg>
        <Img src={message.image} alt={message.name} />
      </ProfileImg>
      <Text>
        <Name colors={message.color}>
          {message.name} <Date>2022/09/08</Date>
        </Name>
        <Message>{message.text}</Message>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  cursor: text;
  user-select: all;
  display: flex;
  margin-top: 24px;
  padding: 10px 20px;

  &:hover {
    background: #484a52;
  }
`;
const ProfileImg = styled.div`
  min-width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
`;
const Img = styled(AbsoluteImage)``;
const Text = styled.div`
  margin-left: 15px;
`;
const Name = styled.div<IName>`
  font-weight: bold;
  color: ${(props) => props.colors};
`;
const Date = styled.span`
  font-size: 12px;
  color: gray;
  font-weight: 400;
  margin-left: 8px;
`;

const Message = styled.div`
  margin-top: 10px;
  line-height: 1.5;
`;
