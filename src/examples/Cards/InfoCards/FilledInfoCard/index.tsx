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
import { ArrowForward } from '@mui/icons-material';
import MuiLink from '@mui/material/Link';
import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../components';

function FilledInfoCard({
  variant,
  color,
  icon,
  title,
  description,
  action,
}: FilledInfoCardProps): JSX.Element {
  const buttonStyles = {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',

    '& .material-icons-round': {
      fontSize: '1.125rem',
      transform: `translateX(3px)`,
      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
    },

    '&:hover .material-icons-round, &:focus .material-icons-round': {
      transform: `translateX(6px)`,
    },
  };

  let iconColor: string | undefined = color;

  if (variant === 'gradient' && color !== 'light') {
    iconColor = 'white';
  } else if (variant === 'gradient' && color === 'light') {
    iconColor = 'dark';
  }

  return (
    <MKBox2
      display={{ xs: 'block', md: 'flex' }}
      variant={variant}
      bgColor={variant === 'contained' ? 'grey-100' : color}
      borderRadius="xl"
      pt={3.5}
      pb={3}
      px={3}
    >
      {iconColor && (
        <MKTypography2
          display="block"
          variant="h3"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          color={iconColor}
          textGradient={variant === 'contained'}
          mt={-0.625}
        >
          {typeof icon === 'string' ? <Icon>{icon}</Icon> : icon}
        </MKTypography2>
      )}
      <MKBox2 pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <MKTypography2
          display="block"
          variant="h5"
          color={
            variant === 'contained' || color === 'light' ? 'dark' : 'white'
          }
          fontWeight="bold"
          mb={1}
        >
          {title}
        </MKTypography2>
        <MKTypography2
          display="block"
          variant="body2"
          color={
            variant === 'contained' || color === 'light' ? 'text' : 'white'
          }
          mb={2}
        >
          {description}
        </MKTypography2>

        {action && typeof action !== 'boolean' && action.type === 'external' ? (
          <MKTypography2
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={variant === 'contained' ? color : 'white'}
            sx={buttonStyles}
          >
            {action.label} <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography2>
        ) : null}

        {action && typeof action !== 'boolean' && action.type === 'internal' ? (
          <MKTypography2
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={variant === 'contained' ? color : 'white'}
            sx={buttonStyles}
          >
            {action.label} <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography2>
        ) : null}
      </MKBox2>
    </MKBox2>
  );
}

// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
  variant: 'contained',
  color: 'info',
  action: false,
};

// Typechecking props for the FilledInfoCard
interface FilledInfoCardProps {
  variant?: 'gradient' | 'contained';
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  icon: JSX.Element | string;
  title: string;
  description: string;
  action?:
    | boolean
    | {
        type: 'external' | 'internal';
        route: string;
        label: string;
      };
}

export default FilledInfoCard;
