import moment from 'moment';
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [currentSelected, setCurrentSelected] = useState('todo');
  const value = {
    currentSelected,
    setCurrentSelected,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
