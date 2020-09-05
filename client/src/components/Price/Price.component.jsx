import React from 'react';
import { PriceWrapper } from './Price.styled';
import { theme } from '../../resources/theme';

export const Price = ({ price, width, height }) => (
  <PriceWrapper theme={theme} width={width} height={height}>
    {price}
    <span>€</span>
  </PriceWrapper>
);
