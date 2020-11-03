import styled from 'styled-components';

export const TagWrapper = styled.div`
  min-height: 20px;
  border-radius: 30px;
  padding: 0 10px;
  font-family: Helvetica;
  font-style: italic;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  color: ${({ theme }) => theme.primary.white};
  background-color: ${({ bgColor = '#F0F3F9' }) => bgColor};
  margin: 3px 0 0 3px;

  span {
    font-family: 'Nitty-Medium';
    font-weight: 500;
    margin-left: 2px;
  }
`;
