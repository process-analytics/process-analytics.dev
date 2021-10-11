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
import { Flex } from 'rebass/styled-components';
import React from 'react';
import { Image as ImageType, ImagePosition } from '../../types';
import Divider from './../Divider';
import ImagePanel from './ImagePanel';
import MDXPanel from './MDXPanel';

type PanelProps = {
  index: number;
  mdx: JSX.Element;
  image?: ImageType;
  withSeparator?: boolean;
};

const DescriptionPanel = ({
  index,
  mdx,
  image,
  withSeparator = true,
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
      <Flex
        key={index}
        mt={['10px', '10px', '30px']}
        mb={['10px', '10px', '30px']}
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
        alignItems="center"
        flexWrap="wrap"
      >
        <>
          {image && <ImagePanel image={image} isFullPage={isFullPage} />}
          <MDXPanel mdx={mdx} isFullPage={isFullPage} />
        </>
      </Flex>
      {withSeparator && <Divider />}
    </>
  );
};

function isVerticalSubSection(imagePosition: ImagePosition): boolean {
  return imagePosition === 'top' || imagePosition === 'bottom';
}

function isImageOnLeftOrOnRight(imagePosition: ImagePosition): boolean {
  return imagePosition === 'left' || imagePosition === 'top';
}

export default DescriptionPanel;
