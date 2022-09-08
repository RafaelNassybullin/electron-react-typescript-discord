import { FC, useState } from "react";
import styled from "styled-components";
import { Profile } from "ui";
import {
  IconMicroOn,
  IconHeadsetOn,
  IconSettings,
  IconMicroOff,
  IconHeadSetOff,
} from "assets/icons";
import { Hover, PopTool } from "style";

export const MyProfile: FC = () => {
  const [micro, setMicro] = useState<boolean>(false);
  const [headset, setHeadset] = useState<boolean>(false);

  return (
    <Wrapper>
      <ProfileWrap>
        <Profile />
      </ProfileWrap>
      <Communication>
        {micro ? (
          <PopTool content={"Mute"} placement="top">
            <Hover onClick={() => setMicro(!micro)}>
              <IconMicroOn />
            </Hover>
          </PopTool>
        ) : (
          <PopTool content={"UnMute"} placement="top">
            <Hover onClick={() => setMicro(!micro)}>
              <IconMicroOff />
            </Hover>
          </PopTool>
        )}

        {headset ? (
          <PopTool content={"Deafen"} placement="top">
            <Hover onClick={() => setHeadset(!headset)}>
              <IconHeadsetOn />
            </Hover>
          </PopTool>
        ) : (
          <PopTool content={"UnDeafen"} placement="top">
            <Hover onClick={() => setHeadset(!headset)}>
              <IconHeadSetOff />
            </Hover>
          </PopTool>
        )}

        <PopTool content={"User Settings"} placement="top">
          <Hover>
            <IconSettings />
          </Hover>
        </PopTool>
      </Communication>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 55px;
  background: #2a2c31;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Communication = styled.div`
  width: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileWrap = styled(Hover)`
  padding: 5px;
`;
