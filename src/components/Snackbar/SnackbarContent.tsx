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
import Snack from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Close from '@mui/icons-material/Close';

import snackbarContentStyle from '../../assets/jss/material-kit-react/components/snackbarContentStyle';

class SnackbarContent extends React.Component {
  constructor(props: SnackbarContentProps) {
    super(props);
    this.closeAlert = this.closeAlert.bind(this);
    const { classes, message, color, close, icon } = props;
    let action = [];
    if (close !== undefined) {
      action = [
        <IconButton
          className={classes.iconButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.closeAlert}
          size="large"
        >
          <Close className={classes.close} />
        </IconButton>,
      ];
    }

    let snackIcon = null;
    switch (typeof icon) {
      case 'function':
        snackIcon = <props.icon className={classes.icon} />;
        break;
      case 'string':
        snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
        break;
      default:
        snackIcon = null;
        break;
    }

    this.state = {
      alert: (
        <Snack
          message={
            <div>
              {snackIcon}
              {message}
              {close !== undefined ? action : null}
            </div>
          }
          classes={{
            root: classes.root + ' ' + classes[color],
            message: classes.message + ' ' + classes.container,
          }}
        />
      ),
    };
  }
  closeAlert(): void {
    this.setState({ alert: null });
  }
  render(): JSX.Element {
    return this.state.alert;
  }
}

interface SnackbarContentProps {
  classes: { [key: string]: string };
  message: JSX.Element;
  color: 'info' | 'success' | 'warning' | 'danger' | 'primary';
  close: boolean;
  icon: () => void | string;
}

export default withStyles(snackbarContentStyle)(SnackbarContent);
