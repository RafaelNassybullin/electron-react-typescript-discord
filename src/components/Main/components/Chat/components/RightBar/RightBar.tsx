import styled from "styled-components";
import { Members } from "components";
import { Scroll } from "style";
import { membersData } from "data";

export const RightBar = () => {
  return (
    <Wrapper>
      {membersData.map((members, index) => (
        <Members key={index + 1} title={members.title} persons={members.persons}/>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Scroll)`
  position: fixed;
  padding: 15px;
  padding-bottom: 40px;
  top: 55px;
  right: 0;
  width: 240px;
  height: 100vh;
  background: #2f3136;
`;
