import { FC } from "react";
import styled from "styled-components";
import { Member } from "components";
import { IPersons } from "interfaces";

interface IMembers {
  title: string;
  persons: IPersons[];
}

export const Members: FC<IMembers> = ({ title, persons }) => {
  return (
    <Wrapper>
      <Title>
        {title} - {persons.length}
      </Title>
      {persons.map((person: IPersons, index: number) => (
        <Member key={index + 1} person={person} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.p`
  color: gray;
  font-size: 13px;
  margin-bottom: 10px;
`;
