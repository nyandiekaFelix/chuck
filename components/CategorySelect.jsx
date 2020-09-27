import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loader } from './';
import { store } from '../store.js';

const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export default function CategorySelect() { 
  const state = useContext(store);
  const { dispatch, state: { categories } } = state;
  
  const {
    loading,
    error,
    data: { categories: data },
  } = useQuery(GET_CATEGORIES);
  
  useEffect(() => {
    dispatch({ type: 'SET_CATEGORIES', categories: data });
  }, [data]);

  const selectCategory = (ev) => {
    dispatch({ type: 'SELECT_CATEGORY', category: ev.target.value });
  };

  return (
    <>
    {loading && <Loader />}
    {error && (
      <div className="error">
        <span>{`Failed to get categories: ${error.message}`}</span>
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
    {categories && (
      <div className="category-select">
        <div>
          <label for="category-input">Category: </label>
          <select name="category" id="category-input" onChange={selectCategory}>
            {categories.map((category, id) => (
              <option className="name" key={id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <style jsx>
          {`
            .category-select {
              flex: 1;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              height: 40px;
            }
            label {
              font-size: 20px;
              font-weight: 600;
              line-height: 40px;
              height: 40px;
              text-transform: uppercase;
              margin: 0;
            }
            select {
              text-align: left;
              min-width: 200px;
              font-size: 20px;
              cursor: pointer;
              height: 30px;
              text-transform: capitalize;
            }
            @media screen and (max-width: 576px) {
              .category-select {
                margin-top: 40px;
              }
              select {
                max-width: 200px;
              }
            }
          `}
        </style>
      </div>
    )}
    </>
  );
}
