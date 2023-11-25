const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
  colors: {
    light: {
      bgPrimary: "#fefffe",
      bgSecondary: "#f3f3f3",
      border: "#fefffe",
    },
    dark: {
      bgPrimary: "#020919",
      bgSecondary: "#0d1321",
      border: "#111724",
    },
  },
  fonts: {},
});

export default theme;
