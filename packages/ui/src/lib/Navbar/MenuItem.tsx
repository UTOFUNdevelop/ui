import { Box, Link } from "native-base";
import PropTypes, { InferProps } from "prop-types";
import React from "react";

export const propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

type MenuItemProps = InferProps<typeof propTypes>;

export default function MenuItem({ name, href }: MenuItemProps) {
  return (
    <Box alignItems="flex-start">
      <Link
        href={href}
        // @ts-ignore
        // "variant" prop works on Link component, but somehow TypeScript doesn't recognize it.
        // There might be some bugs in the NativeBase type definition,
        // so we temporarily disable type checking for this prop.
        variant="navbar"
      >
        {name}
      </Link>
    </Box>
  );
}

MenuItem.propTypes = propTypes;
