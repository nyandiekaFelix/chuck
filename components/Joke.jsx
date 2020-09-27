import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CategorySelect, JokeItem } from './';


export default function Joke() {
  const [selectedCategory, setSelectedCategory] = useState('animal');

  return (
    <div className="generator">
      <div>
        <CategorySelect onCategorySelected={setSelectedCategory} />
      </div>
      <div>
        {selectedCategory && (
          <JokeItem category={selectedCategory} />
        )}
      </div>
      <style jsx>
        {`
        .generator {
          border-radius: 5px;
          margin-top: 40px;
        }
        .generator > div {
          position: relative;
          min-height: 100px;
        }
        @media screen and (max-width: 576px) {
          .generator {
            flex-direction: column;
            text-align: center;
          }
          .generator > div{
            flex: 0 0 100%;
          }
        }
      `}
      </style>
    </div>
  );
}
