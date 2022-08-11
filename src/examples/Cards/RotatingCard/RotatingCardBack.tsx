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

import { Theme } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

// @mui material components
import MuiLink from '@mui/material/Link';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';
import { MKTypography } from '../../../components/MKTypography';
import MKButton from '../../../components/MKButton';

function RotatingCard({
  color,
  image,
  title,
  description,
  action,
}: RotatingCardProps): JSX.Element {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      shadowColor={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({
          palette: { gradient },
          functions: { linearGradient, rgba },
        }: Theme) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const gradientColor = gradient[color];
          return `${linearGradient(
            rgba(
              gradientColor
                ? gradientColor.main
                : (gradient.info as SimplePaletteColorOptions)?.main,
              0.85,
            ),
            rgba(
              gradientColor
                ? gradientColor.main
                : (gradient.info as SimplePaletteColorOptions)?.main,
              0.85,
            ),
          )}, url(${image})`;
        },
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>

        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>

        {action && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === 'external' ? (
              <MKButton
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton
                component={Link}
                to={action.route}
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCard
RotatingCard.defaultProps = {
  color: 'info',
};

// Typechecking props for the RotatingCard
interface RotatingCardProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  image: string;
  title: string;
  description: string;
  action: {
    type: 'external' | 'internal';
    route: string;
    label: string;
  };
}

export default RotatingCard;
