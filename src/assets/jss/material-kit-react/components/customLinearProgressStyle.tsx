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
} from '../../material-kit-react';

const customLinearProgressStyle = {
  root: {
    height: '4px',
    marginBottom: '20px',
    overflow: 'hidden',
  },
  bar: {
    height: '4px',
  },
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: grayColor,
  },
  primaryBackground: {
    background: 'rgba(156, 39, 176, 0.2)',
  },
  warningBackground: {
    background: 'rgba(255, 152, 0, 0.2)',
  },
  dangerBackground: {
    background: 'rgba(244, 67, 54, 0.2)',
  },
  successBackground: {
    background: 'rgba(76, 175, 80, 0.2)',
  },
  infoBackground: {
    background: 'rgba(0, 188, 212, 0.2)',
  },
  roseBackground: {
    background: 'rgba(233, 30, 99, 0.2)',
  },
  grayBackground: {
    background: 'rgba(221, 221, 221, 0.2)',
  },
};

export default customLinearProgressStyle;
