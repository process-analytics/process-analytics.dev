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
import React, { FC } from 'react';

import { Box } from '@mui/material';

import { Divider } from '..';
import { ImagePanel } from './ImagePanel';
import { MDXPanel } from './MDXPanel';

export type ImagePosition = 'left' | 'right' | 'top' | 'bottom';
export type Image = {
  src: string;
  alt: string;
  positionFromMdx?: ImagePosition;
};

export type DescriptionPanelContent = {
  mdx: JSX.Element;
  image?: Image;
  withSeparator?: boolean;
};

type DescriptionPanelProps = {
  content: DescriptionPanelContent;
  index: number;
};

export const DescriptionPanel: FC<DescriptionPanelProps> = ({
  content: { mdx, image, withSeparator = false },
  index,
}) => {
  if (image && !image.positionFromMdx) {
    image.positionFromMdx = Boolean(index % 2) ? 'left' : 'right';
  }

  const isFullPage =
    !image ||
    image.positionFromMdx === 'top' ||
    image.positionFromMdx === 'bottom';

  return (
    <>
      <Box
        display="flex"
        key={index}
        marginTop={['10px', '10px', '30px']}
        marginBottom={withSeparator ? ['10px', '10px', '30px'] : 0}
        pt={['1em', '1em', '1.5em']}
        alignItems="center"
        flexWrap="wrap"
        flexDirection={
          isFullPage
            ? image?.positionFromMdx === 'bottom'
              ? 'column-reverse'
              : 'column'
            : image.positionFromMdx === 'right'
            ? 'row-reverse'
            : 'row'
        }
        sx={{
          ':first-of-type': {
            marginTop: 0,
          },
          ':last-of-type': {
            marginBottom: '30px',
          },
        }}
      >
        <>
          {image && <ImagePanel image={image} isFullPage={isFullPage} />}
          <MDXPanel mdx={mdx} isFullPage={isFullPage} />
        </>
      </Box>
      {withSeparator && <Divider />}
    </>
  );
};
