import { Box, Flex } from 'rebass/styled-components';
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

  return (
    <Box key={index}>
      <ContentContainer isFullPage={isFullPage}>
        <Content
          mdx={mdx}
          image={image as Required<ImageType> | undefined}
          isFullPage={isFullPage}
        />
      </ContentContainer>
      {withSeparator && <Divider />}
    </Box>
  );
};

function isVerticalSubSection(imagePosition: ImagePosition): boolean {
  return imagePosition === 'top' || imagePosition === 'bottom';
}

const ContentContainer = ({
  children,
  isFullPage,
}: {
  children: JSX.Element;
  isFullPage: boolean;
}): JSX.Element =>
  isFullPage ? (
    <Box justifyContent="center" alignItems="center" flexWrap="wrap">
      {children}
    </Box>
  ) : (
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {children}
    </Flex>
  );

const Content = ({
  mdx,
  image,
  isFullPage,
}: {
  mdx: JSX.Element;
  image: Required<ImageType> | undefined;
  isFullPage: boolean;
}): JSX.Element => {
  if (!image) {
    return <MDXPanel mdx={mdx} isFullPage={isFullPage} />;
  }

  return image.positionFromMdx === 'left' || image.positionFromMdx === 'top' ? (
    <>
      <ImagePanel image={image} isFullPage={isFullPage} />
      <MDXPanel mdx={mdx} isFullPage={isFullPage} />
    </>
  ) : (
    <>
      <MDXPanel mdx={mdx} isFullPage={isFullPage} />
      <ImagePanel image={image} isFullPage={isFullPage} />
    </>
  );
};

export default DescriptionPanel;
