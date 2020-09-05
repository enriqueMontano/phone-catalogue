import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { SpinnerWrapper } from './Spinner.styled';
import { theme } from '../../resources/theme';

export const Spinner = () => (
  <SpinnerWrapper theme={theme}>
    <PropagateLoader />
  </SpinnerWrapper>
);
