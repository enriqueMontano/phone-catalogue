import React from 'react';
import { Panel } from '../Panel';
import { PhoneDetailsWrapper } from './PhoneDetails.styled';

export const PhoneDetails = () => {
  return (
    <PhoneDetailsWrapper>
      <Panel width={`${900}px`} height={`${700}px`} />
    </PhoneDetailsWrapper>
  );
};
