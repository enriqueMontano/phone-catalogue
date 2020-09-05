import React from 'react';
import { PhonesListWrapper } from './PhonesList.styled';
import { PhoneCard } from '../PhoneCard/PhoneCard.component';

export const PhonesList = ({ phonesList = [] }) => {
  return (
    <PhonesListWrapper>
      {phonesList.map((phone) => (
        <PhoneCard key={phone.id} {...phone} />
      ))}
    </PhonesListWrapper>
  );
};
