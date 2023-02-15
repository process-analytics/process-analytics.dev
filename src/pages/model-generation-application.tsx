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

import React from 'react';

import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeadProps } from 'gatsby';

import { FlexProps, TextProps } from 'rebass';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from 'rebass/styled-components';

import { SEO } from '../components/seo';

import { Features } from '../theme/components/modelGenerationApp/Features';
import { Jotform } from '../theme/components/modelGenerationApp/Jotform';

import { postsContent } from '../content/PostsContent';
import { footerRoutes } from '../content/FooterRoutes';
import { Footer } from '../theme/components/Footer';
import { PostDescription } from '../theme/types';
import { Section } from '../theme/components/Section';
import { PageHeader } from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';
import { PostContainer } from '../theme/components/Post';

import AppPreview from '../images/model-generation-app/model_generation_app_preview.gif';
import HowItWorksImg from '../images/model-generation-app/how_it_works.png';
import colors from '../theme/colors.json';
import { DataProps } from '../hooks/use-site-metadata';

export const Part = ({
  padding,
  children,
  ...props
}: React.PropsWithChildren<FlexProps>): JSX.Element => {
  return (
    <Flex
      marginX="16px"
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

export const PartWithSingleColumn = ({
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

  const partPadding = !backgroundColor ? '104px 24px' : 0;
  const boxPadding = !backgroundColor ? 0 : '52px 24px';
  const boxWidth = !backgroundColor ? 80 : 100;

  return (
    <Part padding={partPadding}>
      {backgroundColor && background}
      <Box
        style={{ width: `${boxWidth}%`, padding: boxPadding }}
        marginX="auto"
      >
        {children}
      </Box>
    </Part>
  );
};

export const PartTitle = ({
  children,
  ...props
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
      textAlign="center"
      {...props}
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

export const Paragraph = ({
  children,
  ...props
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
      {...props}
    >
      {children}
    </Text>
  );
};

const ModelGenerationApplicationPage = (): JSX.Element => {
  return (
    <Layout>
      <PageHeader displayDemoButton={false} />
      <Section>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          marginY={[5, 5, '12rem']}
        >
          Model Generation Application
        </Heading>
      </Section>
      <Section>
        <Box
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
          }}
        >
          <Image
            style={{ borderRadius: '5px' }}
            css={{ aspectRatio: 'attr(width) / attr(height)' }}
            src={AppPreview}
            alt={'Model Generation Application Demo'}
          />
        </Box>
      </Section>
      <Section>
        <PartWithSingleColumn>
          <PartTitle>
            Need a tool to generate process diagrams from events logs?
          </PartTitle>
          <HighlightMessage>We have a solution for you!</HighlightMessage>
          <Features />
        </PartWithSingleColumn>
      </Section>
      <Section>
        <PartWithSingleColumn backgroundColor="muted">
          <PartTitle marginBottom="52px">How it works?</PartTitle>
          <Part
            marginTop="24px"
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <Image
              src={HowItWorksImg}
              alt={'Generation Model Application Demo'}
              width="45%"
            />
            <Paragraph width="40%" fontSize={[1, 1, 2, 3]}>
              The Model Generation Application is a{' '}
              <Link href="https://shiny.rstudio.com/">shiny R application</Link>{' '}
              that takes an event log file in{' '}
              <Link href="https://xes-standard.org/">XES format</Link> as input.
              <br />
              <br />
              Once imported, it can display the process using 2 representations
              that can be used for comparison: a basic Process Discovery view
              and BPMN, with the execution data (frequency).
              <br />
              <br />
              For both representations, it also lets the user filter out noise
              that can be generated by the quality of the event log.
              <br />
              <br />
              With the BPMN view, it can enrich the process semantics by doing
              gateway and task detection.
            </Paragraph>
          </Part>
        </PartWithSingleColumn>
      </Section>
      <Section>
        <Part
          justifyContent="space-between"
          alignItems="center"
          padding="114px 24px"
          width="80%"
          marginX="auto"
        >
          <Flex
            width={['5rem', '5.5rem', '6.875rem']}
            height={['5rem', '5.5rem', '6.875rem']}
            alignItems="center"
            style={{
              borderRadius: '0.75rem',
              borderColor: colors.primary,
              borderWidth: '5px',
              borderStyle: 'solid',
              color: colors.secondary,
              flexShrink: 0,
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
            }}
          >
            <FontAwesomeIcon
              icon={faInfo}
              width="100%"
              height="100%"
              size="2x"
            />
          </Flex>
          <Paragraph
            fontSize={[1, 1, 2, 3]}
            marginLeft={['2rem', '3rem', '5rem']}
          >
            This tool is currently in preview. We are working on improving the
            performance and usability of the tool.
            <br /> <br />
            Please complete the form to send your events logs (anonymized or
            without confidential data) and your email address. <br />
            We will send you back the generated results as soon as they are
            ready.
          </Paragraph>
        </Part>
      </Section>
      <Section>
        <Part
          id={'form'}
          marginBottom="124px"
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
      </Section>
      <Section>
        <Part
          marginBottom="52px"
          maxWidth="1320px"
          style={{ overflowWrap: 'break-word' }}
          flexDirection="column"
        >
          <PartTitle marginBottom="52px" width="100%">
            More information in this series of articles
          </PartTitle>
          <PostContainer
            posts={postsContent.posts.filter(
              (post: PostDescription) => post.isInModelGenerationAppPage,
            )}
            pageId="blog"
          />
        </Part>
      </Section>
      {/* TODO: When there will only one theme provider, move the Footer in the
    Layout class */}
      <Footer content={footerRoutes} />
    </Layout>
  );
};

export default ModelGenerationApplicationPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.modelGenerationApplication} pathname={location.pathname} />
);
