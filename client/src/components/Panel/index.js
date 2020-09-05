import styled from 'styled-components';

export const Panel = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  border-radius: 6px;
  padding: 10px;
  display: grid;
  position: relative;
  align-self: center;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;
