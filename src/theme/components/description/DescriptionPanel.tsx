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
import React from 'react';

import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../../utils/constants';
import { Image, ImagePosition } from '../../types';

import { Divider } from '..';
import ImagePanel from './ImagePanel';
import MDXPanel from './MDXPanel';

export type AboutSubSectionProps = {
  mdx: JSX.Element;
  image?: Image;
  withSeparator?: boolean;
};

type PanelProps = AboutSubSectionProps & { index: number };

export const DescriptionPanel = ({
  index,
  mdx,
  image,
  withSeparator = false,
}: PanelProps): JSX.Element => {
  if (image && !image.positionFromMdx) {
    image.positionFromMdx = Boolean(index % 2) ? 'left' : 'right';
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isFullPage = !image || isVerticalSubSection(image.positionFromMdx!);
  const imageIsOnLeftOrOnRight =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    image && isImageOnLeftOrOnRight(image.positionFromMdx!);

  return (
    <>
      <SubSection
        key={index}
        withSeparator={withSeparator}
        marginTop={['10px', '10px', '30px']}
        pt={['1em', '1em', '1.5em']}
        flexDirection={
          isFullPage
            ? imageIsOnLeftOrOnRight
              ? 'column'
              : 'column-reverse'
            : imageIsOnLeftOrOnRight
            ? 'row'
            : 'row-reverse'
        }
      >
        <>
          {image && <ImagePanel image={image} isFullPage={isFullPage} />}
          <MDXPanel mdx={mdx} isFullPage={isFullPage} />
        </>
      </SubSection>
      {withSeparator && <Divider />}
    </>
  );
};

type SubSectionProps = {
  withSeparator: boolean;
};
const SubSection = styled(Flex)<SubSectionProps>`
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: ${({ withSeparator }) => (withSeparator ? '30px' : '0px')};

  ${MEDIA_QUERY_MEDIUM} {
    margin-bottom: ${({ withSeparator }) => (withSeparator ? '10px' : '0px')};
  }
  ${MEDIA_QUERY_SMALL} {
    margin-bottom: ${({ withSeparator }) => (withSeparator ? '10px' : '0px')};
  }

  &:first-of-type {
    margin-top: 0px;
  }
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

function isVerticalSubSection(imagePosition: ImagePosition): boolean {
  return imagePosition === 'top' || imagePosition === 'bottom';
}

function isImageOnLeftOrOnRight(imagePosition: ImagePosition): boolean {
  return imagePosition === 'left' || imagePosition === 'top';
}
