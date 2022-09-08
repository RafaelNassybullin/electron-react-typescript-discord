import styled from "styled-components";
import { IconDiscord } from "assets/icons";
import { FC } from "react";
import { Scroll } from "style";
import { AddSearch, MyServers } from "components";
import { AnimateAvatar } from "ui";

export const LeftBar: FC = () => {
  return (
    <>
      <Wrapper>
        <Logo tooltip={"Direct Messages"} color={"#616CF1"}>
          <IconDiscord />
        </Logo>
        <Line />
        <MyServers />
        <Line />
        <AddSearch />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Scroll)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  height: 100vh;
  background: #202126;
  padding-top: 5px;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const Logo = styled(AnimateAvatar)``;

const Line = styled.span`
  width: 40px;
  background: #2f3037;
  height: 3px;
  border-radius: 25px;
  margin: 5px 0;
`;
