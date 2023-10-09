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
import { CreatePagesArgs } from 'gatsby';

import redirects from './redirects.json';

export async function createPages({ actions }: CreatePagesArgs): Promise<void> {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/model-generation-application-conditions/',
    toPath: '/',
    isPermanent: true,
    statusCode: 200,
  });

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: redirect.isPermanent,
      statusCode: redirect.statusCode,
    }),
  );
}
