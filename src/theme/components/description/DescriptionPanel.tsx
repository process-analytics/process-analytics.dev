import { Box, Flex } from 'rebass/styled-components';
import React from 'react';
import { Image as ImageType } from '../../types';
import Divider from './../Divider';
import ImagePanel, { isVerticalSubSection } from './ImagePanel';
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

  const isFullPage = !image || isVerticalSubSection(image.positionFromMdx!);

  return (
    <Box
      key={index}
      css={{
        marginTop: '30px',
        marginBottom: '30px',
      }}
    >
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
    return <CustomMDXPanel mdx={mdx} isFullPage={isFullPage} />;
  }

  return image.positionFromMdx === 'left' || image.positionFromMdx === 'top' ? (
    <>
      <CustomImagePanel image={image} isFullPage={isFullPage} />
      <CustomMDXPanel mdx={mdx} isFullPage={isFullPage} />;
    </>
  ) : (
    <>
      <CustomMDXPanel mdx={mdx} isFullPage={isFullPage} />;
      <CustomImagePanel image={image} isFullPage={isFullPage} />
    </>
  );
};

const CustomMDXPanel = ({
  mdx,
  isFullPage,
}: {
  mdx: JSX.Element;
  isFullPage: boolean;
}): JSX.Element =>
  isFullPage ? (
    <MDXPanel width={[1, 1, 1]} mdx={mdx} />
  ) : (
    <MDXPanel width={[1, 1, 4 / 6]} mdx={mdx} />
  );

const CustomImagePanel = ({
  image,
  isFullPage,
}: {
  image: Required<ImageType>;
  isFullPage: boolean;
}): JSX.Element =>
  isFullPage ? (
    <ImagePanel width={[1, 1, 1]} style={{ margin: 'auto' }} image={image} />
  ) : (
    <ImagePanel
      width={[1, 1, 2 / 6]}
      style={{ margin: 'auto', maxWidth: '300px' }}
      image={image}
    />
  );

export default DescriptionPanel;
