/**
 * Copyright 2023 Bonitasoft S.A.
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

/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { BaseSyntheticEvent, FC, useState } from 'react';

import { CheckCircle, ErrorOutline } from '@mui/icons-material';

// @mui material components
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';

import { borders, boxShadows } from '../../assets/theme';
import { MKBox, MKTypography, Section } from '../../components';

// Images
import logo from '../../assets/images/logo.svg';

type FormProps = {
  onSubmit: (submitted: boolean, responseMsg: string) => void;
  responseMsg: string;
};

type ResponseContainerProps = {
  msg: string;
};

export const Newsletter: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  return (
    <Section>
      <Container>
        <Grid container alignItems="center" flexDirection={['column', 'row']}>
          <Grid
            item
            md={8}
            mr="auto"
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 8, md: 0 } }}
          >
            <MKTypography variant="h4" mb={1} ml={-0.25}>
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3} ml={0}>
              Join our low-traffic newsletter and get news in your inbox!
            </MKTypography>
            {submitted ? (
              <ResponseContainer msg={responseMsg} />
            ) : (
              <Form
                onSubmit={(submitted, responseMsg) => {
                  setSubmitted(submitted);
                  setResponseMsg(responseMsg);
                }}
                responseMsg={responseMsg}
              />
            )}
          </Grid>
          <Grid item md={3} m="auto" sx={{ textAlign: 'center' }} width="100%">
            <MKBox
              component="img"
              src={logo}
              alt="macbook"
              maxWidth="80%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

const Form: FC<FormProps> = props => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const isEmailValid = (email: string): boolean => {
    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };
  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();

    setError(false);
    props.onSubmit(false, '');

    if (!isEmailValid(email)) {
      setError(true);
      props.onSubmit(false, 'Incorrect entry.');
      return;
    }

    const response = { msg: 'plop', result: 'ok' };
    // await addToMailchimp(email);

    const isError = response.result === 'error';
    setError(isError);
    props.onSubmit(!isError, response.msg);
  };

  return (
    <Grid
      component="form"
      container
      onSubmit={handleSubmit}
      justifyContent={['center', 'start']}
    >
      <Grid
        container
        flexDirection={['column', 'row']}
        spacing={1}
        alignItems={['center', 'start']}
      >
        <Grid item md={8} width="100%">
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            fullWidth
            placeholder="Email address"
            autoComplete="email"
            error={error}
            InputProps={{
              endAdornment: error ? (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              ) : undefined,
            }}
            required
            onChange={event => setEmail(event.target.value)}
          />
        </Grid>
        <Grid
          item
          md={4}
          justifyContent="center"
          alignItems="center"
          height={['auto', '100%']}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              height: '100%',
              borderRadius: borders.radius.lg,
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
      {error && (
        <Grid item md={8} mt={[3, 0]} p={0}>
          <FormHelperText variant="outlined" error={error}>
            {props.responseMsg}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

const ResponseContainer: FC<ResponseContainerProps> = props => (
  <Box
    bgcolor="success.contrastText"
    color="success.dark"
    width={['100%', '75%']}
    borderRadius={borders.radius.md}
    p={2}
    ml={-0.25}
    boxShadow={boxShadows.colored.success}
  >
    <MKTypography
      variant="body2"
      fontWeight="bold"
      overflow={{ wrap: 'break-word' }}
    >
      {props.msg}
      {'\u00A0'} {/* Non-breaking space */}
      <CheckCircle sx={{ verticalAlign: 'middle' }} />
    </MKTypography>
  </Box>
);
