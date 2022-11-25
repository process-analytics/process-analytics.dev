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
const tooltipsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import { MKBox }  from "../../../../../../components/MKBox";
import { MKButton }  from "../../../../../../components/MKButton";

function Tooltips() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Tooltip on top" placement="top">
              <MKButton variant="gradient" color="info">
                tooltip on top
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <MKButton variant="gradient" color="info">
                tooltip on right
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <MKButton variant="gradient" color="info">
                tooltip on bottom
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <MKButton variant="gradient" color="info">
                tooltip on left
              </MKButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tooltips;`;

export default tooltipsCode;