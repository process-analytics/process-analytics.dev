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
import { FlexProps, TextProps } from 'rebass';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';

import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import Footer from '../theme/components/Footer';
import PageHeader from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';

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
          Conditions
        </Heading>

        <PartWithSingleColumn>
          <PartTitle id={'terms'}>Terms of Use</PartTitle>
          <Paragraph fontSize={[1, 1, 2, 3]}>
            The <b>Model Generation Application</b> is edited by:
            <br />
            <code>
              Process Analytics p/o
              <br />
              Bonitasoft 32 Rue Gustave Eiffel 38000
              <br />
              GRENOBLE FRANCE
            </code>
            .
            <br />
            <br />
            Contact:{' '}
            <a href="mailto:process.analytics.dev@gmail.com">
              process.analytics.dev@gmail.com
            </a>
          </Paragraph>
          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4]}>
            The form used to submit data is provided by&nbsp;
            <a href="https://www.jotform.com">JOTForm</a>. The following rules
            apply:
            <ul>
              <li>
                <a href="https://www.jotform.com/terms/">JOTForm terms</a>
              </li>
              <li>
                <a href="https://www.jotform.com/privacy/">JOTForm privacy</a>.
                In particular, please read the
                <i>"INFORMATION WE COLLECT / From Form Responders"</i> and
                <i>
                  "HOW WE USE AND DISCLOSE YOUR INFORMATION / Form responders"
                </i>{' '}
                paragraphs.
              </li>
              <li>Submissions are deleted 90 days after they're received</li>
              <li>Data are only stored in Europe (Germany)</li>
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
        </PartWithSingleColumn>
        <PartWithSingleColumn>
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
