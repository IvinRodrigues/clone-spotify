import {
  BackgroundDefaultBase,
  BackgroundDefaultHighlight,
  BackgroundDefaultPress,
  BackgroundElevatedBase,
  BackgroundElevatedHighlight,
  BackgroundElevatedPress,
  BackgroundTintedBase,
  BackgroundTintedHighlight,
  BackgroundTintedPress,
  // BackgroundInteractiveBase,
  TextBase,
  TextSubdued,
  TextSuccess,
  TextNegative,
  TextWarning,
  TextAnnoucement,
} from "@clonefy/assets";

const theme = {
  background: {
    default: {
      base: BackgroundDefaultBase,
      highlight: BackgroundDefaultHighlight,
      press: BackgroundDefaultPress,
    },
    elevated: {
      base: BackgroundElevatedBase,
      highlight: BackgroundElevatedHighlight,
      press: BackgroundElevatedPress,
    },
    inreactive: {
      // base: BackgroundInteractiveBase
    },
    tinted: {
      base: BackgroundTintedBase,
      highlight: BackgroundTintedHighlight,
      press: BackgroundTintedPress,
    },
  },
  text: {
    base: TextBase,
    subdued: TextSubdued,
    success: TextSuccess,
    negative: TextNegative,
    warning: TextWarning,
    annoucement: TextAnnoucement,
  },
  transition: {
    default: "all .2s ease-in-out",
  },
};

export { theme };
