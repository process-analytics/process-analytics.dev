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

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';

// @mui material components
import { Button, Card, CardActionArea, CardMedia } from '@mui/material';
import { Action } from '../Navbar/common';
import { getLinkAttributes } from '../../Link';

// Material Kit 2 React components
import { MKBox, MKTypography } from '..';

const cardMinWidth = '350px';
export const BlogCard = ({
  image,
  title,
  description,
  action,
  textAlign = 'center',
}: BlogCardProps): JSX.Element => (
  <Card
    sx={{
      height: '388px',
      //    minWidth: cardMinWidth,
      overflowWrap: 'break-word',
      overflow: 'visible',
      marginTop: '24px',
    }}
  >
    <CardActionArea>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        {/*          <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
          />*/}
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          height="170px"
          position="relative"
          zIndex={1}
          sx={{
            objectFit: 'cover',
          }}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="170px"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: 'scale(0.94)',
            filter: 'blur(12px)',
            backgroundSize: 'cover',
            objectFit: 'cover',
          }}
        />
      </MKBox>

      <MKBox
        p={3}
        // mt={-1}
        textAlign={textAlign}
        height="242px"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        <MKTypography
          display="inline"
          variant="h5"
          textTransform="capitalize"
          fontWeight="regular"
          textOverflow="ellipsis"
        >
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography
            variant="body2"
            component="p"
            color="text"
            textOverflow="ellipsis"
          >
            {description}
          </MKTypography>
        </MKBox>
        <Button
          variant={action.variant ?? 'contained'}
          size="small"
          color={action.color ?? 'secondary'}
          {...getLinkAttributes(action)}
          sx={{ textTransform: 'none' }}
        >
          {action.label}
        </Button>
        {'Time to read'}
        Posted on 28 February
        {/* `${Math.ceil(time)} min read`*/}
      </MKBox>
    </CardActionArea>
  </Card>
);

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  action: Action;
  textAlign?: 'center' | 'left' | 'right';
}
