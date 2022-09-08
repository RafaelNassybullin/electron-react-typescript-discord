import { FC, useState } from "react";
import styled from "styled-components";
import { IconBeforeArrow } from "assets/icons";
import { AlignCenter } from "style";
import { GroupLink } from "ui";

interface IGroupRoute {
  title: string;
  parties: string[];
}

interface IText {
  isRotate: boolean;
}

export const GroupRoute: FC<IGroupRoute> = ({ title, parties }) => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <>
      <Text isRotate={isRotate} onClick={() => setIsRotate(!isRotate)}>
        <IconBeforeArrow />
        <Title>{title}</Title>
      </Text>
      {parties.map((party: string, index: number) => (
        <GroupLink key={index + 1} title={party} />
      ))}
    </>
  );
};

const Text = styled(AlignCenter)<IText>`
  cursor: pointer;
  color: gray;
  margin-top: 25px;
  svg {
    fill: gray;
    transition: 100ms transform ease-in-out;
    transform: ${(props) => (props.isRotate ? "rotate(0)" : "rotate(-90deg)")};
  }
  &:hover {
    color: white;
    svg {
      fill: white;
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 13px;
`;
