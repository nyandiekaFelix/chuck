import React, { createContext, useReducer } from 'react';
import { useQuery } from '@apollo/react-hooks';

const initialState = {
  loading: false,
  error: false,
  joke: '',
  categories: [],
  selectedCategory: 'animal'
};

export const store = createContext(initialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
 
    switch(action.type) {
      case 'SET_CATEGORIES':       
        newState = { ...state, categories: action.categories };
        return newState;
      case 'SELECT_CATEGORY':
        newState = { ...state, selectedCategory: action.category };
        return newState;
      case 'SET_JOKE':
        newState = { ...state, joke: action.joke };
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
