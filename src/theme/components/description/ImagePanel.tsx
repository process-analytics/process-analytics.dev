import { Image as ImageType } from '../../types';
import { Box, Image, ImageProps } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

function getImageProps(image: ImageType): ImageProps {
  switch (image.positionFromMdx) {
    case 'top':
      return { mt: [4, 4, 0], mr: [0, 0, 0] };
    case 'bottom':
      return { mt: [4, 4, 0], ml: [0, 0, 0] };
    case 'left':
      return { mb: [4, 4, 0], mr: [0, 0, 1] };
    case 'right':
    default:
      return { mt: [4, 4, 0], ml: [0, 0, 1] };
  }
}

function convertPositionToFadeDirection(
  image: ImageType,
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

const ImagePanel = ({
  image,
  isFullPage,
}: {
  image: ImageType;
  isFullPage: boolean;
}): JSX.Element => {
  const boxProps = isFullPage
    ? {
        width: [1, 1, 1],
        style: {
          margin: 'auto',
        },
      }
    : {
        width: [1, 1, 1 / 3],
        style: {
          margin: 'auto',
          maxWidth: '300px',
        },
      };

  return (
    <Box {...boxProps}>
      {image && (
        <Fade
          direction={convertPositionToFadeDirection(image)}
          triggerOnce
          style={{ textAlign: 'center' }}
        >
          <Image
            width={[2 / 6, 2 / 6, 1]}
            style={{ borderRadius: '5px' }}
            {...getImageProps(image)}
            {...image}
          />
        </Fade>
      )}
    </Box>
  );
};
export default ImagePanel;
