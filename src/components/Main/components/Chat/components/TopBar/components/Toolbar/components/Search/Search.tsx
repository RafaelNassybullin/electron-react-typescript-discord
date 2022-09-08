import { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { IconSearch } from "assets/icons";
import { AlignCenter, Inputs } from "style";

interface IInput {
  resize?: boolean;
}

export const Search = () => {
  const [focus, setFocus] = useState(false);

  return (
    <Wrapper resize={focus} onClick={() => setFocus(!focus)}>
      <Input type="text" placeholder="Search" />
      <Icon resize={focus}>
        <IconSearch />
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled(AlignCenter)<IInput>`
  transition: 300ms ease-in-out;
  width: ${(props) => (props.resize ? "230px" : "140px;")};
  height: 24px;
  border-radius: 5px;
  background: #202225;
  position: relative;
  margin-left: 10px;
`;

const Input = styled(Inputs)<InputHTMLAttributes<HTMLInputElement>>`
  width: 83%;
  padding-left: 10px;
  outline: none;
  background: none;
  border: none;
  color: white;
`;

const Icon = styled.div<IInput>`
  transform: translateY(2px);
  transition: 300ms ease-in-out;

  margin-left: ${(props) => (props.resize ? "20px" : "2px;")};
  cursor: pointer;
`;
