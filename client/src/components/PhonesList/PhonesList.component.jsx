import React from 'react';
import { PhonesListWrapper } from './PhonesList.styled';
import { PhoneCard } from '../PhoneCard/PhoneCard.component';
import { Spinner } from '../Spinner/Spinner.component';

export const PhonesList = ({ pending, phonesList = [] }) => {
  return (
    <PhonesListWrapper>
      {console.log(pending)}
      {pending ? (
        <Spinner />
      ) : (
        phonesList.map((phone) => <PhoneCard key={phone.id} {...phone} />)
      )}
    </PhonesListWrapper>
  );
};
