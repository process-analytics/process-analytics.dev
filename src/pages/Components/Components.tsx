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
// react components for routing our app without refresh
import { Link } from 'gatsby';
import { withStyles } from '@mui/styles';
// @mui/icons-material
// core components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Parallax from '../../components/Parallax/Parallax';
// sections for this page
import HeaderLinks from '../../components/Header/HeaderLinks';
import SectionBasics from './Sections/SectionBasics';
import SectionNavbars from './Sections/SectionNavbars';
import SectionTabs from './Sections/SectionTabs';
import SectionPills from './Sections/SectionPills';
import SectionNotifications from './Sections/SectionNotifications';
import SectionTypography from './Sections/SectionTypography';
import SectionJavascript from './Sections/SectionJavascript';
import SectionCarousel from './Sections/SectionCarousel';
import SectionCompletedExamples from './Sections/SectionCompletedExamples';
import SectionLogin from './Sections/SectionLogin';
import SectionExamples from './Sections/SectionExamples';
import SectionDownload from './Sections/SectionDownload';

import componentsStyle from '../../assets/jss/material-kit-react/views/components';

import Img from '../../assets/img/bg4.jpg';

const Components = ({ classes, ...rest }: any): JSX.Element => {
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={Img}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/LoginPage'} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(componentsStyle)(Components);
