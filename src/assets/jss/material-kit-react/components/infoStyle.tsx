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
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from '../../material-kit-react';

const infoStyle = {
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px',
  },
  iconWrapper: {
    float: 'left',
    marginTop: '24px',
    marginRight: '10px',
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  icon: {
    width: '36px',
    height: '36px',
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: 'hidden',
  },
  title,
  description: {
    color: grayColor,
    overflow: 'hidden',
    marginTop: '0px',
    fontSize: '14px',
  },
  iconWrapperVertical: {
    float: 'none',
  },
  iconVertical: {
    width: '61px',
    height: '61px',
  },
};

export default infoStyle;
