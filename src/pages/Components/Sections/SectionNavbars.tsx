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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Search from '@mui/icons-material/Search';
import Email from '@mui/icons-material/Email';
import Face from '@mui/icons-material/Face';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Explore from '@mui/icons-material/Explore';
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Header from '../../../components/Header/Header';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown';
import Button from '../../../components/CustomButtons/Button';

import navbarsStyle from '../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle';

import image from '../../../assets/img/bg.jpg';
import profileImage from '../../../assets/img/faces/avatar.jpg';

const SectionNavbars = (classes: any): JSX.Element => (
  <div className={classes.section}>
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.title}>
            <h3>Menu</h3>
          </div>
          <Header
            brand="Menu"
            color="primary"
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    buttonText="Dropdown"
                    dropdownHeader="Dropdown Header"
                    buttonProps={{
                      className: classes.navLink,
                      color: 'transparent',
                    }}
                    dropdownList={[
                      'Action',
                      'Another action',
                      'Something else here',
                      { divider: true },
                      'Separated link',
                      { divider: true },
                      'One more separated link',
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.title}>
            <h3>Menu with Icons</h3>
          </div>
          <Header
            brand="Icons"
            color="info"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <Email className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <Face className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    hoverColor="info"
                    dropdownHeader="Dropdown Header"
                    buttonIcon="settings"
                    buttonProps={{
                      className: classes.navLink,
                      color: 'transparent',
                    }}
                    dropdownList={[
                      'Action',
                      'Another action',
                      'Something else here',
                      { divider: true },
                      'Separated link',
                      { divider: true },
                      'One more separated link',
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
        </GridItem>
      </GridContainer>
      <div className={classes.title}>
        <h3>Navigation</h3>
      </div>
    </div>
    <div id="navbar" className={classes.navbar}>
      <div
        className={classes.navigation}
        style={{ backgroundImage: 'url(' + image + ')' }}
      >
        <Header
          brand="Brand"
          color="rose"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
              </ListItem>
            </List>
          }
          rightLinks={
            <div>
              <CustomInput
                white
                inputRootCustomClasses={classes.inputRootCustomClasses}
                formControlProps={{
                  className: classes.formControl,
                }}
                inputProps={{
                  placeholder: 'Search',
                  inputProps: {
                    'aria-label': 'Search',
                    className: classes.searchInput,
                  },
                }}
              />
              <Button justIcon round color="white">
                <Search className={classes.searchIcon} />
              </Button>
            </div>
          }
        />
        <Header
          brand="Info Color"
          color="info"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink + ' ' + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Settings
                </Button>
              </ListItem>
            </List>
          }
        />
        <Header
          brand="Primary Color"
          color="primary"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink + ' ' + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <Explore className={classes.icons} /> Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <AccountCircle className={classes.icons} /> Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <Icon className={classes.icons}>settings</Icon> Settings
                </Button>
              </ListItem>
            </List>
          }
        />
        <Header
          brand="Navbar with notifications"
          color="dark"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Wishlist
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  justIcon
                  round
                  href="#pablo"
                  className={classes.notificationNavLink}
                  onClick={e => e.preventDefault()}
                  color="rose"
                >
                  <Email className={classes.icons} />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  left
                  caret={false}
                  hoverColor="black"
                  dropdownHeader="Dropdown Header"
                  buttonText={
                    <img
                      src={profileImage}
                      className={classes.img}
                      alt="profile"
                    />
                  }
                  buttonProps={{
                    className:
                      classes.navLink + ' ' + classes.imageDropdownButton,
                    color: 'transparent',
                  }}
                  dropdownList={['Me', 'Settings and other stuff', 'Sign out']}
                />
              </ListItem>
            </List>
          }
        />
        <Header
          brand="Navbar with profile"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Wishlist
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.registerNavLink}
                  onClick={e => e.preventDefault()}
                  color="rose"
                  round
                >
                  Register
                </Button>
              </ListItem>
            </List>
          }
        />
        <Header
          brand="Transparent"
          color="transparent"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={classes.navLink + ' ' + classes.socialIconsButton}
                >
                  <FaTwitter className={classes.marginRight5} /> Twitter
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={classes.navLink + ' ' + classes.socialIconsButton}
                >
                  <FaFacebook className={classes.marginRight5} /> Facebook
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={classes.navLink + ' ' + classes.socialIconsButton}
                >
                  <FaInstagram className={classes.marginRight5} /> Instagram
                </Button>
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  </div>
);

export default withStyles(navbarsStyle)(SectionNavbars);
