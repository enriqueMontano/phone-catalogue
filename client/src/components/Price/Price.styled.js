import styled from 'styled-components';

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  background: #fdca64;
  background-size: contain;
  background-position: center;
  font-family: Helvetica;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  color: #0f1c51;
  padding: 10px;

  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
`;
