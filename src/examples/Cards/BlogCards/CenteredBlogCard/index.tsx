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
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox2, MKTypography2, MKButton } from '../../../../components';

import React from 'react';

function CenteredBlogCard({
  image,
  title,
  description,
  action,
}: CenteredBlogCardProps): JSX.Element {
  return (
    <Card>
      <MKBox2 position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox2
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
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

      <MKBox2 p={3} mt={-1} textAlign="center">
        <MKTypography2
          display="inline"
          variant="h5"
          textTransform="capitalize"
          fontWeight="regular"
        >
          {title}
        </MKTypography2>

        <MKBox2 mt={1} mb={3}>
          <MKTypography2 variant="body2" component="p" color="text">
            {description}
          </MKTypography2>
        </MKBox2>

        {action.type === 'external' ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ?? 'secondary'}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ?? 'secondary'}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox2>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
interface CenteredBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: 'external' | 'internal';
    route: string;
    color?: PaletteColorKey | 'white';
    label: string;
  };
}

export default CenteredBlogCard;
