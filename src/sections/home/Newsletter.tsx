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
  Button,
  Container,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Theme,
} from '@mui/material';

import { useMobileViewStatus } from '../../hooks';
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
        <Grid
          container
          alignItems="center"
          flexDirection={useMobileViewStatus() ? 'column' : 'row'}
        >
          <Grid
            item
            sm={12}
            md={8}
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}
          >
            <MKTypography variant="h4">
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Receive our low-traffic Newsletter
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
          <Grid item xs={12} md={3} sx={{ m: 'auto', textAlign: 'center' }}>
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
  const isMobileView = useMobileViewStatus();
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
      //   spacing={1}
      onSubmit={handleSubmit}
      justifyContent={isMobileView ? 'center' : 'start'}
    >
      <Grid
        container
        flexDirection={isMobileView ? 'column' : 'row'}
        spacing={1}
        // mb={3}
      >
        <Grid item md={8} ml={isMobileView ? 0 : 1} mb={isMobileView ? 1.5 : 0}>
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            fullWidth
            placeholder="Email address"
            autoComplete="email"
            // size="small"
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
        <Grid item md={4} justifyContent="center" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              height: '100%',
              borderRadius: ({ borders }: Theme) => borders.borderRadius.lg,
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
      {error && (
        <Grid item p={0} md={8} mt={isMobileView ? 3 : 0}>
          <FormHelperText variant="outlined" error={error}>
            {props.responseMsg}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

const ResponseContainer: FC<ResponseContainerProps> = props => (
  <MKBox color="success">
    <MKTypography
      variant="body1"
      fontWeight="bold"
      overflow={{ wrap: 'break-word' }}
    >
      {props.msg}
      {'\u00A0'} {/* Non-breaking space */}
      <CheckCircle sx={{ verticalAlign: 'middle' }} />
    </MKTypography>
  </MKBox>
);
