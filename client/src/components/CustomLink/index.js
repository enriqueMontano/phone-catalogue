import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  display: grid;
  justify-self: right;
  align-self: end;
  min-height: 40px;
  min-width: 97px;
  border-radius: 2px;

  text-decoration: none;
  text-align: center;
  align-items: center;
  font-family: 'Helvetica';
  background-color: #246cf0;
  color: #ffffff;
  font-size: 15px;

  &:hover {
    background-color: rgba(36, 108, 240, 0.8);
  }

  &:active {
    background: #f0f3f9;
    border: 1px solid #246cf0;
    box-sizing: border-box;
    border-radius: 2px;
    color: #246cf0;
  }
`;
