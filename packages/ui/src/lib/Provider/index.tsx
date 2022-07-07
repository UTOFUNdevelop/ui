import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import PropTypes, { InferProps } from "prop-types";
import { I18NProvider } from "../i18n";

const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    support: "#4A4C5B",
    background: "#F3F4F5",
    primary: {
      50: "#CAE8FA",
      100: "#AFDDF7",
      200: "#95D1F5",
      300: "#7AC6F2",
      400: "#60BBEF",
      500: "#44AEED",
      600: "#1E9EE9",
      700: "#1485C7",
      800: "#106B9F",
      900: "#0C5077",
    },
  },
  components: {
    Link: {
      variants: {
        navbar: () => ({
          px: 4,
          py: 2.5,
          _text: { color: "white", textDecorationLine: "none" },
          _hover: { _text: { color: "primary.500" } },
        }),
      },
    },
    Badge: {
      variants: {
        primary: {
          rounded: "lg",
          background: "primary.500",
          flexDirection: "row",
          _text: {
            color: "white",
          },
        },
        featured: {
          rounded: "lg",
          background: "black",
          flexDirection: "row",
          _text: {
            color: "white",
          },
        },
      },
    },
  },
});

const propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func,
};

type ProviderProps = InferProps<typeof propTypes>;

export default function Provider({ children, t }: ProviderProps) {
  return (
    <NativeBaseProvider theme={theme}>
      {/* translation function t must exist because we have default props */}
      <I18NProvider value={t!}>{children}</I18NProvider>
    </NativeBaseProvider>
  );
}

Provider.propTypes = propTypes;

Provider.defaultProps = {
  t: (text: string) => text,
};
