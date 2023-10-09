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
import React from 'react';

// @mui material components
import Icon from '@mui/material/Icon';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { PaletteColorKey, Theme } from '@mui/material';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../components';
import { linearGradient, rgba } from '../../../assets/theme';
function RotatingCardFront({
  color,
  image,
  icon,
  title,
  description,
}: RotatingCardFrontProps): JSX.Element {
  return (
    <MKBox2
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      shadowColor={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ palette }: Theme) => {
          return `${linearGradient(
            rgba(
              color && palette[color]
                ? palette[color].main
                : (palette.info as SimplePaletteColorOptions)?.main,
              0.85,
            ),
            rgba(
              color && palette[color]
                ? palette[color].main
                : (palette.info as SimplePaletteColorOptions)?.main,
              0.85,
            ),
          )}, url(${image})`;
        },
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden',
      }}
    >
      <MKBox2 py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <MKTypography2 variant="h2" color="white" my={2}>
            {typeof icon === 'string' ? <Icon>{icon}</Icon> : icon}
          </MKTypography2>
        )}

        <MKTypography2 variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography2>

        <MKTypography2 variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography2>
      </MKBox2>
    </MKBox2>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: 'info',
  icon: '',
};

// Typechecking props for the RotatingCardFront
interface RotatingCardFrontProps {
  color?: PaletteColorKey;
  image: string;
  icon?: JSX.Element;
  title: JSX.Element | string;
  description: string;
}

export default RotatingCardFront;
