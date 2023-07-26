/**
 * Copyright 2021 Bonitasoft S.A.
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
import styled from 'styled-components';

import { MEDIA_QUERY_MEDIUM } from '../../helper';
import colors from '../../assets/oldTheme/colors.json';

interface OverlayProps {
  open: boolean;
  submitted: boolean;
}
export const Overlay = styled.div`
  width: ${(props: OverlayProps) => (props.open ? '100vw' : '0%')};
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  opacity: ${(props: OverlayProps) => (props.open ? 0.7 : 0)};
  background: #000;
  ${(props: OverlayProps) => props.open && 'z-index: 900'};

  transition: ${(props: OverlayProps) =>
    props.open
      ? 'background 1s, opacity 0.4s, width 0s'
      : 'background 1s, opacity 0.4s, width 0s 0.4s'};

  ${(props: OverlayProps) =>
    props.open &&
    props.submitted &&
    `background: ${colors.primary};
    opacity: 0.9;
    transition: background 0.6s, opacity 0.4s;`};

  ${MEDIA_QUERY_MEDIUM} {
    display: none;
    transition: none;
  }
`;
