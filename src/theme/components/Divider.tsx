import styled from 'styled-components';
import { Theme } from '../types';

const Divider = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  &:before {
    content: '';
    position: absolute;
    left: 35%;
    right: 35%;
    height: 2px;
    background-image: linear-gradient(
      to right,
      transparent,
      ${props => (props.theme as Theme).colors.primary},
      transparent
    );
  }
`;

export default Divider;
