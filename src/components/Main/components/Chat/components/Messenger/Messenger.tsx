import styled from "styled-components";
import { Scroll } from "style";
import { Messages } from "components";
import { messagesData } from "data";
import { IMessages } from "interfaces";

export const Messenger = () => {
  return (
    <Wrapper>
      <MessageWrap>
        {messagesData.map((message: IMessages) => (
          <Messages key={message.id} message={message} />
        ))}
      </MessageWrap>
    </Wrapper>
  );
};

const Wrapper = styled(Scroll)`
  width: 100%;
  height: 88%;
  margin-top: 15px;
  background: #373940;
  padding-top: 80px;
  overflow: hidden;
  display: grid;
`;

const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
