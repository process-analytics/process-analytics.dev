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
import { container, title } from '../../../material-kit-react';

const basicsStyle = {
  sections: {
    padding: '70px 0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  space50: {
    height: '50px',
    display: 'block',
  },
  space70: {
    height: '70px',
    display: 'block',
  },
  icons: {
    width: '17px',
    height: '17px',
    color: '#FFFFFF',
  },
};

export default basicsStyle;
