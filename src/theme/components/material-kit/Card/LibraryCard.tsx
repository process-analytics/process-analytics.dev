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
  CardActions,
  CardContent,
  Chip,
  IconButton,
} from '@mui/material';
import { Action } from '../Navbar/common';
import { getLinkAttributes } from '../../Link';

// Material Kit 2 React components
import { MKBox, MKTypography } from '..';

const CARD_HEIGHT = '200px';
const INFO_CONTAINER_WIDTH = '30px';
const cardMinWidth = '300px';

export const LibraryCard = ({
  title,
  type,
  description,
  actions,
  textAlign = 'center',
}: LibraryCardProps): JSX.Element => (
  <Card
    sx={{
      height: CARD_HEIGHT,
      // minWidth: cardMinWidth,
      overflowWrap: 'break-word',
      overflow: 'hidden',
    }}
  >
    <MKBox display="flex" height="100%" p={3}>
      <CardContent>
        <MKBox textAlign={textAlign}>
          <MKBox>
            <MKTypography
              display="inline"
              variant="h5"
              textTransform="capitalize"
              fontWeight="regular"
              textOverflow="ellipsis"
            >
              {title}
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography
              display="inline"
              variant="h6"
              textTransform="capitalize"
              fontWeight="bold"
              color="spicy"
            >
              {type}
            </MKTypography>
            {/* <Chip label={type} size="small" color="spicy" />*/}
          </MKBox>

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
        </MKBox>
      </CardContent>
      <CardActions disableSpacing={true} sx={{ pl: 3 }}>
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="start"
          // justifyContent="space-evenly"
          height="100%"
        >
          {actions.map((action, i) => (
            <IconButton
              key={i}
              size="medium"
              color={action.color ?? 'secondary'}
              {...getLinkAttributes(action)}
              sx={{
                textTransform: 'none',
                // mb: 2,
                //fontSize: 40
              }}
              aria-label="add an alarm"
            >
              {action.label}
            </IconButton>
          ))}
        </MKBox>
      </CardActions>
    </MKBox>

    {/*      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>*/}
  </Card>
);

type LibraryCardProps = {
  title: string;
  description: string;
  actions: Omit<Action, 'variant'>[];
  type: string;
  textAlign?: 'center' | 'left' | 'right';
};
