import styled from 'styled-components';

export const PhoneDetailsWrapper = styled.div`
  display: grid;
  min-width: 100%;
  min-height: 100%;
  font-family: Helvetica;
  color: ${({ theme }) => theme.primary.blue};

  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  p {
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  .img-container {
    display: grid;
    justify-items: center;
  }

  .img-container {
    display: grid;
    justify-items: center;
  }

  .tags-container {
    margin-bottom: 10px;
  }
`;
