import React from 'react';
import { PriceWrapper } from './Price.styled';
import { theme } from '../../resources/theme';

export const Price = ({ price }) => (
  <PriceWrapper theme={theme}>
    {price}
    <span>€</span>
  </PriceWrapper>
);
