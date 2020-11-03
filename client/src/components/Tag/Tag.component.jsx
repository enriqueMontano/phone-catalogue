import React from 'react';
import { TagWrapper } from './Tag.styled';

export const Tag = ({ feature, bgColor }) =>
  typeof feature !== 'number' ? (
    <TagWrapper bgColor={bgColor}>{feature}</TagWrapper>
  ) : (
    <TagWrapper bgColor={bgColor}>
      {feature}
      <span>GB</span>
    </TagWrapper>
  );
