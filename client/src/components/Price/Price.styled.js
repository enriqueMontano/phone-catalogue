import styled from 'styled-components';

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;

  width: ${({ width }) => (width ? width : `${40}px`)};
  height: ${({ height }) => (height ? height : `${20}px`)};

  border-radius: 50%;
  background: ${({ theme }) => theme.secondary.yellow};
  background-size: contain;
  background-position: center;
  font-family: Helvetica;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary.blue};
  padding: 10px;

  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
`;
