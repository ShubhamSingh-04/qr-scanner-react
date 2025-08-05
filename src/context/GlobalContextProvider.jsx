import { Children, createContext } from "react";
import React, { useState } from 'react';

const globalContext = createContext();


export default function GlobalContextProvider({ children }) {
  const [ipAddress, setIpAddress] = useState('10.176.106.132');
  const [port, setPort] = useState('5000')

  return (
    <globalContext.Provider value={{ipAddress, setIpAddress, port, setPort}}>
      {children}
    </globalContext.Provider>
  );
}