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
declare module 'gatsby-plugin-mailchimp' {
  type MailchimpResult = 'success' | 'error';

  export interface MailchimpResponse {
    result: MailchimpResult;
    msg: string;
  }
  export interface MailchimpFields {
    [key: string]: string;
  }

  // This function is made available by the plugin gatsby-plugin-mailchimp at runtime
  /*email: String – required; the email address you want to subscribe
  fields: Object – optional; add'l info (columns) you want included w/ this subscriber
  endpointOverride: String – optional; if you want to override the default MC mailing list that's listed in your gatsby-config, pass the list in here*/
  function addToMailchimp(
    email: string,
    listFields?: MailchimpFields,
    endpointOverride?: string,
  ): Promise<MailchimpResponse>;
  export default addToMailchimp;
}
