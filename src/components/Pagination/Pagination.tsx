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

import paginationStyle from '../../assets/jss/material-kit-react/components/paginationStyle';

const Pagination = ({
  classes,
  pages,
  color,
}: PaginationProps): JSX.Element => {
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              /* eslint-disable no-console */
              <Button
                onClick={() => console.log("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
              /* eslint-enable no-console */
            )}
          </li>
        );
      })}
    </ul>
  );
};

Pagination.defaultProps = {
  color: 'primary',
};

interface PageProps {
  active?: boolean;
  disabled?: boolean;
  text: number | 'PREV' | 'NEXT' | '...';
  onClick?: () => void;
}

interface PaginationProps {
  children: JSX.Element | JSX.Element[];
  classes: { [key: string]: string };
  pages: PageProps[];
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

export default withStyles(paginationStyle)(Pagination);
