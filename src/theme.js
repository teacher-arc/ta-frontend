import { extendTheme } from "@chakra-ui/react"
const Heading =  {
  baseStyle: {
    color: '#003286',
    padding: '8px 0 4px 0'
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  },
};

const Text =  {
  baseStyle: {
    color: '#444444'
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  },
};

const Box = {
  baseStyle: {
    borderRadius: '24px',
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  },
};

const Button = {
  baseStyle: {
    borderRadius: '20px',
  },
  sizes: {
  },
  variants: {
    solid: {
      bg: '#003286',
      color: '#FFFFFF',
    }
  },
  defaultProps: {
  },
};

const Input = {
  baseStyle: {
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  },
};

const theme = extendTheme({
    fonts: {
        body: `"Exo 2", sans-serif`,
        heading: `'Fredoka', sans-serif`,
        mono: "Menlo, monospace",
      },
    styles: {
        global: {


        }},
    shadows: {
      "input-shadow": "0px 4px 15px 0px #B8D2FF",
    },
    components: {
      Heading,
      Text,
      Box,
      Button,
      Input
      },
    })
    

    
    export default theme