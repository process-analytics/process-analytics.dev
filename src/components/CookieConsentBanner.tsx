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
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import type { Category, GuiOptions } from 'vanilla-cookieconsent';
import * as CookieConsent from 'vanilla-cookieconsent';
import { CookieManager } from '../helper';

import Logo from '../assets/images/logo.svg';

const cookieManager = new CookieManager();

const analyticsCookieCategory = 'analytics';
const cookieExpirationDays = 365;

const getGuiOptions = (): GuiOptions => ({
  consentModal: {
    layout: 'cloud',
    position: 'bottom center',
    flipButtons: false,
    equalWeightButtons: false,
  },
  preferencesModal: {
    layout: 'bar wide',
    position: 'right',
    flipButtons: true,
    equalWeightButtons: false,
  },
});

const getEn = (): CookieConsent.Translation => ({
  consentModal: {
    title: '🍪 Our way of improving your experience!',
    description:
      '<p>This website uses essential cookies to ensure its proper functioning and tracking cookies to analyze your interaction with it. The latter are only activated with your consent.</p></br>' +
      '<button type="button" data-cc="show-preferencesModal" class="cc__link">Manage your settings!</button>',
    revisionMessage:
      '<p>Important update: Our Terms and Conditions have changed. Please take a moment to review our updated policies.</p></br>' +
      'Thank you for your understanding 🙂',
    acceptAllBtn: 'Accept all',
    acceptNecessaryBtn: 'Accept only necessary',
  },

  preferencesModal: {
    title: `<img src="${Logo}" alt="Logo" loading="lazy" style="height: calc(100% - 2rem); margin: 1rem auto;">`,
    savePreferencesBtn: 'Save settings',
    acceptAllBtn: 'Accept all',
    acceptNecessaryBtn: 'Accept only necessary',
    sections: [
      {
        title: 'Cookie settings',
        description:
          'Cookies are used on this website to provide essential functionality and to enhance your browsing experience. You can choose to accept or decline each category at any time.',
      },
      {
        title: 'Essential Cookies',
        description:
          'Essential cookies are necessary for the proper functioning of our website. Without them, the website would not function effectively.',
        linkedCategory: 'necessary',
      },
      {
        title: 'Analytics Cookies',
        description:
          'These cookies track your behavior on the website, including the pages you visit and the links you click. All information is anonymous and cannot be used to identify you.',
        linkedCategory: analyticsCookieCategory,
        cookieTable: {
          headers: {
            name: 'Name',
            domain: 'Domain',
            expiration: 'Expiration',
            description: 'Description',
          },
          body: cookieManager.analyticsCookies.map(cookie => ({
            ...cookie,
            expiration: `${cookieExpirationDays} days`,
          })),
        },
      },

      // TODO To uncomment when we have a page for the policy
      /*              {
            title: 'More information',
            description:
              'For more details relative to cookies and other sensitive data, please read the full <a class="cc-link" href="#yourwebsite">privacy policy</a>.',
          },*/
    ],
  },
});

const getCategories = (): { [key: string]: Category } => ({
  necessary: { enabled: true, readOnly: true },
  [analyticsCookieCategory]: {
    enabled: false,
    readOnly: false,
    autoClear: {
      cookies: [{ name: /^(_ga|_gid)/ }],
    },
    services: {
      ga: {
        label: 'Google Analytics',
        onAccept: () => {
          cookieManager.setAllAnalyticsCookies(cookieExpirationDays);
        },
        onReject: () => {
          gaOptout();

          // Clean the unnecessary cookies
          cookieManager.deleteAllAnalyticsCookies();
        },
        cookies: [{ name: /^(_ga|_gid)/ }],
      },
    },
  },
});

export const initCookieConsentBanner = (): void => {
  if (
    process.env.GATSBY_GA_MEASUREMENT_ID &&
    !document.getElementById('cc-main')
  ) {
    void CookieConsent.run({
      autoClearCookies: true,
      autoShow: true,
      cookie: {
        expiresAfterDays: cookieExpirationDays,
      },
      disablePageInteraction: true,
      guiOptions: getGuiOptions(),
      hideFromBots: true,
      categories: getCategories(),
      language: {
        default: 'en',
        autoDetect: 'document',
        translations: { en: getEn() },
      },
      lazyHtmlGeneration: true,
      root: document.body,
      revision: 0,
    });

    document.documentElement.classList.add('pa_cookie_consent_theme');
  }
};
