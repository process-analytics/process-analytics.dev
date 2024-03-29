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
import { SECTION } from './constants';

export const getSectionHref = (section: SECTION): string => {
  return Object.keys(SECTION)[Object.values(SECTION).indexOf(section)];
};

export function splitArrayByColumns<T>(
  array: T[],
  rowsPerColumn: number,
): T[][] {
  return array.reduce((resultArray: T[][], item, index) => {
    const chunkIndex = Math.floor(index / rowsPerColumn);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}
