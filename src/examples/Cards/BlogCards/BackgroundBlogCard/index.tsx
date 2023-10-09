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
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import { ArrowForward } from '@mui/icons-material';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../components';

import React from 'react';
import { Link } from 'gatsby';
import { fontSize, linearGradient, rgba } from '../../../../assets/theme';

function BackgroundBlogCard({
  image,
  title,
  description,
  action,
}: BackgroundBlogCardProps): JSX.Element {
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

  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { common } }) =>
          `${linearGradient(
            rgba(common.black, 0.5),
            rgba(common.black, 0.5),
          )}, url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <MKBox2 p={3}>
        <MKBox2 minHeight="20.625rem" my="auto" py={3}>
          <MKTypography2
            variant="h2"
            color="white"
            mb={1}
            sx={({ breakpoints }) => ({
              [breakpoints.down('md')]: {
                fontSize: fontSize['3xl'],
              },
            })}
          >
            {title}
          </MKTypography2>
          <MKTypography2 variant="body2" color="white" my={3}>
            {description}
          </MKTypography2>
          {action.type === 'internal' ? (
            <MKTypography2
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color="white"
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
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <ArrowForward sx={{ fontWeight: 'bold' }} />
            </MKTypography2>
          )}
        </MKBox2>
      </MKBox2>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
interface BackgroundBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: 'external' | 'internal';
    route: string;
    label: string;
  };
}

export default BackgroundBlogCard;
