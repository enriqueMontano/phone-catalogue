import React from 'react';
import { Panel } from '../Panel';
import { PhoneDetailsWrapper } from './PhoneDetails.styled';
import { Tag } from '../Tag/Tag.component';
import { Price } from '../Price/Price.component';
import { CustomLink } from '../CustomLink';
import { theme } from '../../resources/theme';

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
      <PhoneDetailsWrapper theme={theme}>
        <Price price={price} width={`${80}px`} height={`${40}px`} />
        <div className='img-container'>
          <img src={`/images/${imageFileName}`} alt={imageFileName} />
        </div>
        <hr />
        <div className='data-container'>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className='tags-container'>
            <Tag feature={manufacturer} color={theme.secondary.red} />
            <Tag feature={processor} color={theme.secondary.darkGreen} />
            <Tag feature={ram} color={theme.secondary.yellow} />
            <Tag feature={color} color={theme.secondary.gray} />
            <Tag feature={screen} color={theme.secondary.green} />
          </div>
        </div>
        <CustomLink theme={theme} to={`/`}>
          Go back
        </CustomLink>
      </PhoneDetailsWrapper>
    </Panel>
  );
};
