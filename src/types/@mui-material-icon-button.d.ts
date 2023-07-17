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

import type {} from '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    primary: true;
    secondary: true;
    error: true;
    warning: true;
    info: true;
    success: true;
    tertiary: true;
    quaternary: true;
    primaryLight: true;
    secondaryLight: true;
    spicy: true;
    sweet: true;
    manufacture: true;
    education: true;
    telecom: true;
    financial: true;
    energy: true;
    health: true;
    government: true;
    distribution: true;
  }
}
