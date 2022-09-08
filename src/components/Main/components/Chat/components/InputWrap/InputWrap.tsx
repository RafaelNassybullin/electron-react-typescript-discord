import { FC } from "react";
import { Center, Line } from "style";
import styled from "styled-components";
import { Input } from "components";

export const InputWrap: FC = () => {
  return (
    <Wrapper>
      <LineBorder />
      <Input />
    </Wrapper>
  );
};

const Wrapper = styled(Center)`
  width: 100%;
  height: 10%;
  background: #373940;
  position: relative;
`;

const LineBorder = styled(Line)`
  position: absolute;
  top: 0;
  width: 100%;
`


