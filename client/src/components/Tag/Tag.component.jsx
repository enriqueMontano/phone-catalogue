import React from 'react';
import { TagWrapper } from './Tag.styled';

export const Tag = ({ feature, color }) => {
  console.log(feature);
  return typeof feature !== 'number' ? (
    <TagWrapper
      style={{
        backgroundColor: color,
      }}
      className='tag-wrapper'
    >
      {feature}
    </TagWrapper>
  ) : (
    <TagWrapper
      style={{
        backgroundColor: color,
      }}
      className='tag-wrapper'
    >
      {feature}
      <span>GB</span>
    </TagWrapper>
  );
};
