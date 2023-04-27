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

export type Cookie = {
  name: string;
  domain: string;
  description: string;
};

export class CookieManager {
  readonly _analyticsCookies: readonly Cookie[] = [
    {
      name: '_ga',
      domain: 'google.com',
      description:
        'The main cookie is used by Google Analytics to distinguish one visitor from another and over time.',
    },
    {
      name: `_ga_${process.env.GATSBY_GA_MEASUREMENT_ID?.slice(2)}`,
      domain: 'google.com',
      description:
        'This cookie is used by Google Analytics to store and update a unique value for each page visited.',
    },
  ];

  /**
   * Provides an array of <code>Analytics</code> cookie names used by the website.
   *
   * @returns An array of <code>Analytics</code> cookie names.
   */
  get analyticsCookies(): readonly Cookie[] {
    return this._analyticsCookies;
  }

  /**
   * Create or modify all <code>Analytics</code> cookies.
   *
   * @param expirationDays The number of days until the cookie expires.
   **/
  setAllAnalyticsCookies(expirationDays: number): void {
    this._analyticsCookies.forEach(cookie =>
      this.setCookie(cookie.name, true, expirationDays),
    );
  }

  /**
   * Delete all <code>Analytics</code> cookies.
   */
  deleteAllAnalyticsCookies(): void {
    this._analyticsCookies.forEach(cookie => this.deleteCookie(cookie.name));
  }

  /**
   * Create or modify a cookie.
   *
   * @param name The name of the cookie to set.
   * @param newValue The value of the cookie to set.
   * @param expirationDays The number of days until the cookie expires.
   **/
  private setCookie = (
    name: string,
    newValue: boolean,
    expirationDays: number,
  ): void => {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${newValue};${expires};path=/`;
  };

  /**
   * Delete a cookie.
   *
   * @param name The name of the cookie to delete.
   */
  private deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
}
