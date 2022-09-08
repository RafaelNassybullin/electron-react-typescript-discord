import { FC } from "react";
import styled from "styled-components";
import { Avatar } from "ui";
import { Elipsis } from "style";
import { ImageLinks } from "assets/images";

export const Profile: FC = () => {
  return (
    <Wrapper>
      <Avatar src={ImageLinks.image1} />
      <Text>
        <Name>LO4D.com</Name>
        <Id>#12345</Id>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled(Elipsis)`
  font-size: 14px;
  max-width: 80px;
  height: 24px;
`;

const Id = styled.p`
  font-size: 12px;
  color: gray;
`;
