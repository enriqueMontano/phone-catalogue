import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => (
  <SpinnerWrapper>
    <PropagateLoader />
  </SpinnerWrapper>
);
