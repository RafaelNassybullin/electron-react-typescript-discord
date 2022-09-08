import { AbsoluteImage } from "style";
import { serverIcon } from "data";
import { IServerIcon } from "interfaces";
import { AnimateAvatar } from "ui";

export const MyServers = () => {
  return (
    <>
      {serverIcon.map((server: IServerIcon) => (
        <AnimateAvatar
          key={server.id}
          tooltip={server.tooltip}
          count={server.message}
        >
          <AbsoluteImage src={server.image} alt={server.tooltip} />
        </AnimateAvatar>
      ))}
    </>
  );
};