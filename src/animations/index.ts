export const AnimMenu = {
  hidden: {
    y: "29%",
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
};

export const OverlayMenu = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const AnimPopUp = {
  hidden: {
    scale: 0.3,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
};