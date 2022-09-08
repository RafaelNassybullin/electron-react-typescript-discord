import styled, { createGlobalStyle } from "styled-components"
import Tippy from "@tippyjs/react";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  user-select: none;
}

body {
  color: white;
  background: #202225;
  height: 100vh;
}

main{
  display: flex;
}

*::-webkit-scrollbar {
  width: 7px;
}
  
*::-webkit-scrollbar-thumb {
  background-color: #202126;
  border-radius: 25px;
}

*:before {
  color: black;
}
`;

export const Scroll = styled.div`
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
  }
`
export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const Hover = styled(Center)`
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #484a52;
  }
`;

export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StickyTop = styled.div`
  padding: 20px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #1E1F22;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AbsoluteImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Elipsis = styled.p`
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;

export const Inputs = styled.input`
  outline: none;
  background: none;
  border: none;
  color: white;
`;

export const Circle = styled.div`
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%; 
  cursor: pointer;
  transition: 100ms ease-in-out;
  svg {
    fill: #3AA55D;
  }
  &:hover{
    border-radius: 18px;
    svg {
      fill: white;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const PopTool = styled(Tippy)`
  background: black;
  padding: 7px;
  font-weight: bold;
  border-radius: 8px;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background: #40444a;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  z-index: 99;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #0000003d;
`;