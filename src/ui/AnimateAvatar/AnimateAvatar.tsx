import styled from "styled-components";
import { Circle } from "style";
import { FC, ReactChild, useState } from "react";
import { PopTool } from "style";

interface IAnimateAvatar {
  children?: ReactChild;
  count?: boolean;
  tooltip?: string;
  color?: string;
}

interface IHoverAvatar {
  isActive: boolean;
}

export const AnimateAvatar: FC<IAnimateAvatar> = ({
  children,
  count,
  tooltip,
  color,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#2f3136");

  const handler = () => {
    setIsActive(!isActive);
  };

  return (
    <PopTool content={tooltip} placement="right">
      <HoverAvatar
        onMouseEnter={() => setBgColor(color || "#2f3136")}
        onMouseLeave={() => setBgColor("#2f3136")}
        style={{ backgroundColor: bgColor }}
        isActive={isActive}
        onClick={handler}
      >
        <MyMessages>{children}</MyMessages>
        {count && <MessageCount>1</MessageCount>}
      </HoverAvatar>
    </PopTool>
  );
};

const HoverAvatar = styled(Circle)<IHoverAvatar>`
  margin: 5px 0;
  position: relative;

  &:before {
    transition: 150ms ease-in-out;
    content: "";
    position: absolute;
    top: 30%;
    height: 10px;
    top: ${(props) => (props.isActive ? "-8%" : "30%")};
    height: ${(props) => (props.isActive ? "30px" : "10px")};
    transform: translateY(50%);
    left: -17px;
    border-radius: 25px;
    width: 8px;
    background: white;
  }

  &:hover {
    &:before {
      top: ${(props) => (props.isActive ? "-25%" : "-8%")};
      height: ${(props) => (props.isActive ? "40px" : "30px")};
    }
  }
`;

const MyMessages = styled(Circle)`
  position: relative;
  width: 54px;
  height: 54px;
  overflow: hidden;
  border-radius: 50%;
`;

const MessageCount = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid #202126;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f04648;
  color: white;
  bottom: -3px;
  right: -3px;
  font-size: 14px;
`;
