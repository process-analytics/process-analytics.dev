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

// @mui material components
import { styled } from '@mui/material/styles';
import { CustomTypography } from '../../assets/theme/base/typography';
import { Colors } from '../../assets/theme/base/colors';
import { CustomTheme } from '../../assets/theme';

export default styled('span')(({ theme }: { theme: CustomTheme }) => {
  const { palette, typography, functions } = theme as CustomTheme;

  const { white } = palette as unknown as Colors;
  const { size, fontWeightMedium } = typography as CustomTypography;
  const { pxToRem } = functions;

  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: 'pointer',
    lineHeight: 0,
  };
});
