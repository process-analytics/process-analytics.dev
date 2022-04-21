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
import { Property } from 'csstype';

const cardStyle = {
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: '100%',
    boxShadow:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    position: 'relative' as Property.Position,
    display: 'flex',
    flexDirection: 'column' as Property.FlexDirection,
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'all 300ms linear',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardCarousel: {
    overflow: 'hidden',
  },
};

export default cardStyle;
