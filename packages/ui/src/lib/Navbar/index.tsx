import { Image, Box, HamburgerIcon, HStack, IconButton } from "native-base";
import PropTypes, { InferProps } from "prop-types";
import React, { useReducer } from "react";
import MenuItem, { menuItemPropTypes } from "./MenuItem";

const not = (x: boolean) => !x;

const navbarPropTypes = {
  items: PropTypes.arrayOf(PropTypes.exact(menuItemPropTypes)).isRequired,
  _image: PropTypes.exact({
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

type NavbarProps = InferProps<typeof navbarPropTypes>;

const style = {
  navbar: {
    height: {
      base: 13,
      md: 18,
    },
    px: {
      base: 4,
      md: 7,
    },
  },
  logo: {
    // use pixel here because the logo may be cropped using size in theme
    width: {
      base: "101px",
      md: "144px",
    },
    height: {
      base: "35px",
      md: "50px",
    },
  },
  flexOnBaseScreen: {
    display: {
      base: "flex",
      md: "none",
    },
  },
  flexOnMdScreen: {
    display: {
      base: "none",
      md: "flex",
    },
  },
};

export default function Navbar({ items, _image }: NavbarProps) {
  const [isMenuOpen, toggleMenu] = useReducer(not, false);

  const menu = items.map((props: any) => (
    <MenuItem key={props.name} name={props.name} href={props.href} />
  ));

  return (
    <Box width="100%" position="fixed" left="0" top="0" backgroundColor="black">
      <HStack alignItems="center" justifyContent="end" {...style.navbar}>
        <Image
          marginRight="auto"
          src="https://utofun.com/static/img/logo-light-blue.png"
          // @ts-ignore
          href="/"
          {...style.logo}
          {..._image}
        />
        <HStack {...style.flexOnMdScreen}>{menu}</HStack>
        <IconButton
          backgroundColor="primary.500"
          width="10"
          height="8"
          borderRadius="md"
          onPress={toggleMenu}
          icon={<HamburgerIcon size="5" color="white" />}
          {...style.flexOnBaseScreen}
        />
      </HStack>
      {isMenuOpen && (
        <Box
          borderTopWidth={1}
          borderTopColor="background"
          py="2"
          {...style.flexOnBaseScreen}
        >
          {menu}
        </Box>
      )}
    </Box>
  );
}

Navbar.propTypes = navbarPropTypes;
