import React, { useContext } from "react";

const I18NContext = React.createContext({});

export const useTranslation = () => useContext(I18NContext);

export const I18NProvider = I18NContext.Provider;
