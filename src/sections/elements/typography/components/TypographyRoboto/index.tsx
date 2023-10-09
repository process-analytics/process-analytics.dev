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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../../components';

function Typography(): JSX.Element {
  return (
    <MKBox2 component="section" py={8}>
      <Container>
        <MKTypography2 variant="h2" mb={6}>
          Typography - Font Family Roboto
        </MKTypography2>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 1
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h1">H1 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 2
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h2">H2 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 3
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h3">H3 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 4
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h4">H4 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 5
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h5">H5 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heading 6
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="h6">H6 Material Kit</MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Lead Text
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="body1" color="text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&apos;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at.
            </MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Paragraph
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography2 variant="body2" color="text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&apos;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at.
            </MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Small
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <MKTypography2 variant="button" color="text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&apos;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at.
            </MKTypography2>
          </Grid>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography2
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Tiny
            </MKTypography2>
          </Grid>

          <Grid item xs={12} sm={9} lineHeight={1}>
            <MKTypography2 variant="caption" color="text">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&apos;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at.
            </MKTypography2>
          </Grid>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default Typography;
