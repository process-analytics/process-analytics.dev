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
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// core components
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import navPillsStyle from '../../assets/jss/material-kit-react/components/navPillsStyle';

class NavPills extends React.Component {
  constructor(props: NavPillsProps) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  handleChange = (event: any, active: any): void => {
    this.setState({ active });
  };
  handleChangeIndex = (index: any): void => {
    this.setState({ active: index });
  };
  render(): JSX.Element {
    const { classes, tabs, direction, color, horizontal, alignCenter } = this
      .props as NavPillsProps;
    const flexContainerClasses = classNames({
      [classes.flexContainer]: true,
      [classes.horizontalDisplay]: horizontal !== undefined,
    });
    const tabButtons = (
      <Tabs
        classes={{
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses,
          indicator: classes.displayNone,
        }}
        value={this.state.active}
        onChange={this.handleChange}
        centered={alignCenter}
      >
        {tabs.map((prop, key) => {
          const icon = {};
          if (prop.tabIcon !== undefined) {
            icon['icon'] = <prop.tabIcon className={classes.tabIcon} />;
          }
          const pillsClasses = classNames({
            [classes.pills]: true,
            [classes.horizontalPills]: horizontal !== undefined,
            [classes.pillsWithIcons]: prop.tabIcon !== undefined,
          });
          return (
            <Tab
              label={prop.tabButton}
              key={key}
              {...icon}
              classes={{
                root: pillsClasses,
                labelContainer: classes.labelContainer,
                label: classes.label,
                selected: classes[color],
              }}
            />
          );
        })}
      </Tabs>
    );
    const tabContent = (
      <div className={classes.contentWrapper}>
        <SwipeableViews
          axis={direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabs.map((prop, key) => {
            return (
              <div className={classes.tabContent} key={key}>
                {prop.tabContent}
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );
    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    );
  }
}

NavPills.defaultProps = {
  active: 0,
  color: 'primary',
};

interface TabProps {
  tabButton: string;
  tabIcon: () => JSX.Element;
  tabContent: JSX.Element;
}

interface NavPillsProps {
  children: JSX.Element | JSX.Element[];
  classes: { [key: string]: string };
  // index of the default active pill
  active: number;
  tabs: TabProps[];
  color: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  direction: string;
  horizontal: {
    tabsGrid: any;
    contentGrid: any;
  };
  alignCenter: boolean;
}

export default withStyles(navPillsStyle)(NavPills);
