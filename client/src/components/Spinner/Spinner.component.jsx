import React from 'react';
import { SpinnerWrapper } from './Spinner.styled';
import PropagateLoader from 'react-spinners/PropagateLoader';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <PropagateLoader />
    </SpinnerWrapper>
  );
};
