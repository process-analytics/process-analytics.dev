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
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
// @mui/icons-material
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Close from '@mui/icons-material/Close';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Button from '../../../components/CustomButtons/Button';
import javascriptStyles from '../../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles';

function Transition(props: any): JSX.Element {
  return <Slide direction="down" {...props} />;
}

class SectionJavascript extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props: any) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false,
    };
  }
  handleClickOpen(modal: any): void {
    const x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal: any): void {
    const x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state: any): void {
    this.setState({
      [state]: false,
    });
  }
  handleClickButton(state: any): void {
    this.setState({
      [state]: true,
    });
  }
  render(): JSX.Element {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Javascript components</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Modal</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                  <Button
                    color="primary"
                    block
                    onClick={() => this.handleClickOpen('classicModal')}
                  >
                    <LibraryBooks className={classes.icon} />
                    Classic
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal,
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose('classicModal')}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose('classicModal')}
                        size="large"
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button color="transparent" simple>
                        Nice Button
                      </Button>
                      <Button
                        onClick={() => this.handleClose('classicModal')}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Popovers</h3>
              </div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node;
                }}
                onClick={() => this.handleClickButton('openLeft')}
              >
                On left
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openLeft}
                anchorEl={this.anchorElLeft}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openLeft')}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton('openTop')}
              >
                On top
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openTop')}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node;
                }}
                onClick={() => this.handleClickButton('openBottom')}
              >
                On bottom
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openBottom}
                anchorEl={this.anchorElBottom}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openBottom')}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node;
                }}
                onClick={() => this.handleClickButton('openRight')}
              >
                On right
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openRight}
                anchorEl={this.anchorElRight}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openRight')}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <br />
              <br />
              <div className={classes.title}>
                <h3>Tooltips</h3>
              </div>
              <Tooltip
                id="tooltip-left"
                title="Tooltip on left"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On left</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Tooltip on top"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On top</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-bottom"
                title="Tooltip on bottom"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On bottom</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-right"
                title="Tooltip on right"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On right</Button>
              </Tooltip>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Carousel</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);
