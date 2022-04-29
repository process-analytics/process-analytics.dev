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
const simpleAlertsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../../../../components/MKBox";
import MKAlert from "../../../../../../components/MKAlert";

function SimpleAlerts() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="primary">A simple primary alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="secondary">A simple secondary alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="success">A simple success alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="error">A simple error alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="warning">A simple warning alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="info">A simple info alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">A simple light alert—check it out!</MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="dark">A simple dark alert—check it out!</MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SimpleAlerts;`;

export default simpleAlertsCode;
