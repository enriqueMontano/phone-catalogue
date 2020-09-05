import React from 'react';
import { Panel } from '../Panel';
import { Tag } from '../Tag/Tag.component';
import { Price } from '../Price/Price.component';
import { CustomLink } from '../CustomLink';
import { PhoneCardWrapper } from './PhoneCard.styled';
import { theme } from '../../resources/theme';

export const PhoneCard = ({
  name,
  manufacturer,
  processor,
  ram,
  price,
  imageFileName,
}) => (
  <Panel width={`${175}px`} height={`${350}px`}>
    <PhoneCardWrapper theme={theme}>
      <Price price={price} />
      <div className='img-container'>
        <img src={`/images/${imageFileName}`} alt={imageFileName} />
      </div>
      <hr />
      <div className='data-container'>
        <p className='name-paragraph'>{name}</p>
        <div className='tags-container'>
          <Tag feature={manufacturer} color={theme.secondary.red} />
          <Tag feature={processor} color={theme.secondary.darkGreen} />
          <Tag feature={ram} color={theme.primary.blue} />
        </div>
      </div>
      <CustomLink theme={theme} to={`${name}/detail/`}>
        View More
      </CustomLink>
    </PhoneCardWrapper>
  </Panel>
);
