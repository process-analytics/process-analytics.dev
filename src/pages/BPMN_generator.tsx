/**
 * Copyright 2022 Bonitasoft S.A.
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

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FlexProps, TextProps } from 'rebass';
import { Box, Flex, Heading, Image, Text } from 'rebass/styled-components';

import { FeaturesThree } from '../theme/components/FeaturesThree';

import { postsContent } from '../content/PostsContent';

import { PostDescription } from '../theme/types';
import { Jotform } from '../theme/components/Jotform';
import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import Footer from '../theme/components/Footer';
import PageHeader from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';
import { PostContainer } from '../theme/components/Post';

import AppPreview from '../images/model-generation-app/model_generation_app_preview.gif';

const Part = ({
  padding,
  children,
  ...props
}: React.PropsWithChildren<FlexProps>): JSX.Element => {
  return (
    <Flex
      marginX={['auto', 'auto', '16px']}
      padding={padding}
      fontSize="1.25rem"
      fontWeight={400}
      lineHeight={1.625}
      letterSpacing={'0.00938em'}
      style={{
        position: 'relative',
        borderRadius: '0.75rem',
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

const PartWithSingleColumn = ({
  backgroundColor,
  children,
}: React.PropsWithChildren<FlexProps>): JSX.Element => {
  const background = (
    <Box
      backgroundColor={backgroundColor}
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        zIndex: -1,
        border: '0px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '0.5rem',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundClip: 'border-box',
      }}
      opacity="0.3"
      margin={0}
    />
  );

  const padding = (withPadding: boolean): string | number =>
    withPadding ? '104px 24px' : 0;

  return (
    <Part padding={padding(!backgroundColor)}>
      {backgroundColor && background}
      <Box
        style={{ width: '80%', padding: padding(Boolean(backgroundColor)) }}
        marginX="auto"
      >
        {children}
      </Box>
    </Part>
  );
};

const PartTitle = ({
  children,
}: React.PropsWithChildren<TextProps>): JSX.Element => {
  return (
    <Text
      as="h3"
      color="text"
      marginBottom="24px"
      fontSize="1.875rem"
      fontWeight={700}
      lineHeight={1.375}
      letterSpacing="-0.125px"
    >
      {children}
    </Text>
  );
};

const HighlightMessage = ({
  children,
}: React.PropsWithChildren<TextProps>): JSX.Element => {
  return (
    <Text
      as="h4"
      color="secondary"
      marginBottom="2rem"
      paddingY={['0.5rem', '0.5rem', '1.5rem']}
      fontSize="1.675rem"
      fontWeight={700}
      lineHeight={1.375}
      letterSpacing="-0.125px"
      textAlign="center"
    >
      {children}
    </Text>
  );
};

const Paragraph = ({
  children,
}: React.PropsWithChildren<TextProps>): JSX.Element => {
  return (
    <Text
      as="p"
      color="text"
      margin="0"
      fontSize="1.25rem"
      fontWeight={300}
      lineHeight={1.625}
      letterSpacing="-0.125px"
    >
      {children}
    </Text>
  );
};

const BPMNGeneratorPage = (): JSX.Element => {
  return (
    <Layout title={PAGE.bpmn_generator}>
      <PageHeader />
      <Section.Container Background={Background}>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          mb={[5, 5, 6]}
          mt={[5, 5, 6]}
        >
          BPMN model generation
        </Heading>

        <Box
          style={{
            borderWidth: '3px',
            borderStyle: 'solid none',
            borderColor: 'rgba(0, 0, 0, 0.125)',
          }}
        >
          <Image
            style={{ borderRadius: '5px' }}
            css={{ aspectRatio: 'attr(width) / attr(height)' }}
            src={AppPreview}
            alt={'Generation Model Application Demo'}
          />
        </Box>

        <PartWithSingleColumn>
          <PartTitle>
            Need a tool to generate process diagrams from events logs?
          </PartTitle>
          <HighlightMessage>We have a solution for you!</HighlightMessage>
          <FeaturesThree></FeaturesThree>
        </PartWithSingleColumn>

        <PartWithSingleColumn backgroundColor="muted">
          <PartTitle>How it works?</PartTitle>
          <Paragraph>Plop</Paragraph>
        </PartWithSingleColumn>

        <PartWithSingleColumn>
          <Flex justifyContent="space-between">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                width: '6.875rem',
                height: '6.875rem',
                borderRadius: '0.75rem',
                backgroundColor: 'Chartreuse',
              }}
            />
            <Paragraph>
              This tool is currently in beta. We are working on improving the
              performance and usability of the tool.
              <br />
              For now, you can fill in the following form to send your events
              logs and your email address. <br />
              We will send you the generated BPMN model as soon as it is ready.
            </Paragraph>
          </Flex>
        </PartWithSingleColumn>

        <Part
          marginBottom="104px"
          style={{
            boxSizing: 'border-box',
            flexFlow: 'row wrap',
            color: 'rgb(52, 71, 103)',
            borderRadius: '0.75rem',
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0rem 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0rem 0.625rem 0.625rem -0.3125rem',
            overflow: 'hidden',
          }}
        >
          <Jotform />
        </Part>

        <Part
          marginY="104px"
          flexDirection="column"
          maxWidth="1320px"
          style={{ overflowWrap: 'break-word' }}
        >
          <Part
            flexDirection="column"
            marginX={0}
            paddingBottom="50px"
            maxWidth="50%"
            style={{ overflowWrap: 'break-word', boxSizing: 'border-box' }}
          >
            <PartTitle>For more information</PartTitle>
            <Paragraph>Please read the following articles:</Paragraph>
          </Part>
          <PostContainer
            posts={postsContent.posts.filter(
              (post: PostDescription) => post.isBPMNLayoutGenerator,
            )}
            pageId="blog"
          />
        </Part>
      </Section.Container>
      <Footer />
    </Layout>
  );
};

// TODO duplicated from PageWithPosts.tsx
const Background = (): JSX.Element => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '35vh']}
      width={['95vw', '55vw']}
    />

    <Triangle
      color="secondary"
      height={['18vh', '35vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['9vh', '15vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />
  </>
);

export default BPMNGeneratorPage;
