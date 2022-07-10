import { extendTheme } from "@chakra-ui/react";
const Heading = {
  baseStyle: {
    color: "#003286",
    padding: "8px 0 4px 0",
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

const Text = {
  baseStyle: {
    color: "#444444",
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

const Box = {
  baseStyle: {
    borderRadius: "24px",
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

const Button = {
  baseStyle: {
    borderRadius: "20px",
  },
  sizes: {},
  variants: {
    solid: {
      bg: "#003286",
      color: "#FFFFFF",
    },
    inputCustom: {
      bg: "#FFFFFF",
      color: "#444444",
      padding: "4px",
      cursor: "pointer",
    },
    live: {
      bg: "#FFE070",
      color: "#444444",
    },
    signup: {
      bg: "#B8D2FF",
      color: "#444444",
      _hover: {
        bg: "#003286",
        color: "#FFFFFF",
      },
      cursor: "pointer",
    },
    landingpage: {
      bg: "#003286",
      color: "#FFFFFF",
      boxShadow: "0px 4px 44px 0px #00000040",
    },
  },
  defaultProps: {},
};
const Textarea = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {},
};
const Input = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {},
};

const theme = extendTheme({
  fonts: {
    body: `"Exo 2", sans-serif`,
    heading: `'Fredoka', sans-serif`,
    mono: "Menlo, monospace",
  },
  styles: {
    global: {},
  },
  shadows: {
    "input-shadow": "0px 4px 15px 0px #B8D2FF",
  },
  components: {
    Heading,
    Text,
    Box,
    Button,
    Input,
    Textarea,
  },
});

export default theme;
