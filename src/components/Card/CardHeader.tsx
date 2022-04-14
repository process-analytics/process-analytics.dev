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
// @mui/icons-material

// core components
import cardHeaderStyle from '../../assets/jss/material-kit-react/components/cardHeaderStyle';

const CardHeader = ({ ...props }: CardHeaderProps): JSX.Element => {
  const { classes, className, children, color, plain, ...rest } = props;

  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: JSX.Element | JSX.Element[];
  classes: { [key: string]: string };
  className?: {
    [key: string]: string;
  };
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary';
  plain?: boolean;
}

export default withStyles(cardHeaderStyle)(CardHeader);
