/**
 * Copyright 2023 Bonitasoft S.A.
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

/**
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import React, { Dispatch, SetStateAction } from 'react';

import { Close, Menu } from '@mui/icons-material';

import { MKBox } from '../..';

export const NavbarButton = ({
  mobileNavbar,
  setMobileNavbar,
}: {
  mobileNavbar: boolean;
  setMobileNavbar: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <MKBox
      display={{ xs: 'inline-block', lg: 'none' }}
      lineHeight={0}
      py={1.5}
      pl={1.5}
      sx={{ cursor: 'pointer' }}
      onClick={(): void => setMobileNavbar(!mobileNavbar)}
    >
      {mobileNavbar ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
    </MKBox>
  );
};
