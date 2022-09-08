import { FC } from "react";
import styled from "styled-components";
import { IconSettings, IconStickers, IconGif } from "assets/icons";
import { AlignCenter } from "style";

export const InputToolBar: FC = () => {
  return (
    <Icons>
      <Icon>
        <IconGif />
      </Icon>
      <Icon>
        <IconSettings />
      </Icon>
      <Icon>
        <IconStickers />
      </Icon>
    </Icons>
  );
};

const Icons = styled(AlignCenter)`
  justify-content: space-between;
  min-width: 100px;
`;

const Icon = styled.div`
  cursor: pointer;
  svg {
    fill: white;
  }
`;
