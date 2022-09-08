import styled from "styled-components";
import { IconHashTag } from "assets/icons";

export const Title = () => {
  return (
    <Wrap>
      <IconHashTag />
      <Text>welcome</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 10px;
`;
