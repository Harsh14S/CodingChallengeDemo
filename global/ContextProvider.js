import moment from 'moment';
import React, {useState, createContext} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [currentSelected, setCurrentSelected] = useState('todo');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const value = {
    currentSelected,
    setCurrentSelected,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
