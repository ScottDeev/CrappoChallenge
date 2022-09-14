

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {duration: 1.1 },
  },
};

export const fadeInRight = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.1 },
  },
};

export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      ease: "ease-in"
      // delayChildren: 0.3,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {duration: 1.1 },
  },
};

export const zoomOut = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 3 },
  },
};
