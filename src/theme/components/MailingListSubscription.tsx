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
import React, { BaseSyntheticEvent } from 'react';
import { Button, Text } from 'rebass/styled-components';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';

export class MailingListSubscription extends React.Component {
  state: { email: string; result?: MailchimpResponse } = {
    email: '',
    result: undefined,
  };
  //const [email, setEmail] = useState('')

  // 1. via `.then`
  /*  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  };*/

  // 2. via `async/await`
  _handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ result: result });
  };

  _handleInputChange = (event: BaseSyntheticEvent) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      /*    this.state.result === "success" ? (
        <div>SUCCESS</div>
    ) : this.state.result === "error" ? (
        <div>ERROR</div>
    ) : */
      /*        .message {
          color: _palette(accent-orange);
      }*/
      <>
        <div
          className="message"
          dangerouslySetInnerHTML={{ __html: this.state.result?.msg ?? '' }}
        />

        <form onSubmit={this._handleSubmit}>
          <Text
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
          <input
            className="subscribe-email"
            type="email"
            name="email"
            placeholder="Enter Email Address..."
            value={this.state.email}
            onChange={this._handleInputChange}
          />

          <br />
          <Button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </>
    );
  }
}
