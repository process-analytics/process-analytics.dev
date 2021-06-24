import React from 'react';
import SocialLink from '../components/SocialLink';
import CardFooter from './CardFooter';
import { Box, Flex, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Library as LibraryType } from '../types';
import { Card } from './Card';

type Props = LibraryType;

const Library = ({
                     name,
                     description,
                     example,
                     repository,
                     type,
                 }: Props) => (
    <Card p={0}>
        <Flex style={{ height: CARD_HEIGHT}}>
            <TextContainer>
                <span>
                  <Title my={2} pb={1} color="text">
                    {name}
                  </Title>
                </span>
                <Text width={[1]} style={{ overflow: 'auto' }} color="text">
                    {description}
                </Text>
            </TextContainer>

            <InfoContainer>
                <LinksContainer>
                    <Flex
                        m={1}
                        style={{
                            float: 'right',
                        }}
                    >
                        <Box mx={1} fontSize={4}>
                            <SocialLink name="Repository" icon="github" url={repository} />
                        </Box>
                        <Box mx={1} fontSize={4}>
                            <SocialLink name="Example" icon="globe" url={example} />
                        </Box>
                    </Flex>
                </LinksContainer>
                <CardFooter
                    bg="primary"
                    color="background"
                    position="bottom-right"
                    round
                >
                    {type}
                </CardFooter>
            </InfoContainer>
        </Flex>
    </Card>
);

const CARD_HEIGHT = '200px';
const INFO_CONTAINER_WIDTH = '100px';

const MEDIA_QUERY_SMALL = '@media (max-width: 350px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - ${INFO_CONTAINER_WIDTH});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${INFO_CONTAINER_WIDTH} / 2));
  }
`;

const InfoContainer = styled.div`
  margin: auto;
  width: ${INFO_CONTAINER_WIDTH};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${INFO_CONTAINER_WIDTH} / 2);
  }
`;

const LinksContainer = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: 3.5px;
`;

export default Library;
