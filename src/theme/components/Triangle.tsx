/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Colors } from '@rebass/preset';
import styled from 'styled-components';

type ResponsiveProp<T> = T[];

type Props = {
  color: keyof Colors;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  width: ResponsiveProp<string>;
  height: ResponsiveProp<string>;
};

const Triangle = styled.div<Props>`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${({ theme, color, height, width, position = 'top-left' }) => {
    const [y, x] = position.split('-');

    return `
      border-${y}: ${height[0]} solid ${theme.colors[color]};
      ${y}: 0;

      border-${invertX(x)}: ${width[0]} solid transparent;
      ${x}: 0;
      
    `;
  }}

  @media only screen and (min-width: 768px) {
    ${({ height, width, position = 'top-left' }) => {
      const [y, x] = position.split('-');

      return `
        border-${y}-width: ${height[1]};
        border-${invertX(x)}-width: ${width[1]};
      `;
    }}
  }
`;

const invertX = (x: string): string => (x === 'right' ? 'left' : 'right');

export default Triangle;
