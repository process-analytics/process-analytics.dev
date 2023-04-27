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

export class CookieManager {
  /**
   * Create or modify a cookie.
   *
   * @param name The name of the cookie to set.
   * @param newValue The value of the cookie to set.
   * @param expirationDays The number of days until the cookie expires.
   **/
  setCookie = (
    name: string,
    newValue: string | boolean,
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
  deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
}
