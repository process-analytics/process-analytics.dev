import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import SocialLink from './SocialLink';
import Link from './Link';
import { GATSBY_URL, MEDIA_QUERY_SMALL } from '../utils/constants';
import { landing } from '../../content/LandingContent';
import { header } from '../../content/HeaderContent';

const Footer = (): JSX.Element => {
  const { title, socialLinks } = landing;
  const { logo } = header;

  return (
    <Box p={[2, 3]} backgroundColor="primary" id="footer" as="footer">
      <FooterContainer>
        <Flex>
          <Fade direction="left" triggerOnce>
            <Box>
              <Image
                src={logo.src}
                height={['15px', '40px']}
                width={['15px', '40px']}
                alt="Process Analytics Logo"
              />
            </Box>
          </Fade>
          <Box color="background" mx={[1, 2]}>
            <Fade direction="left" triggerOnce>
              <Text fontSize={[2, 3]} color="background">
                {title}
              </Text>
              <AttributionContainer>
                <Text>
                  <span>Powered by </span>
                  <Link href={GATSBY_URL}>Gatsby</Link>
                  <span> and inspired from the </span>
                  <Link href="https://github.com/EmaSuriano/gatsby-theme-mate">
                    Gatsby Theme Mate
                  </Link>
                  &nbsp;
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </Text>
              </AttributionContainer>
            </Fade>
          </Box>
        </Flex>
        <Flex>
          <Fade direction="right" triggerOnce cascade damping={0.5}>
            {socialLinks.map(sl => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
                <SocialLink {...sl} invert />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  ${MEDIA_QUERY_SMALL} {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const AttributionContainer = styled.div`
  font-size: 14px;
  font-style: italic;

  ${MEDIA_QUERY_SMALL} {
    font-size: 7px;
  }
`;

export default Footer;
