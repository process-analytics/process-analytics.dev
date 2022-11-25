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
import React, { useState } from 'react';

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

const NavPills = ({
  classes,
  tabs,
  direction,
  color,
  horizontal,
  alignCenter,
  active: initActive,
}: React.PropsWithChildren<NavPillsProps>): JSX.Element => {
  const [active, setActive] = useState<undefined | number>(initActive);
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
      value={active}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(event: any, active: number): void => setActive(active)}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        const icon = {};
        if (prop.tabIcon) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
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
            iconPosition="start"
            disableRipple={true}
            disableFocusRipple={true}
            classes={{
              root: pillsClasses,
              labelIcon: classes.labelContainer,
              textColorInherit: classes.label,
              textColorPrimary: classes.label,
              textColorSecondary: classes.label,
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
        index={active}
        onChangeIndex={(index: number): void => setActive(index)}
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
};

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
  classes: { [key: string]: string };
  // index of the default active pill
  active?: number;
  tabs: TabProps[];
  color: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  direction: string;
  horizontal: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tabsGrid: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contentGrid: any;
  };
  alignCenter: boolean;
}

export default withStyles(navPillsStyle)(NavPills);
