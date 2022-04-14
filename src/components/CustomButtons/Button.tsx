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
import Button from '@mui/material/Button';

// core components

import buttonStyle from '../../assets/jss/material-kit-react/components/buttonStyle';

const RegularButton = ({ ...props }: RegularButtonProps): JSX.Element => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [className]: className,
  });
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
};

interface RegularButtonProps {
  children: JSX.Element | JSX.Element[];
  classes: {
    [key: string]: string;
  };
  className: {
    [key: string]: string;
  };
  color:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'facebook'
    | 'twitter'
    | 'google'
    | 'github'
    | 'transparent';
  size: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default withStyles(buttonStyle)(RegularButton);
