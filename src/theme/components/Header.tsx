import React from 'react';
import Headroom from 'react-headroom';
import {
  Box,
  Link as RebassLink,
  Flex,
  Image,
  Button,
} from 'rebass/styled-components';
import styled from 'styled-components';
import Link from './Link';
import { capitalize } from '../utils/string';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import { helmet } from '../../content/HelmetContent';

const Header = (): JSX.Element => {
  const { profile } = helmet;

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <RebassLink href={`#${getSectionHref(SECTION.home)}`} variant="empty">
          <Flex justifyContent="center">
            <Image
              src={profile.logo.src}
              height={['60px', '80px']}
              width={['60px', '80px']}
              alt="Process Analytics Logo"
              p={2}
              css={{ borderRadius: '20px', cursor: 'pointer' }}
            />
          </Flex>
        </RebassLink>
        <Flex mr={[0, 3, 5]}>
          {Object.keys(SECTION)
            .filter(id => id !== 'home')
            .map(id => (
              <Box
                key={id}
                ml={[2, 3]}
                mt="auto"
                mb="auto"
                color="background"
                fontSize={[2, 3]}
              >
                <Link href={`#${id}`} tabIndex={0}>
                  {capitalize(id)}
                </Link>
              </Box>
            ))}
          <Box ml={[2, 3]} fontSize={[2, 3]}>
            <Button variant="secondary">
              <RebassLink
                href="https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html"
                color="inherit"
                style={{ textDecorationLine: 'inherit' }}
              >
                Demo
              </RebassLink>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
