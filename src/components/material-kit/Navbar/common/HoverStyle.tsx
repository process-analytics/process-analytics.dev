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
import { Palette, PaletteColorKey, SocialPalette } from '@mui/material';
import { SxProps } from '@mui/system/styleFunctionSx';

export type HoverStyle = {
  backgroundColor: PaletteColorKey;
  color: PaletteColorKey;
  borderRadius: string;
};
export const getHoverConfiguration = (
  palette: Palette & SocialPalette,
  hoverStyle: HoverStyle,
): SxProps => ({
  '*:hover': {
    //fontWeight: 'bold',
    color: palette[hoverStyle.color].main,
    backgroundColor: palette[hoverStyle.backgroundColor].main,
    borderRadius: hoverStyle.borderRadius,
  },
});
