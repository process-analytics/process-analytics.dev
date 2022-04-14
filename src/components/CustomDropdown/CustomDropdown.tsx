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
// nodejs library that concatenates classes
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Popper from '@mui/material/Popper';

// core components
import Button from '../CustomButtons/Button';

import customDropdownStyle from '../../assets/jss/material-kit-react/components/customDropdownStyle';

class CustomDropdown extends React.Component {
  constructor(props: CustomDropdownProps) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick = (): void => {
    this.setState(state => ({ open: !state.open }));
  };
  handleClose = (param): void => {
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  };
  handleCloseAway = (event): void => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render(): JSX.Element {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding,
    } = this.props;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: open,
      [classes.caretRTL]: rtlActive,
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive,
    });
    let icon = null;
    switch (typeof buttonIcon) {
      case 'function':
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case 'string':
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left
                ? 'top-start'
                : 'top'
              : left
              ? 'bottom-start'
              : 'bottom'
          }
          className={classNames({
            [classes.popperClose]: !open,
            [classes.popperResponsive]: true,
          })}
        >
          {() => (
            <Grow
              in={open}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => this.handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => this.handleClose('divider')}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => this.handleClose(prop)}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary',
};

interface CustomDropdownProps {
  children?: JSX.Element | JSX.Element[];
  classes?: { [key: string]: string };
  hoverColor:
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose';
  buttonText?: JSX.Element;
  buttonIcon?: () => void | string;
  dropdownList?: string[];
  buttonProps?: { [key: string]: any };
  dropup?: boolean;
  dropdownHeader?: JSX.Element;
  rtlActive?: boolean;
  caret: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  // function that returns the selected item
  onClick?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
}

export default withStyles(customDropdownStyle)(CustomDropdown);
