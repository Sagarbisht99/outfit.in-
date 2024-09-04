import React, { createContext, useContext, useState } from "react";

export const SidebarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handlerClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SidebarContext);
};
