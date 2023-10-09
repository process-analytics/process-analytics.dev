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
import { Link } from 'gatsby';

// @mui material components
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import { ArrowForward } from '@mui/icons-material';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../components';

function TransparentBlogCard({
  image,
  title,
  description,
  action,
}: TransparentBlogCardProps): JSX.Element {
  const cardActionStyles = {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',

    '& .material-icons, .material-icons-round,': {
      transform: `translateX(2px)`,
      transition: 'transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)',
    },

    '&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round':
      {
        transform: `translateX(6px)`,
      },
  };

  const imageTemplate = (
    <MKBox2 position="relative" borderRadius="lg">
      <MKBox2
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox2
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: 'scale(0.94)',
          filter: 'blur(12px)',
          backgroundSize: 'cover',
        }}
      />
    </MKBox2>
  );

  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        overflow: 'visible',
      }}
    >
      {action.type === 'internal' ? (
        <Link to={action.route}>{imageTemplate}</Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          {imageTemplate}
        </MuiLink>
      )}

      <MKBox2 pt={2} pb={3}>
        {action.type === 'internal' ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Link to={action.route} sx={cardActionStyles}>
            <MKTypography2 variant="h5" gutterBottom>
              {title}
            </MKTypography2>
          </Link>
        ) : (
          <MuiLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            sx={cardActionStyles}
          >
            <MKTypography2 variant="h5" gutterBottom>
              {title}
            </MKTypography2>
          </MuiLink>
        )}

        <MKTypography2 variant="body2" component="p" color="text" mb={3}>
          {description}
        </MKTypography2>

        {action.type === 'internal' ? (
          <MKTypography2
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}

            <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography2>
        ) : (
          <MKTypography2
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}

            <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography2>
        )}
      </MKBox2>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
interface TransparentBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type?: 'external' | 'internal';
    route: string;
    label: string;
    color:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark'
      | 'text'
      | 'inherit';
  };
}

export default TransparentBlogCard;
