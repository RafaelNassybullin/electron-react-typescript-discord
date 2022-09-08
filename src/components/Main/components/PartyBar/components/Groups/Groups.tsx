import styled from "styled-components";
import { Scroll } from "style";
import { GroupRoute } from "components";
import { groupsData } from "data";

export function Groups() {
  return (
    <Wrapper>
      {groupsData.map((data, index) => (
        <GroupRoute key={index + 1} title={data.title} parties={data.parties} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Scroll)`
  width: 100%;
  height: 100%;
  padding: 15px 5px 80px 5px;
`;
