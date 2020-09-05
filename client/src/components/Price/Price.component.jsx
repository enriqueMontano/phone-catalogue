import React from 'react';
import { PriceWrapper } from './Price.styled';

export const Price = ({ price }) => {
  return (
    <PriceWrapper>
      {price}
      <span>€</span>
    </PriceWrapper>
  );
};
