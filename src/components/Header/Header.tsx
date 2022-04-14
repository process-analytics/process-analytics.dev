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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
// @mui/icons-material
import Menu from '@mui/icons-material/Menu';
// core components
import headerStyle from '../../assets/jss/material-kit-react/components/headerStyle';

class Header extends React.Component {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle(): void {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount(): void {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange);
    }
  }
  headerColorChange(): void {
    const { classes, color, changeColorOnScroll } = this.props as HeaderProps;
    const windowsScrollTop =
      typeof window !== 'undefined' && window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount(): void {
    if (this.props.changeColorOnScroll) {
      typeof window !== 'undefined' &&
        window.removeEventListener('scroll', this.headerColorChange);
    }
  }
  render(): JSX.Element {
    const { classes, color, rightLinks, leftLinks, brand, fixed, absolute } =
      this.props as HeaderProps;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    });
    const brandComponent = <Button className={classes.title}>{brand}</Button>;
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden xlDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden xlDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              size="large"
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'right'}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: 'white',
};

interface HeaderProps {
  classes: { [key: string]: string };
  color:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'transparent'
    | 'white'
    | 'rose'
    | 'dark';
  rightLinks: JSX.Element;
  leftLinks: JSX.Element;
  brand: string;
  fixed: boolean;
  absolute: boolean;
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: {
    height: number;
    color:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'transparent'
      | 'white'
      | 'rose'
      | 'dark';
  };
}

export default withStyles(headerStyle)(Header);
