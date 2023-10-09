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

import type { FC } from 'react';
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

export type ImagePosition = 'left' | 'right' | 'top' | 'bottom';
export type Image = {
  src: string;
  alt: string;
  positionFromMdx?: ImagePosition;
};

type ImagePanelProps = {
  image: Image;
  isFullPage: boolean;
};

function getImageProps(image: Image): BoxProps {
  switch (image.positionFromMdx) {
    case 'top':
      return { width: 1, mb: [3, 3, 4] };
    case 'bottom':
      return { width: 1, mt: [3, 3, 4] };
    case 'left':
      return { width: [2 / 6, 2 / 6, 1], mb: [3, 3, 0], mr: [0, 0, 1] };
    case 'right':
    default:
      return { width: [2 / 6, 2 / 6, 1], mt: [3, 3, 0], ml: [0, 0, 1] };
  }
}

function convertPositionToFadeDirection(
  image: Image,
): 'down' | 'up' | 'left' | 'right' {
  switch (image.positionFromMdx) {
    case 'top':
      return 'down';
    case 'bottom':
      return 'up';
    case 'left':
      return 'left';
    case 'right':
    default:
      return 'right';
  }
}

export const ImagePanel: FC<ImagePanelProps> = ({ image, isFullPage }) => (
  <Box
    width={[1, 1, isFullPage ? 1 : 1 / 3]}
    style={{
      margin: 'auto',
      maxWidth: isFullPage ? 'auto' : '300px',
    }}
    {...getImageProps(image)}
  >
    {image && (
      <Fade
        direction={convertPositionToFadeDirection(image)}
        triggerOnce
        style={{ textAlign: 'center' }}
      >
        <img
          height={'auto'}
          src={image.src}
          alt={image.alt}
          style={{
            borderRadius: '5px',
            aspectRatio: 'attr(width) / attr(height)',
          }}
        />
      </Fade>
    )}
  </Box>
);
