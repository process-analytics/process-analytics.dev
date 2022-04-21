/**
 * Copyright 2022 Bonitasoft S.A.
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

// Material Kit 2 React base styles
import borders from '../../base/borders';
import colors from '../../base/colors';

const { white } = colors;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      color: '#9fc9ff',
      transition: 'all 200ms linear',

      '&.Mui-active': {
        color: white.main,
      },

      '&.Mui-completed': {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: '14%',
      left: '-50%',
      right: '50%',
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: 'currentColor',
      opacity: 0.5,
    },
  },
};
