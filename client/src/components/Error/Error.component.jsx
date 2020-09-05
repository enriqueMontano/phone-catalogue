import React from 'react';
import { ErrorWrapper } from './Error.styled';

export const Error = ({ icon, text }) => (
  <ErrorWrapper>
    <div className='icon-container'>{icon}</div>
    <div className='text-container'>{text}</div>
  </ErrorWrapper>
);
