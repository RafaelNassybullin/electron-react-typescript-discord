import { FC, useState } from "react";
import styled from "styled-components";
import { Elipsis, Hover, PopTool } from "style";
import { IconHashTag } from "assets/icons/IconHashTag";
import { IconAddPerson } from "assets/icons/IconAddPerson";

interface IGroupLink {
  title?: string;
}

interface IWrapper {
  isRead: boolean;
}

export const GroupLink: FC<IGroupLink> = ({ title }) => {
  const [isRead, setIsRead] = useState<boolean>(false);
  return (
    <Wrapper isRead={isRead} onClick={() => setIsRead(true)}>
      <IconHashTag />
      <Title>{title}</Title>

      <Tips content={"Create Invite"} placement={"top"}>
        <div>
          <IconAddPerson />
        </div>
      </Tips>
    </Wrapper>
  );
};

const Wrapper = styled(Hover)<IWrapper>`
  place-items: initial;
  padding: 6px;
  padding-left: 7px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    display: ${(props) => (props.isRead ? "none" : "block")};
    content: "";
    width: 20px;
    height: 10px;
    border-radius: 25px;
    position: absolute;
    left: -21px;
    bottom: 0;
    transform: translateY(-137%);
    background: white;
  }
  svg {
    &:last-child {
      display: none;
    }
  }
  &:hover {
    svg {
      display: block;
    }
  }
`;

const Tips = styled(PopTool)`
  padding: 3px;
  font-size: 12px;
`;

const Title = styled(Elipsis)`
  width: 67%;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 7px;
  margin-right: 15px;
`;
