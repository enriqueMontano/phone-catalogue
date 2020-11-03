import React from 'react';
import { PriceWrapper } from './Price.styled';

export const Price = ({ price, width, height }) => (
  <PriceWrapper width={width} height={height}>
    {price}
    <span>€</span>
  </PriceWrapper>
);
