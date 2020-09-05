import styled from 'styled-components';

export const PhoneCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 60% 1% 25% 14%;
  min-width: 100%;
  min-height: 100%;

  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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

  .name-paragraph {
    font-family: Helvetica;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0f1c51;
  }
`;
