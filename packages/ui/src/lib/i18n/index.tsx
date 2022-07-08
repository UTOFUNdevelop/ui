import React, { useContext } from "react";
import fp from "lodash/fp";
import PropTypes, { InferProps } from "prop-types";

export const propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func,
};

type Props = InferProps<typeof propTypes>;

const I18NContext = React.createContext({});

export const useTranslation = fp.memoize(() => ({
  t: useContext(I18NContext),
}));

export function I18NProvider({ children, t }: Props) {
  return (
    // translation function "t" must exist because we have default props
    <I18NContext.Provider value={t!}>{children}</I18NContext.Provider>
  );
}

I18NProvider.defaultProps = {
  t: (text: string) => text,
};
