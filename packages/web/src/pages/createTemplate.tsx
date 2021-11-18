import React from "react";

export default function createTemplate(Component: React.ComponentType) {
  return function Template(args: {}) {
    // Isolate eslint-disable-next-line to a single place
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...args} />;
  };
}
