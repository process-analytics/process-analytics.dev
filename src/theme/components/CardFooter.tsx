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
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

type Props = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  round?: boolean;
};

const CardFooter = styled(Box)<Props>`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ position = 'top-left', round }) => {
    const [y, x] = position.split('-');

    return `
      ${x}: 0;
      ${y}: 0;

      padding-${x === 'left' ? 'right' : 'left'}: ${BORDER_SPACING};
      clip-path: ${BORDER_PATH_MAP[position]};
      border-radius: ${round ? BORDER_RADIUS_MAP[position] : 0};
  `;
  }}
`;

const BORDER_SPACING = '20px';
const BORDER_RADIUS = '8px';

const BORDER_PATH_MAP = {
  'top-left': `polygon(0 0%, 100% 0%, calc(100% - ${BORDER_SPACING}) 100%, 0% 100%);`,
  'top-right': `polygon(0 0%, 100% 0%, 100% 100%, ${BORDER_SPACING} 100%);`,
  'bottom-right': `polygon(${BORDER_SPACING} 0%, 100% 0%, 100% 100%, 0% 100%);`,
  'bottom-left': `polygon(0 0%, calc(100% - ${BORDER_SPACING}) 0%, 100% 100%, 0% 100%);`,
};

const BORDER_RADIUS_MAP = {
  'top-left': `${BORDER_RADIUS} 0 0 0`,
  'top-right': `0 ${BORDER_RADIUS} 0 0`,
  'bottom-right': `0 0 ${BORDER_RADIUS} 0`,
  'bottom-left': `0 0 0 ${BORDER_RADIUS}`,
};

export default CardFooter;
