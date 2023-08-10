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

import {
  faCheckCircle,
  // faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { BaseSyntheticEvent, FC, useState } from 'react';

// @mui material components
import {
  Button,
  Container,
  Grid,
  //  styled,
  TextField,
  Theme,
} from '@mui/material';

// Material Kit 2 React components
import { MKBox, MKTypography, Section } from '../../components';

// Images
import logo from '../../assets/images/logo.svg';

type FormProps = {
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
  error: boolean;
  responseMsg: string;
};

type ResponseContainerProps = {
  msg: string;
};

export const Newsletter: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  //  const [email, setEmail] = useState('');

  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();

    //  setEmail(event.currentTarget.value);

    const response = { failed: false, msg: 'plop', result: 'ok' };
    // await addToMailchimp(email);

    setError(response.result === 'error');
    setResponseMsg(response.msg);
    setSubmitted(!error);
  };

  return (
    <Section>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            sm={12}
            md={6}
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
                onSubmit={handleSubmit}
                error={error}
                responseMsg={responseMsg}
              />
            )}
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: 'auto' }}>
            <MKBox position="relative">
              <MKBox component="img" src={logo} alt="macbook" width="40%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

const ResponseContainer: FC<ResponseContainerProps> = props => (
  <MKBox display="flex" color="success" alignItems="center">
    <MKTypography
      variant="body1"
      fontWeight="bold"
      overflow={{ wrap: 'break-word' }}
    >
      {props.msg}
    </MKTypography>
    <FontAwesomeIcon
      size="lg"
      icon={faCheckCircle}
      style={{ marginLeft: '1rem' }}
    />
  </MKBox>
);

const Form: FC<FormProps> = props => (
  <Grid component="form" container spacing={1} onSubmit={props.onSubmit}>
    <Grid item xs={8}>
      <TextField
        type="email"
        variant="outlined"
        color="primary"
        label="Email"
        fullWidth
        placeholder="Email address"
        autoComplete="email"
        size="small"
        error={props.error}
        helperText={
          props.error ? props.responseMsg ?? 'Incorrect entry.' : undefined
        }
        required
      />
    </Grid>
    <Grid item xs={4}>
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
);
