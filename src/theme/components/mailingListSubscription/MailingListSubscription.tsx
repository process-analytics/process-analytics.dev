/**
 * Copyright 2021 Bonitasoft S.A.
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
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormContent } from './FormContent';
import colors from '../../colors.json';
import { Box, Flex } from 'rebass/styled-components';
import { Icon, OpenIcon, StyledOpenIcon } from './Icon';

const FormContainer = styled(Flex)`
  position: fixed;
  bottom: 2.5vh;
  right: 2.5vh;
  background-color: ${colors.secondary};
  color: ${colors.background};
  border-radius: 50%;
  width: 3.5rem;
  max-width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s 0.45s, height 0.2s $easer 0.25s,
    max-width 0.2s $easer 0.35s, width 0.2s $easer 0.35s;

  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${(props: ExpandProps) =>
    props.open &&
    `background-color: ${colors.secondary};
     cursor: auto;
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.17);
     border-radius: 0;
     width: 70%;
     max-width: 610px;
     height: 30%;
     padding: 0;
     transition: all 0.2s, max-width 0.2s $easer 0.1s, height 0.3s ease 0.25s;
     `};

  @media (max-width: 600px) {
    ${(props: ExpandProps) =>
      props.open &&
      `
      height: 100%;
      width: 100%;
      max-width: 100%;
      overflow: initial;
      overflow-x: hidden;
      bottom: 0;
   `};
  }
`;

export interface ExpandProps {
  open: boolean;
}

export const MailingListSubscription = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  /*  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [open]);*/

  return (
    <>
      {/*<Overlay open={open} onClick={() => setOpen(false)} />*/}
      <FormContainer open={open} flexDirection={'column'}>
        {!open && (
          <OpenIcon visible={open} icon={faPen} onClick={() => setOpen(true)} />
        )}
        {open && (
          /*  <Fade>*/
          <>
            <Icon
              visible={!open}
              icon={faWindowClose}
              onClick={() => setOpen(false)}
              css={{ marginTop: '1rem', marginBottom: '1rem' }}
            />
            <FormContent open={open} />
          </>
          /*</Fade>*/
        )}
      </FormContainer>
    </>
  );
};
