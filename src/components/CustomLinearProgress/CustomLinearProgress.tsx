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
import React from 'react';

import { withStyles } from '@mui/styles';
import LinearProgress from '@mui/material/LinearProgress';
// core components
import customLinearProgressStyle from '../../assets/jss/material-kit-react/components/customLinearProgressStyle';

const CustomLinearProgress = ({
  classes,
  color,
  ...rest
}: CustomLinearProgressProps): JSX.Element => (
  <LinearProgress
    {...rest}
    classes={{
      root: classes.root + ' ' + classes[color + 'Background'],
      bar: classes.bar + ' ' + classes[color],
    }}
  />
);

CustomLinearProgress.defaultProps = {
  color: 'gray',
};

interface CustomLinearProgressProps {
  classes: { [key: string]: string };
  color:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
}

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
