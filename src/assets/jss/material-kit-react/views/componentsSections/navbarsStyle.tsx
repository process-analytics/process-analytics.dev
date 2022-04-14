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
import { container, title } from '../../../material-kit-react';
import headerLinksStyle from '../../components/headerLinksStyle';

const navbarsStyle = (theme: any): any => ({
  section: {
    padding: '70px 0',
    paddingTop: '0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  navbar: {
    marginBottom: '-20px',
    zIndex: '100',
    position: 'relative',
    overflow: 'hidden',
    '& header': {
      borderRadius: '0',
    },
  },
  navigation: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    marginTop: '0',
    minHeight: '740px',
  },
  formControl: {
    margin: '0 !important',
    paddingTop: '0',
  },
  inputRootCustomClasses: {
    margin: '0!important',
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: 'inherit',
  },
  ...headerLinksStyle(theme),
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  imageDropdownButton: {
    padding: '0px',
    top: '4px',
    borderRadius: '50%',
    marginLeft: '5px',
  },
});

export default navbarsStyle;
