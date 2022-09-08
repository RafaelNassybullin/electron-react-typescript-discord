import styled from "styled-components";
import {
  IconNotify,
  IconPin,
  IconPersons,
  IconMail,
  IconQuestion,
} from "assets/icons";
import { AlignCenter, Hover, PopTool } from "style";
import { Search } from "components";

export function Toolbar() {
  return (
    <Wrapper>
      <PopTool content="Notifications" placement="bottom">
        <Wrap>
          <IconNotify />
        </Wrap>
      </PopTool>

      <PopTool content="Pinned Messages" placement="bottom">
        <Wrap>
          <IconPin />
        </Wrap>
      </PopTool>

      <PopTool content="Hide Members" placement="bottom">
        <Wrap>
          <IconPersons />
        </Wrap>
      </PopTool>

      <Search />

      <PopTool content="Inbox" placement="bottom">
        <Wrap>
          <IconMail />
        </Wrap>
      </PopTool>

      <PopTool content="Help" placement="bottom">
        <Wrap>
          <IconQuestion />
        </Wrap>
      </PopTool>
    </Wrapper>
  );
}

const Wrapper = styled(AlignCenter)``;

const Wrap = styled(Hover)`
  margin-left: 10px;
`;
