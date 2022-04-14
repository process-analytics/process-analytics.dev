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

// core components
import parallaxStyle from '../../assets/jss/material-kit-react/components/parallaxStyle';

class Parallax extends React.Component {
  constructor(props: ParallaxProps) {
    super(props);
    const windowScrollTop =
      typeof window !== 'undefined' && window.pageYOffset / 3;
    this.state = {
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount(): void {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
    window.addEventListener('scroll', this.resetTransform);
  }
  componentWillUnmount(): void {
    typeof window !== 'undefined' &&
      window.removeEventListener('scroll', this.resetTransform);
  }
  resetTransform(): void {
    const windowScrollTop =
      typeof window !== 'undefined' && window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
  }
  render(): JSX.Element {
    const { classes, filter, className, children, style, image, small } = this
      .props as ParallaxProps;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: 'url(' + image + ')',
          ...this.state,
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

interface ParallaxProps {
  classes: { [key: string]: string };
  className: {
    [key: string]: string;
  };
  filter: boolean;
  children: JSX.Element | JSX.Element[];
  style: string;
  image: string;
  small: boolean;
}

export default withStyles(parallaxStyle)(Parallax);
