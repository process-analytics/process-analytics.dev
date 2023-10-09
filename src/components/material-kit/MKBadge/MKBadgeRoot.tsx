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

import { PaletteColorKey } from '@mui/material';
// @mui material components
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import {
  borders,
  fontSize,
  fontWeight,
  linearGradient,
} from '../../../assets/theme';

interface MKBadgeRootProps {
  ownerState: {
    color: PaletteColorKey | 'white';
    circular: boolean;
    border: boolean;
    size: string;
    indicator: boolean;
    variant: 'gradient' | 'contained';
    container: boolean;
  };
}

export const MKBadgeRoot = styled(Badge)<PropsWithChildren<MKBadgeRootProps>>(({
  theme,
  ownerState,
  children,
}) => {
  const { palette } = theme;
  const { color, circular, border, size, indicator, variant, container } =
    ownerState;

  const { grey } = palette;

  // padding values
  const paddings = {
    xs: '0.45em 0.775em',
    sm: '0.55em 0.9em',
    md: '0.65em 1em',
    lg: '0.85em 1.375em',
  };

  // fontSize value
  const fontSizeValue = size === 'xs' ? fontSize.xxs : fontSize.xs;

  // border value
  const borderValue = border ? `${borders.width.lg} solid white` : 'none';

  // borderRadius value
  const borderRadiusValue = circular
    ? borders.radius.section
    : borders.radius.lg;

  // styles for the badge with indicator={true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const indicatorStyles = (): any => {
    let widthValue = '1.25rem';
    let heightValue = '1.25rem';

    if (size === 'medium') {
      widthValue = '1.5rem';
      heightValue = '1.5rem';
    } else if (size === 'large') {
      widthValue = '2rem';
      heightValue = '2rem';
    }

    return {
      width: widthValue,
      height: heightValue,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      borderRadius: '50%',
      padding: 0,
      border: borderValue,
    };
  };

  // styles for the badge with variant="gradient"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gradientStyles = (colorProp: 'white' | PaletteColorKey): any => {
    return {
      background:
        colorProp === 'white'
          ? colorProp
          : linearGradient(palette[colorProp].main, palette[colorProp].dark),
      color: colorProp === 'white' ? grey?.A700 : 'white',
    };
  };

  // styles for the badge with variant="contained"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containedStyles = (colorProp: 'white' | PaletteColorKey): any => {
    let backgroundValue =
      colorProp === 'white'
        ? colorProp
        : palette[colorProp]
        ? palette[colorProp].dark
        : palette.info.main;
    let colorValue =
      colorProp === 'white'
        ? colorProp
        : palette[colorProp]
        ? palette[colorProp].contrastText
        : palette.info.contrastText;

    if (colorProp === 'white') {
      backgroundValue = 'white';
      colorValue = grey?.A700;
    }

    return {
      background: backgroundValue,
      color: colorValue,
    };
  };

  // styles for the badge with no children and container={false}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const standAloneStyles = (): any => ({
    position: 'static',
    marginLeft: '0.5rem',
    transform: 'none',
    fontSize: '0.563rem',
  });

  // styles for the badge with container={true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerStyles = (): any => ({
    position: 'relative',
    transform: 'none',
  });

  return {
    '& .MuiBadge-badge': {
      height: 'auto',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      padding: paddings[size] || paddings.xs,
      fontSize: fontSizeValue,
      fontWeight: fontWeight.bold,
      textTransform: 'uppercase',
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      border: borderValue,
      borderRadius: borderRadiusValue,
      ...(indicator && indicatorStyles()),
      ...(variant === 'gradient' && gradientStyles(color)),
      ...(variant === 'contained' && containedStyles(color)),
      ...(!children && !container && standAloneStyles()),
      ...(container && containerStyles()),
    },
  };
});
