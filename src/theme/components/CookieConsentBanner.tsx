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
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vanilla-cookieconsent" />

import { CookieManager } from '../../helper';

import Logo from '../../images/logo.svg';

const cookieManager = new CookieManager();

const analyticsCookieCategory = 'analytics';
const cookieExpirationDays = 365;

const handleAnalyticsCategory = (cookie: SavedCookieContent): void => {
  if (cookie.categories.includes(analyticsCookieCategory)) {
    cookieManager.setAllAnalyticsCookies(cookieExpirationDays);
  } else {
    gaOptout();

    // Clean the unnecessary cookies
    cookieManager.deleteAllAnalyticsCookies();
  }
};

export const initCookieConsentBanner = (): void => {
  if (
    process.env.GATSBY_GA_MEASUREMENT_ID &&
    !document.getElementById('cc--main')
  ) {
    const cookieConsent = initCookieConsent();

    cookieConsent.run({
      autorun: true,
      auto_language: 'document',
      current_lang: 'en',
      autoclear_cookies: true, // default: false
      cookie_expiration: cookieExpirationDays, // default: 182
      // page_scripts: true, // default: false
      force_consent: true, // default: false

      revision: 2, // default: 0

      gui_options: {
        consent_modal: {
          layout: 'cloud',
          position: 'bottom center',
          transition: 'slide',
          swap_buttons: false,
        },
        settings_modal: {
          layout: 'bar',
          position: 'right',
          transition: 'slide',
        },
      },

      onFirstAction: (
        userPreferences: UserPreferences,
        cookie: SavedCookieContent,
      ): void => {
        handleAnalyticsCategory(cookie);
      },

      onAccept: (savedCookieContent: SavedCookieContent): void => {
        handleAnalyticsCategory(savedCookieContent);
      },

      onChange: (
        cookie: SavedCookieContent,
        changedCookieCategories: string[],
      ): void => {
        if (changedCookieCategories.includes(analyticsCookieCategory)) {
          handleAnalyticsCategory(cookie);
        }
      },

      languages: {
        en: {
          consent_modal: {
            title: '🍪 Our way of improving your experience!',
            description:
              '<p>This website uses essential cookies to ensure its proper functioning and tracking cookies to analyze your interaction with it. The latter are only activated with your consent.</p></br>' +
              '<button type="button" data-cc="c-settings" class="cc-link">Manage your settings!</button>',
            revision_message:
              '<p>Important update: Our Terms and Conditions have changed. Please take a moment to review our updated policies.</p></br>' +
              'Thank you for your understanding 🙂',
            primary_btn: {
              text: 'Accept all',
              role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: 'Deny',
              role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: `<img src="${Logo}" alt="Logo" loading="lazy" style="height: calc(100% - 2rem); margin: 1rem auto;">`,
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all', // optional, [v.2.5.0 +]
            cookie_table_headers: [
              { name: 'Name' },
              { domain: 'Domain' },
              { expiration: 'Expiration' },
              { description: 'Description' },
            ],
            blocks: [
              {
                title: 'Cookie settings',
                description:
                  'Cookies are used on this website to provide essential functionality and to enhance your browsing experience. You can choose to accept or decline each category at any time.',
              },
              {
                title: 'Essential Cookies',
                description:
                  'Essential cookies are necessary for the proper functioning of our website. Without them, the website would not function effectively.',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true,
                },
              },
              {
                title: 'Analytics Cookies',
                description:
                  'These cookies track your behavior on the website, including the pages you visit and the links you click. All information is anonymous and cannot be used to identify you.',
                toggle: {
                  value: analyticsCookieCategory,
                  enabled: false,
                  readonly: false,
                },
                cookie_table: cookieManager.analyticsCookies.map(cookie => ({
                  ...cookie,
                  expiration: `${cookieExpirationDays} days`,
                })),
              },

              // TODO To uncomment when we have a page for the policy
              /*              {
                title: 'More information',
                description:
                  'For more details relative to cookies and other sensitive data, please read the full <a class="cc-link" href="#yourwebsite">privacy policy</a>.',
              },*/
            ],
          },
        },
      },
    });

    document
      .getElementById('cc--main')
      ?.classList.add('pa_cookie_consent_theme');
  }
};
