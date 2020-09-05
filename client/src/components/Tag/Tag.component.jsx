import React from 'react';
import { TagWrapper } from './Tag.styled';
import { theme } from '../../resources/theme';

export const Tag = ({ feature, color }) =>
  typeof feature !== 'number' ? (
    <TagWrapper theme={theme} color={color}>
      {feature}
    </TagWrapper>
  ) : (
    <TagWrapper theme={theme} color={color}>
      {feature}
      <span>GB</span>
    </TagWrapper>
  );
