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
import { Box, Flex, Heading, Image, Text } from 'rebass/styled-components';

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
  TimeReadSpan,
} from '../theme/components/Post';

import AppPreview from '../images/model-generation-app/model_generation_app_preview.gif';

const BPMNGeneratorPage = (): JSX.Element => {
  const ifr = Jotform();

  const articleContainer = (
    <CardContainer minWidth={'50%'} style={{ width: '80%' }}>
      <a
        href={
          'https://community.bonitasoft.com/blog/visualizing-processes-bpmn-standard-using-bpmn-layout-generator-show-activities-transitions-and'
        }
        target="__blank"
        title={
          'Visualizing processes in BPMN standard using the BPMN layout generator'
        }
        style={{ textDecoration: 'none' }}
      >
        <Card p={0} pb={4}>
          <EllipsisHeading m={3} color="text" fontSize={3}>
            {
              'Visualizing processes in BPMN standard using the BPMN layout generator'
            }
          </EllipsisHeading>
          <CoverImage
            src={
              'https://lh5.googleusercontent.com/Kjqn5B3-PPYtJZ8k8iXtODqcIHS3AL3qlUWclH_ec-njXdCtZVnSFXz7ESRVILJCVLuXu047y_8tHxgaQ77miVPEqkoB3JIiLgpM1jqOjtQ1-8MLjGw2cfG_pFt5BaBSelY8r8GS'
            }
            alt={
              'Visualizing processes in BPMN standard using the BPMN layout generator'
            }
          />
          <Text m={3} color="text">
            {
              'In this article, we will use the BPMN layout generator to automatically generate a BPMN diagram from events logs. To further help visualize the process, we will add BPMN objects such as gateways.'
            }
          </Text>
          <CardFooter
            bg="primary"
            color="background"
            position="bottom-right"
            round
          >
            <span>{`${'December 2021'} - `}</span>
            <TimeReadSpan>{`${Math.ceil(3)} min read`}</TimeReadSpan>
          </CardFooter>
        </Card>
      </a>
    </CardContainer>
  );

  const description = (
    <Box mb={[0, 3, 5]} style={{ width: '80%' }}>
      <Text as="p" color="primary" mb={3} fontSize={[2, 3]}>
        Need a tool to generate process diagrams from events logs?
        <br />
        We have a solution for you.
      </Text>
      <Text as="p" color="primary" fontSize={[2, 3]}>
        This is a free tool that will help you generate and visualize the
        activities of your process in BPMN standard.
      </Text>
    </Box>
  );

  const video = (
    <Box
      mb={[0, 3, 5]}
      width={'80%'}
      height={'300px'}
      style={{ width: '80%' }}
      textAlign={'center'}
    >
      <Image
        height={'auto'}
        style={{ borderRadius: '5px' }}
        css={{ aspectRatio: 'attr(width) / attr(height)' }}
        src={AppPreview}
        alt={'Generation Model Application Demo'}
      />
    </Box>
  );

  const explanation = (
    <Text
      as="p"
      color="primary"
      fontSize={[2, 3]}
      mb={[0, 3, 5]}
      style={{ width: '80%' }}
    >
      For more information, please visit the following article:
    </Text>
  );

  return (
    <Layout title={PAGE.bpmn_generator}>
      <PageHeader />
      <Section.Container Background={Background}>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 8]}
          mb={[3, 4, 4]}
          mt={[5, 5, 6]}
        >
          BPMN model generation
        </Heading>
        <Flex marginTop={['2rem', '6rem', '10rem']}>
          {ifr}
          <Flex
            ml={[0, 3, 6]}
            flexDirection={['row', 'column']}
            justifyContent="center"
            alignItems="center"
            width={'80%'}
          >
            {description}
            {video}
            {explanation}
            {articleContainer}
          </Flex>
        </Flex>
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
