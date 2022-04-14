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
// core components
import typographyStyle from '../../assets/jss/material-kit-react/components/typographyStyle';

const Primary = ({ classes, children }: PrimaryProps): JSX.Element => (
  <div className={classes.defaultFontStyle + ' ' + classes.primaryText}>
    {children}
  </div>
);

interface PrimaryProps {
  classes: { [key: string]: string };
  children: string | JSX.Element | JSX.Element[];
}

export default withStyles(typographyStyle)(Primary);
