import React from 'react';
import { PhonesListWrapper } from './PhonesList.styled';
import { PhoneCard } from '../PhoneCard/PhoneCard.component';
import { Spinner } from '../Spinner/Spinner.component';
import { Error } from '../Error/Error.component';
import { ReactComponent as ErrorIcon } from '../../resources/svg/error.svg';

export const PhonesList = ({ error, pending, phonesList = [], action }) => {
  return (
    <PhonesListWrapper>
      {error === undefined ? (
        <Error icon={<ErrorIcon />} text='Parece ser que ha habido un error' />
      ) : pending ? (
        <Spinner />
      ) : (
        phonesList.map((phone) => (
          <PhoneCard key={phone.id} {...phone} action={action} />
        ))
      )}
    </PhonesListWrapper>
  );
};
