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
import Link from '@mui/material/Link';
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

// Material Kit 2 React components
import { MKBox2, MKButton, MKTypography2 } from '../../../../components';

// Images
import bgImage from '../../../../assets/images/shapes/waves-white.svg';

function Download(): JSX.Element {
  return (
    <MKBox2 component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox2
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: 'hidden' }}
      >
        <MKBox2
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />

        <Container sx={{ position: 'relative', zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <MKTypography2 variant="h3" color="white">
              Do you love this awesome UI Kit for ReactJS & MUI?
            </MKTypography2>

            <MKTypography2 variant="body2" color="white" mb={6}>
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the Design System in
              HTML. Start a new project or give an old Bootstrap project a new
              look!
            </MKTypography2>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component={Link}
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download now
            </MKButton>
          </Grid>
        </Container>
      </MKBox2>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox2 textAlign="center">
            <MKTypography2 variant="h3" mt={6} mb={3}>
              Available on these technologies
            </MKTypography2>

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox2
                    component={Link}
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <MKBox2
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox2
                    opacity={0.5}
                    component={Link}
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <MKBox2
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox2
                    opacity={0.5}
                    component={Link}
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <MKBox2
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox2
                    opacity={0.5}
                    component={Link}
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <MKBox2
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox2
                    component={Link}
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox2
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox2
                    opacity={0.5}
                    component={Link}
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <MKBox2
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </MKBox2>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox2>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default Download;
