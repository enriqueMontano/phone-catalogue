import React from 'react';
import { Panel } from '../Panel';
import { PhoneDetailsWrapper } from './PhoneDetails.styled';
import { theme } from '../../resources/theme';

export const PhoneDetails = ({
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) => (
  <PhoneDetailsWrapper theme={theme}>
    <Panel width={`${600}px`} height={`${400}px`} />
  </PhoneDetailsWrapper>
);
