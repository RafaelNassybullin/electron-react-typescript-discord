import { IconCompass, IconPlus } from "assets/icons";
import { AnimateAvatar } from "ui";
import { useDispatch } from "react-redux";
import { openCloseMenu2 } from "store";

export const AddSearch = () => {
  const dispatch = useDispatch();

  const openPopUp = () => {
    dispatch(openCloseMenu2());
  };

  return (
    <>
      <span onClick={openPopUp}>
        <AnimateAvatar tooltip={"Explore Servers"} color={"#3AA55D"}>
          <IconCompass />
        </AnimateAvatar>
      </span>
      <AnimateAvatar tooltip={"Add a Server"} color={"#3AA55D"}>
        <IconPlus />
      </AnimateAvatar>
    </>
  );
};
