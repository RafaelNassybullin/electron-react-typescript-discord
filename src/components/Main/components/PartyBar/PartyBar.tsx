import styled from "styled-components";
import { TopMenu, MyProfile, Groups } from "components";

export function PartyBar() {
  return (
    <Wrapper>
      <TopMenu />
      <Groups />
      <MyProfile />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 240px;
  height: 100vh;
  background: #2f3136;
  border-radius: 12px 0 0 0;
  overflow: hidden;
  position: relative;
`;
