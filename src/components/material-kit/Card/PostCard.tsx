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
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

// Material Kit 2 React components
import { MKBox } from '..';
import Grid from '@mui/material/Grid';

const Image = (props: { src: string; alt: string }): JSX.Element => (
  <MKBox position="relative" borderRadius="lg" mx={2} mt={-3} height="170px">
    <MKBox
      component="img"
      src={props.src}
      alt={props.alt}
      borderRadius="lg"
      width="100%"
      height="100%"
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
      height="100%"
      position="absolute"
      left={0}
      top={0}
      sx={{
        backgroundImage: `url(${props.src})`,
        transform: 'scale(0.94)',
        filter: 'blur(12px)',
        backgroundSize: 'cover',
        objectFit: 'cover',
      }}
    />
  </MKBox>
);

export const PostCard = ({
  image,
  title,
  description,
  postedOn,
  timeToRead,
  url,
  textAlign = 'center',
}: BlogCardProps): JSX.Element => (
  <Card
    sx={{
      overflow: 'visible',
      marginTop: '24px', // for the image outside the card
      height: '100%', // to have card with same size
    }}
  >
    <CardActionArea href={url} target="_blank" sx={{ height: '100%' }}>
      <Grid
        container
        flexDirection="column"
        flex={1}
        alignItems={'stretch'}
        height="100%"
      >
        <Image src={image} alt={title} />

        <CardContent sx={{ marginBottom: 'auto', pb: 0, px: 3 }}>
          <MKBox p={1} textAlign={textAlign}>
            <Typography
              display="inline"
              variant="h5"
              textTransform="capitalize"
              fontWeight="regular"
            >
              {title}
            </Typography>
            <MKBox mt={1}>
              <Typography variant="overline" color="spicy" fontWeight="bold">
                {`${Math.ceil(timeToRead)} min read`}
              </Typography>
            </MKBox>
            <MKBox mt={1} mb={3}>
              <Typography variant="body2" component="p" color="text">
                {description}
              </Typography>
            </MKBox>
          </MKBox>
        </CardContent>

        <CardActions
          disableSpacing={true}
          sx={{ pt: 0, pb: 3, px: 3, justifyContent: 'end' }}
        >
          <Typography variant="caption">Posted on {postedOn}</Typography>
        </CardActions>
      </Grid>
    </CardActionArea>
  </Card>
);

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  postedOn: string;
  timeToRead: number;
  url: string;
  textAlign?: 'center' | 'left' | 'right';
}
