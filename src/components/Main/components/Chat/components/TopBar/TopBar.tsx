import { FC } from "react";
import styled from "styled-components";
import { StickyTop } from "style";
import { Toolbar, Title } from "components";

export const TopBar: FC = () => {
  return (
    <Wrapper>
      <Title />
      <Toolbar />
    </Wrapper>
  );
};

const Wrapper = styled(StickyTop)`
  background: #373940;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
