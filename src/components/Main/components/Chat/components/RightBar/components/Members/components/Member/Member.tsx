import { FC } from "react";
import { AlignCenter } from "style";
import styled from "styled-components";
import { Avatar } from "ui";
import { Hover } from "style";
import { IPersons } from "interfaces";

interface IMember {
  person: IPersons;
}

export const Member: FC<IMember> = ({ person }) => {
  return (
    <HoverWrap>
      <Wrapper>
        <Image>
          <Avatar src={person.image} />
        </Image>
        <Text>
          <Name>
            {person.name} {person.isBot && <Bot>BOT</Bot>}
          </Name>
          {person.game && <WhatDoing>Playing {person.game}</WhatDoing>}
        </Text>
      </Wrapper>
    </HoverWrap>
  );
};

const HoverWrap = styled(Hover)`
  place-items: initial;
  padding: 5px;
  padding-left: 7px;
  margin-top: 4px;
  &:last-child {
    margin-bottom: 30px;
  }
`;
const Wrapper = styled(AlignCenter)`
  position: relative;
`;
const Bot = styled.span`
  font-size: 10px;
  padding: 2px;
  background: #717bf8;
  margin-left: 5px;
  border-radius: 4px;
`;
const Image = styled.div``;
const Text = styled.div``;
const Name = styled(AlignCenter)``;
const WhatDoing = styled.p`
  font-size: 12px;
  color: gray;
`;
