import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loader } from './';
import { store } from '../store.js'


const FETCH_JOKE = gql`
  query Joke($category: String) {
    random(category: $category) {
      value
    }
  }
`;

export default function JokeItem() {
  const state = useContext(store);
  const { dispatch, state: { joke, selectedCategory } } = state;
   
  const {
    loading,
    error,
    data: { random },
    refetch
  } = useQuery(FETCH_JOKE, { variables: { category: selectedCategory } });
  
  useEffect(() => {
    random && dispatch({ type: 'SET_JOKE', joke: random.value });
  }, [random]);
   
  return (
    <>
    {error && (
      <div className="error">
        <span>{`Failed to get joke: ${error.message}`}</span>
        <style jsx>
          {`
            .error { 
              color: red;
              width: 100%; 
            }
          `}
        </style>
      </div>
    )}
    {joke && (
      <div className="result">
        <p>{joke}</p>
        <button type="button" onClick={() => refetch()}>New Joke</button>
        <style jsx>
          {`
          .result {
            background: var(--bg);
            padding-bottom: 40px;
          }
          p {
            font-size: 20px;
            font-weight: 300;
            text-align: left;
            margin: 40px 0;
            max-width: 400px;
          }
          button {
            min-width: 200px;
            margin: 50px 0;
            display: block;
            font-size: 20px;
            font-weight: 600;
            height: 40px;
            text-transform: uppercase;
            border: 1px solid #000;
            border-radius: 5px;
          }
          button:hover {
            color: #fff;
            background: #000;
            cursor: pointer;
          }
        `}
        </style>
      </div>
    )}
    </>
  );
}
