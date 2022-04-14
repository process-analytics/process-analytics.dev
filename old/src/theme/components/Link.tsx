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

type Props = {
  selected?: boolean;
  href?: string;
  onClick?: () => void;
};

const Link = styled.a<Props>`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  font-weight: 600;
  ${({ selected, theme }) =>
    selected && `border-bottom:  5px solid ${theme.colors.primary}`};
  transition: 0.4s;
  cursor: ${({ onClick, href }) => (onClick || href ? 'pointer' : 'default')};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${({ theme }) => theme.colors.secondary};
    height: 5px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const LinkInButton = styled.a`
  text-decoration: none;
  display: block;
  padding: '8px 16px';
  font-weight: 600;
  color: inherit;
`;

export { Link, LinkInButton };
