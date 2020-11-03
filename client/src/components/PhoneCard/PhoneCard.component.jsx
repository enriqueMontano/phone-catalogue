import React from 'react';
import { Panel } from '../Panel';
import { Tag } from '../Tag/Tag.component';
import { Price } from '../Price/Price.component';
import { CustomLink } from '../CustomLink';
import { PhoneCardWrapper } from './PhoneCard.styled';

export const PhoneCard = ({
  id,
  name,
  manufacturer,
  processor,
  ram,
  price,
  imageFileName,
  action,
}) => (
  <Panel width={`${175}px`} height={`${350}px`}>
    <PhoneCardWrapper>
      <Price price={price} />
      <div className='img-container'>
        <img src={`/images/${imageFileName}`} alt={imageFileName} />
      </div>
      <hr />
      <div className='data-container'>
        <p className='name-paragraph'>{name}</p>
        <div className='tags-container'>
          <Tag feature={manufacturer} secondary bgColor={'#CA0C00'} />
          <Tag feature={processor} secondary bgColor={'#025E3E'} />
          <Tag feature={ram} primary bgColor={'#0F1C51'} />
        </div>
      </div>
      <CustomLink to={`${name}/detail/`} onClick={() => action(id)}>
        View More
      </CustomLink>
    </PhoneCardWrapper>
  </Panel>
);
