import { createContext, useEffect, useState } from "react";
import { LAT, LNG } from "../utils/constants";

export const locationContext = createContext();


export const locationProvider = ({ children }) => {
    
    

  <locationContext.Provider>{children}</locationContext.Provider>;
};
