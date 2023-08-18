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

import React, { FC } from 'react';

import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeadProps } from 'gatsby';

import { Box, BoxProps, Link, Typography } from '@mui/material';

import {
  SEO,
  Features,
  Jotform,
  Section,
  Layout,
  PostContainer,
} from '../components';
import { postsContent, footerContent, headerContent } from '../content';
import { PAGE } from '../helper';
import { DataProps } from '../hooks';

import AppPreview from '../assets/images/model-generation-app/model_generation_app_preview.gif';
import HowItWorksImg from '../assets/images/model-generation-app/how_it_works.png';

type PartTitleProps = {
  marginBottom?: string;
  width?: string;
};

type ParagraphProps = {
  marginBottom?: number | number[];
  marginTop?: number | number[];
  marginLeft?: string | string[];
  width?: string | string[];
};

export const Part: FC<React.PropsWithChildren<BoxProps>> = ({
  padding,
  children,
  ...props
}) => (
  <Box
    display="flex"
    marginX="16px"
    padding={padding}
    style={{
      position: 'relative',
      borderRadius: '0.75rem',
    }}
    {...props}
  >
    {children}
  </Box>
);

export const PartWithSingleColumn: FC<React.PropsWithChildren<BoxProps>> = ({
  bgcolor,
  children,
}) => {
  const background = (
    <Box
      bgcolor={bgcolor}
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
        opacity: '0.3',
      }}
      margin={0}
    />
  );

  const partPadding = !bgcolor ? '104px 24px' : 0;
  const boxPadding = !bgcolor ? 0 : '52px 24px';
  const boxWidth = !bgcolor ? 80 : 100;

  return (
    <Part padding={partPadding}>
      {bgcolor && background}
      <Box
        style={{ width: `${boxWidth}%`, padding: boxPadding }}
        marginX="auto"
      >
        {children}
      </Box>
    </Part>
  );
};

export const PartTitle: FC<React.PropsWithChildren<PartTitleProps>> = ({
  children,
  ...props
}) => (
  <Typography
    variant="h2"
    color="text"
    marginBottom="24px"
    textAlign="center"
    {...props}
  >
    {children}
  </Typography>
);

const HighlightMessage: FC<React.PropsWithChildren<BoxProps>> = ({
  children,
}) => (
  <Typography
    variant="body1"
    color="secondary"
    paddingY={['0.5rem', '0.5rem', '1.5rem']}
    textAlign="center"
    sx={{
      fontWeight: 700,
    }}
  >
    {children}
  </Typography>
);

export const Paragraph: FC<React.PropsWithChildren<ParagraphProps>> = ({
  children,
  ...props
}) => (
  <Typography variant="body2" color="text" margin="0" {...props}>
    {children}
  </Typography>
);

const ModelGenerationApplicationPage: FC = () => (
  <Layout footerContent={footerContent} headerContent={headerContent}>
    <Section>
      <Typography
        textAlign="center"
        variant="h1"
        color="primary"
        mt={[5, 5, 6]}
        mb={[3, 8, 12]}
      >
        Model Generation Application
      </Typography>
    </Section>
    <Section>
      <Box
        marginX={[0, 0, 0, 5]}
        sx={{
          borderRadius: '5px',
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
        }}
      >
        <img
          src={AppPreview}
          alt={'Model Generation Application Demo'}
          style={{ borderRadius: '5px' }}
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
      <PartWithSingleColumn bgcolor="muted">
        <PartTitle marginBottom="3.25rem">How it works?</PartTitle>
        <Part
          marginTop="24px"
          justifyContent={'space-around'}
          alignItems={'center'}
          flexDirection={['column', 'row']}
        >
          <Box
            width={['100%', '45%']}
            height="auto"
            marginBottom={['3.25rem', 0]}
          >
            <img
              src={HowItWorksImg}
              alt={'Generation Model Application Demo'}
            />
          </Box>
          <Paragraph width={['100%', '40%']}>
            The Model Generation Application is a{' '}
            <Link href="https://shiny.rstudio.com/">shiny R application</Link>{' '}
            that takes an event log file in{' '}
            <Link href="https://xes-standard.org/">XES format</Link> as input.
            <br />
            <br />
            Once imported, it can display the process using 2 representations
            that can be used for comparison: a basic Process Discovery view and
            BPMN, with the execution data (frequency).
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
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        padding="114px 24px"
        width={['100%', '80%']}
        marginX="auto"
      >
        <Box
          display="flex"
          flexShrink={0}
          alignItems="center"
          width={['5rem', '5.5rem', '6.875rem']}
          height={['5rem', '5.5rem', '6.875rem']}
          marginBottom={['3.25rem', 0]}
          sx={{
            color: 'secondary.main',
            border: '5px solid',
            borderRadius: '0.75rem',
            borderColor: 'primary.main',
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
          }}
        >
          <FontAwesomeIcon
            icon={faInfo}
            width="100%"
            height="100%"
            size="2x"
            color="inherit"
          />
        </Box>
        <Paragraph marginLeft={['2rem', '3rem', '5rem']}>
          This tool is currently in preview. We are working on improving the
          performance and usability of the tool.
          <br /> <br />
          Please complete the form to send your events logs (anonymized or
          without confidential data) and your email address. <br />
          We will send you back the generated results as soon as they are ready.
        </Paragraph>
      </Part>
    </Section>
    <Section>
      <Part
        id={'form'}
        marginY={[0, 0, 0, 3]}
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
          postContents={postsContent.posts.filter(
            post => post.isInModelGenerationAppPage,
          )}
          pageId="blog"
        />
      </Part>
    </Section>
  </Layout>
);
export default ModelGenerationApplicationPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head: FC<HeadProps<DataProps>> = ({ location }) => (
  <SEO title={PAGE.modelGenerationApplication} pathname={location.pathname} />
);
