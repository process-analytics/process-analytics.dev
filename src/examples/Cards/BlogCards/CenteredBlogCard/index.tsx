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
import { Link } from 'gatsby';

// Material Kit 2 React components
import { MKBox } from '../../../../components/MKBox';
import { MKTypography } from '../../../../components/MKTypography';
import MKButton from '../../../../components/MKButton';

import React from 'react';

function CenteredBlogCard({
  image,
  title,
  description,
  action,
}: CenteredBlogCardProps): JSX.Element {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
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
      </MKBox>

      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography
          display="inline"
          variant="h5"
          textTransform="capitalize"
          fontWeight="regular"
        >
          {title}
        </MKTypography>

        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>

        {action.type === 'external' ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : 'dark'}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : 'dark'}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
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
    color?:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark';
    label: string;
  };
}

export default CenteredBlogCard;
