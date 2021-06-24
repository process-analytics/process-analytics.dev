import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { prefix as brandPrefix } from '@fortawesome/free-brands-svg-icons';
import { prefix as basePrefix } from '@fortawesome/free-solid-svg-icons';
import { ICONS } from '../icons';

export const loadIcons = () => library.add(...ICONS);

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
