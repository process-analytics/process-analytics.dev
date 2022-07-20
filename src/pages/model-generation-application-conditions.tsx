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

import { HeadProps } from 'gatsby';
import React from 'react';
import { Heading } from 'rebass/styled-components';
import { SEO } from '../components/seo';
import { DataProps } from '../hooks/use-site-metadata';

import { Part, Paragraph, PartTitle } from './model-generation-application';

import Section from '../theme/components/Section';
import Triangle from '../theme/components/Triangle';
import OldFooter from '../theme/components/OldFooter';
import PageHeader from '../theme/components/PageHeader';
import Layout from '../theme/components/Layout';
import { PAGE } from '../theme/utils/constants';
import styled from 'styled-components';

const ModelGenerationApplicationConditionPage = (): JSX.Element => {
  return (
    <Layout>
      <PageHeader displayDemoButton={false} />
      <Section.Container Background={Background}>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          marginY={[5, 5, '12rem']}
        >
          Usage conditions of Model Generation Application
        </Heading>

        <Part flexDirection="column" width="80%" marginX="auto">
          <PartTitle>Terms of Use</PartTitle>
          <Paragraph fontSize={[1, 1, 2, 3]}>
            The{' '}
            <a href={'/model-generation-application'}>
              <Bold>Model Generation Application</Bold>{' '}
            </a>
            is edited by:
            <br />
            <code>
              Process Analytics p/o Bonitasoft
              <br />
              32 Rue Gustave Eiffel
              <br />
              38000 GRENOBLE
              <br />
              FRANCE
            </code>
            .
            <br />
            <br />
            Contact:{' '}
            <a href="mailto:process.analytics.dev@gmail.com">
              process.analytics.dev@gmail.com
            </a>
          </Paragraph>
          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4, 5]}>
            The form used to submit data is provided by&nbsp;
            <a href="https://www.jotform.com">JOTForm</a>. The following rules
            apply:
            <ul>
              <li>
                <a href="https://www.jotform.com/terms/">JOTForm terms</a>
              </li>
              <li>
                <a href="https://www.jotform.com/privacy/">JOTForm privacy</a>.
                In particular, please read the following paragraphs
                <ul>
                  <li>
                    <i>"INFORMATION WE COLLECT / From Form Responders"</i>
                  </li>
                  <li>
                    <i>
                      "HOW WE USE AND DISCLOSE YOUR INFORMATION / Form
                      responders"
                    </i>
                  </li>
                </ul>
              </li>
              <li>Submissions are deleted 90 days after they're received</li>
              <li>Data is only stored in Europe (Germany)</li>
            </ul>
          </Paragraph>
          <Paragraph fontSize={[1, 1, 2, 3]} marginTop={[4]} marginBottom={[4]}>
            The <Bold>Process Analytics Project</Bold> collects data (name,
            email, XES file) for the sole purpose of sending you the processing
            results.
            <br />
            The <Bold>Process Analytics Project</Bold> does not sell personal
            information gathered from form responses.
            <br />
            The <Bold>Process Analytics Project</Bold> will not make form
            responses available to third parties without permission, and we
            won’t use any contact details collected in the form except for
            sending the processing results.
            <br />
          </Paragraph>
        </Part>
        <Part
          flexDirection="column"
          width="80%"
          marginX="auto"
          marginTop="104px"
          marginBottom="24px"
        >
          <PartTitle>
            Disclaimer of Warranties and Limitation of Liability
          </PartTitle>
          <Paragraph fontSize={[1, 1, 2, 3]}>
            <Bold>(a) Warranty Disclaimer:</Bold> THE SITE AND THE SITE CONTENT
            ARE PROVIDED STRICTLY ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND
            THE PROCESS ANALYTICS PROJECT MAKES NO WARRANTY THAT THE SITE OR THE
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
            <Bold>(b) Limitation of Liability:</Bold> TO THE FULLEST EXTENT
            PERMITTED BY APPLICABLE LAW, YOU AGREE THAT THE PROCESS ANALYTICS
            PROJECT SHALL NOT BE LIABLE TO YOU FOR ANY DAMAGES ARISING OUT OF OR
            CONNECTED TO YOUR USE OF, OR INABILITY TO USE, THE SITE, INCLUDING,
            WITHOUT LIMITATION, ANY AND ALL DIRECT, INDIRECT, INCIDENTAL,
            CONSEQUENTIAL, PUNITIVE, SPECIAL, EXEMPLARY OR STATUTORY DAMAGES
            (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OR PROFITS,
            LOSS OF REVENUE, LOSS OF DATA, LOSS OF GOODWILL OR FOR ANY COST OF
            COVER OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES), EVEN
            IF THE PROCESS ANALYTICS PROJECT HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES, AND REGARDLESS OF THE LEGAL THEORY UNDER WHICH
            DAMAGES ARE SOUGHT, WHETHER IN BREACH OF CONTRACT OR IN TORT,
            INCLUDING NEGLIGENCE.
          </Paragraph>
        </Part>
      </Section.Container>
      <OldFooter />
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

const Bold = styled.b`
  font-weight: 700;
`;

export default ModelGenerationApplicationConditionPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO
    title={PAGE.modelGenerationApplicationConditions}
    pathname={location.pathname}
  />
);
