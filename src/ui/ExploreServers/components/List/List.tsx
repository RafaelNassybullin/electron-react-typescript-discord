import styled from "styled-components";
import { FC, ReactChild } from "react";
import { AlignCenter } from "style";

interface IList {
  children: ReactChild;
}

export const List: FC<IList> = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled(AlignCenter)`
  width: 100%;
  height: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: space-between;
  padding: 30px;
  cursor: pointer;
  &:hover {
    background: #d4cfcf;
  }
`;
