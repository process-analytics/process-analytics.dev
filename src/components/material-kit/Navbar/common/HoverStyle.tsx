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
import { Palette, PaletteColorKey, SocialPalette, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx';

export type HoverStyle = {
  backgroundColor?: PaletteColorKey;
  color?: PaletteColorKey;
  borderRadius?: string;
};
export const getHoverConfiguration = (
  palette: Palette & SocialPalette,
  hoverStyle: HoverStyle,
): SystemStyleObject<Theme> => ({
  '*:hover': {
    //fontWeight: 'bold',
    color: hoverStyle.color ? palette[hoverStyle.color].main : 'inherit',
    backgroundColor: hoverStyle.backgroundColor
      ? palette[hoverStyle.backgroundColor].main
      : 'inherit',
    borderRadius: hoverStyle.borderRadius ?? 'inherit',
  },
});
