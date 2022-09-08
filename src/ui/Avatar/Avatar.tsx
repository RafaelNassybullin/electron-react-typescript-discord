import { FC } from "react";
import styled from "styled-components";
import { AbsoluteImage } from "style";

interface IAvatar {
  src: string
}

export const Avatar: FC<IAvatar> = ({src}) => {
  return (
    <Wrapper>
      <RadiusCornerImage src={src} alt="image" />
      <Status />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Status = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid #2a2c31;
  background: #42b581;
  border-radius: 50%;
  position: absolute;
  bottom: -3px;
  right: -3px;
`;

const RadiusCornerImage = styled(AbsoluteImage)`
  border-radius: 50%;
`;
