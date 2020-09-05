import styled from 'styled-components';

export const PhonesListWrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 10px;
  row-gap: 15px;
  justify-items: center;

  @media (max-width: 1669px) {
    margin-top: 40px;
  }
`;
