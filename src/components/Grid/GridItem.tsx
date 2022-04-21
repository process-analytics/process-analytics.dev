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
import { Property } from 'csstype';
import React from 'react';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const style = {
  grid: {
    position: 'relative' as Property.Position,
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

const GridItem = ({
  classes,
  children,
  className,
  ...rest
}: any): JSX.Element => (
  <Grid item {...rest} className={classes.grid + ' ' + className}>
    {children}
  </Grid>
);

export default withStyles(style)(GridItem);
