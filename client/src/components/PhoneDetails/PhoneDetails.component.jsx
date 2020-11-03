import React from 'react';
import { Panel } from '../Panel';
import { PhoneDetailsWrapper } from './PhoneDetails.styled';
import { Tag } from '../Tag/Tag.component';
import { Price } from '../Price/Price.component';
import { CustomLink } from '../CustomLink';

export const PhoneDetails = ({ phone }) => {
  const {
    name,
    price,
    imageFileName,
    manufacturer,
    processor,
    ram,
    color,
    description,
    screen,
  } = phone;

  return (
    <Panel width={`${500}px`}>
      <PhoneDetailsWrapper>
        <Price price={price} width={`${80}px`} height={`${40}px`} />
        <div className='img-container'>
          <img src={`/images/${imageFileName}`} alt={imageFileName} />
        </div>
        <hr />
        <div className='data-container'>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className='tags-container'>
            <Tag feature={manufacturer} bgColor={'#CA0C00'} />
            <Tag feature={processor} bgColor={'#025E3E'} />
            <Tag feature={ram} bgColor={'#FDCA64'} />
            <Tag feature={color} bgColor={'#C4C4C4'} />
            <Tag feature={screen} bgColor={'#25D99B'} />
          </div>
        </div>
        <CustomLink to={`/`}>Go back</CustomLink>
      </PhoneDetailsWrapper>
    </Panel>
  );
};
