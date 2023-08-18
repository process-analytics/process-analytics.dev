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
import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import {
  faDev,
  faDiscord,
  faGithub,
  faMedium,
  faTwitter,
  faYoutube,
  prefix as brandPrefix,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faBoltLightning,
  faBook,
  faDatabase,
  faGlobe,
  faInfo,
  faLightbulb,
  faTools,
  prefix as basePrefix,
} from '@fortawesome/free-solid-svg-icons';

const ICONS: IconDefinition[] = [
  // brands
  faDev,
  faGithub,
  faMedium,
  faTwitter,
  faDiscord,
  faYoutube,
  // solid
  faArrowRight,
  faBoltLightning,
  faBook,
  faGlobe,
  faLightbulb,
  faTools,
  faInfo,
  faDatabase,
];

export const loadIcons = (): void => library.add(...ICONS);

export const getIconDefinition = (
  iconName: IconName,
): IconDefinition | null => {
  return [brandPrefix, basePrefix].reduce(
    (acc: IconDefinition | null, prefix) => {
      return acc || findIconDefinition({ prefix, iconName });
    },
    null,
  );
};
