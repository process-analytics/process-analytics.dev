import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';
import {
  Components,
  ReactBaseProps,
  ReactMarkdownProps,
  ReactNode,
} from 'react-markdown/src/ast-to-react';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph = styled(Text)`
  padding-bottom: 1em;
`;

const MarkdownList = styled.ul`
  margin: 0;
`;

const MarkdownListItem = styled.li`
  margin-bottom: 1em;
`;

const MarkdownLink = (
  props: ReactBaseProps & ReactMarkdownProps,
): ReactNode => {
  const href = props['href'] as string;
  const isInnerLink = href.startsWith('#');

  return isInnerLink ? (
    <StyledLink href={href}>{props.children}</StyledLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {props.children}
    </StyledLink>
  );
};

const components: Components = {
  p: MarkdownParagraph,
  ol: MarkdownList,
  li: MarkdownListItem,
  a: MarkdownLink,
};
export default components;
