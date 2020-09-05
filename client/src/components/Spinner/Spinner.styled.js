import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  size: 25;
  color: ${({ theme }) => theme.primary.blue};
`;
