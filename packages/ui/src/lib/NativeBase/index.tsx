import { Box, NativeBaseProvider } from "native-base";
import PropTypes, { InferProps } from "prop-types";
import React from "react";

const nativeBasePropTypes = {
  children: PropTypes.node.isRequired,
};
type NativeBaseProps = InferProps<typeof nativeBasePropTypes>;
export default function NativeBase({ children }: NativeBaseProps) {
  return (
    <NativeBaseProvider>
      <Box>{children}</Box>
    </NativeBaseProvider>
  );
}
NativeBase.propTypes = nativeBasePropTypes;
