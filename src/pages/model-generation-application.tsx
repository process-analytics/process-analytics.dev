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
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from 'rebass/styled-components';

import { FeaturesThree } from '../theme/components/modelGenerationApp/FeaturesThree';
import { Jotform } from '../theme/components/modelGenerationApp/Jotform';

import { postsContent } from '../content/PostsContent';
import { PostDescription } from '../theme/types';
import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import Footer from '../theme/components/Footer';
import PageHeader from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';
import { PostContainer } from '../theme/components/Post';

import AppPreview from '../images/model-generation-app/model_generation_app_preview.gif';
import HowItWorksImg from '../images/model-generation-app/how_it_works.png';
import colors from '../theme/colors.json';

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

const PartTitle = ({
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

const Paragraph = ({
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
    <Layout title={PAGE.modelGenerationApplication}>
      <PageHeader displayDemoButton={false} />
      <Section.Container Background={Background}>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          mb={[5, 5, 6]}
          mt={[5, 5, 6]}
        >
          Model Generation Application
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
            alt={'Model Generation Application Demo'}
          />
        </Box>

        <PartWithSingleColumn>
          <PartTitle>
            Need a tool to generate process diagrams from events logs?
          </PartTitle>
          <HighlightMessage>We have a solution for you!</HighlightMessage>
          <FeaturesThree />
        </PartWithSingleColumn>

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
              The Model Generation Application is a
              <Link href="https://shiny.rstudio.com/">
                {' '}
                shiny R application{' '}
              </Link>
              that takes an event log file in
              <Link href="https://xes-standard.org/"> XES format </Link> as
              input.
              <br />
              <br />
              Once imported, it can display the process using 2 representations
              that can be used for comparison: a basic Process Discovery view
              and BPMN, with the execution data (frequency). <br />
              <br />
              For both representations, it also lets the user filter out noise
              that can be generated by the quality of the event log. <br />
              <br />
              With the BPMN view, it can enrich the process semantics by doing
              gateway and task detection.
            </Paragraph>
          </Part>
        </PartWithSingleColumn>

        <PartWithSingleColumn>
          <Flex justifyContent="space-between" alignItems="center">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                width: '6.875rem',
                height: '6.875rem',
                borderRadius: '0.75rem',
                color: 'white',
                backgroundColor: colors.primary,
                flexShrink: 0,
              }}
            />
            <Paragraph fontSize={[1, 1, 2, 3]} marginLeft={'5%'}>
              This tool is currently in preview. We are working on improving the
              performance and usability of the tool.
              <br /> <br />
              For now, you can fill in the following form to send your events
              logs (anonymized or without confidential data) and your email
              address. <br />
              We will send you the generated result as soon as it is ready.
            </Paragraph>
          </Flex>
        </PartWithSingleColumn>

        <Part
          marginBottom="156px"
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

        <PartWithSingleColumn>
          <PartTitle>More information in this series of articles</PartTitle>
        </PartWithSingleColumn>

        <Part
          marginBottom="50px"
          maxWidth="1320px"
          style={{ overflowWrap: 'break-word' }}
          flexDirection="column"
        >
          <PostContainer
            posts={postsContent.posts.filter(
              (post: PostDescription) => post.isBPMNLayoutGenerator,
            )}
            pageId="blog"
          />
        </Part>

        <PartWithSingleColumn>
          <PartTitle id={'terms'}>Terms of Use</PartTitle>
          <Paragraph fontSize={[1, 1, 2, 3]}>
            The <b>Model Generation Application</b> is edited by{' '}
            <code>
              Process Analytics p/o Bonitasoft 32 Rue Gustave Eiffel 38000
              GRENOBLE FRANCE
            </code>
            <br />
            Contact:{' '}
            <a href="mailto:process.analytics.dev@gmail.com">
              process.analytics.dev@gmail.com
            </a>
          </Paragraph>
          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4]}>
            The form used to submit data is provided by&nbsp;
            <a href="https://www.jotform.com">JOTForm</a>. The following rules
            apply
            <ul>
              <li>
                <a href="https://www.jotform.com/terms/">JOTForm terms</a>
              </li>
              <li>
                <a href="https://www.jotform.com/privacy/">JOTForm privacy</a>.
                In particular, please read the
                <i>"INFORMATION WE COLLECT / From Form Responders"</i> and{' '}
                <i>
                  "HOW WE USE AND DISCLOSE YOUR INFORMATION / Form responders"
                </i>{' '}
                paragraphs
              </li>
            </ul>
          </Paragraph>

          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4]} marginBottom={[4]}>
            The <code>Process Analytics Project</code> collects data (name,
            email, XES file) in the sole purpose of sending you the results of
            the processing.
            <br />
            The <code>Process Analytics Project</code> does not sell personal
            information gathered from form responses.
            <br />
            The <code>Process Analytics Project</code> won’t make available form
            responses to third parties without permission, and won’t use any
            contact details collected in the form except for sending the results
            of the processing.
            <br />
          </Paragraph>

          <PartTitle>
            Disclaimer of Warranties and Limitation of Liability
          </PartTitle>
          <Paragraph fontSize={[1, 1, 2, 3]}>
            <b>(a) Warranty Disclaimer:</b> THE SITE AND THE SITE CONTENT ARE
            PROVIDED STRICTLY ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND THE
            PROCESS ANALYTICS PROJECT MAKES NO WARRANTY THAT THE SITE OR THE
            SITE CONTENT IS COMPLETE, SUITABLE FOR YOUR PURPOSE, OR ACCURATE.
            THE PROCESS ANALYTICS PROJECT HEREBY EXPRESSLY DISCLAIMS ANY AND ALL
            IMPLIED, STATUTORY OR OTHER WARRANTIES WITH RESPECT TO THE SITE,
            AVAILABILITY OF THE SITE AND THE SITE CONTENT, INCLUDING, WITHOUT
            LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE ENTIRE RISK AS TO
            RESULTS OBTAINED THROUGH USE OF THE SITE AND/OR THE SITE CONTENT
            RESTS WITH YOU AND THE PROCESS ANALYTICS PROJECT MAKES NO
            REPRESENTATION OR WARRANTY THAT THE SITE AVAILABILITY WILL BE
            UNINTERRUPTED, OR THE SITE AND/OR THE SITE CONTENT WILL BE ERROR
            FREE.
          </Paragraph>
          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4]}>
            <b>(b) Limitation of Liability:</b> TO THE FULLEST EXTENT PERMITTED
            BY APPLICABLE LAW, YOU AGREE THAT THE PROCESS ANALYTICS PROJECT
            SHALL NOT BE LIABLE TO YOU FOR ANY DAMAGES ARISING OUT OF OR
            CONNECTED TO YOUR USE OF, OR INABILITY TO USE, THE SITE, INCLUDING,
            WITHOUT LIMITATION, ANY AND ALL DIRECT, INDIRECT,
            INCIDENTAL,CONSEQUENTIAL, PUNITIVE, SPECIAL, EXEMPLARY OR STATUTORY
            DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OR
            PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF GOODWILL OR FOR ANY
            COST OF COVER OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
            SERVICES), EVEN IF THE PROCESS ANALYTICS PROJECT HAS BEEN ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE LEGAL THEORY
            UNDER WHICH DAMAGES ARE SOUGHT, WHETHER IN BREACH OF CONTRACT OR IN
            TORT, INCLUDING NEGLIGENCE.
          </Paragraph>
        </PartWithSingleColumn>
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

export default ModelGenerationApplicationPage;
