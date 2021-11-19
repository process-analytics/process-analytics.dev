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
import { Card as CardRebass } from 'rebass/styled-components';

type CardContainerProps = {
  minWidth: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ minWidth }) => minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: 'background',
  boxShadow: 0,
})`
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;
