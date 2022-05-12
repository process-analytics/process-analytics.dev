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
import { Box, Flex, Heading, Image, Text } from 'rebass/styled-components';

import { postsContent } from '../content/PostsContent';

import { PostDescription } from '../theme/types';
import { Card } from '../theme/components/Card';
import CardFooter from '../theme/components/CardFooter';
import { Jotform } from '../theme/components/Jotform';
import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import Footer from '../theme/components/Footer';
import PageHeader from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';
import { CardContainer } from '../theme/components/Card';
import {
  CoverImage,
  EllipsisHeading,
  PostContainer,
  TimeReadSpan,
} from '../theme/components/Post';

import AppPreview from '../images/model-generation-app/model_generation_app_preview.gif';

const Part = ({
  padding,
  children,
  ...props
}: React.PropsWithChildren<any>): JSX.Element => {
  return (
    <Flex
      marginX={['auto', 'auto', '16px']}
      fontSize="1.25rem"
      fontWeight={400}
      lineHeight={1.625}
      letterSpacing={'0.00938em'}
      style={{
        position: 'relative',
        borderRadius: '0.75rem',
        padding: padding,
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
}: React.PropsWithChildren<any>): JSX.Element => {
  const background = (
    <Box
      backgroundColor={backgroundColor}
      width="100%"
      height="100%"
      style={{ position: 'absolute', borderRadius: '0.5rem', zIndex: -1 }}
      opacity="0.3"
      margin={0}
    />
  );

  const padding = (withBackgroundColor: boolean) =>
    withBackgroundColor ? '104px 24px' : 0;

  return (
    <Part padding={padding(!backgroundColor)}>
      {backgroundColor && background}
      <Box
        style={{ width: '80%', padding: padding(backgroundColor) }}
        marginX="auto"
      >
        {children}
      </Box>
    </Part>
  );
};

const PartTitle = (props: React.PropsWithChildren<any>): JSX.Element => {
  return (
    <Text
      as="h3"
      color="text"
      marginBottom="24px"
      fontSize="1.875rem"
      fontWeight={700}
      lineHeight={1.375}
      letterSpacing={'-0.125px'}
    >
      {props.children}
    </Text>
  );
};

const Paragraph = (props: React.PropsWithChildren<any>): JSX.Element => {
  return (
    <Text
      as="p"
      color="text"
      margin="0"
      fontSize="1.25rem"
      fontWeight={300}
      lineHeight={1.625}
      letterSpacing={'-0.125px'}
    >
      {props.children}
    </Text>
  );
};

const BPMNGeneratorPage = (): JSX.Element => {
  const ifr = Jotform();

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

        <PartWithSingleColumn>
          <Box mb={[0, 3, 5]}>
            <PartTitle>
              Need a tool to generate process diagrams from events logs?
            </PartTitle>
            <Paragraph>
              We have a solution for you! <br />
              This is a free tool that will help you generate and visualize the
              activities of your process in BPMN standard.
              <br />
              All you need is to provide the events logs and select the format
              of the generated diagram.
            </Paragraph>
          </Box>
          <Box style={{ border: '1px solid Chartreuse', borderRadius: '5px' }}>
            <Image
              style={{ borderRadius: '5px' }}
              css={{ aspectRatio: 'attr(width) / attr(height)' }}
              src={AppPreview}
              alt={'Generation Model Application Demo'}
            />
          </Box>
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

        <Part padding={'104px 0'}>{ifr}</Part>

        <PartWithSingleColumn>
          <PartTitle>For more information</PartTitle>
          <Paragraph>Please visit the following article:</Paragraph>
        </PartWithSingleColumn>
        <Part paddingBottom="104px">
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
