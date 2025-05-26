import {
  getRandomCategory,
  shuffleValue,
  addRandomIndex,
  getRandomUniqueOrder,
  getRandomBoolean,
  getRandomImageNumber,
  buttonVariant,
  buttonStyle,
  typeAssets,
  itemsFeatures,
  itemsFeaturesConverter,
} from './index';

// FEATURE
function getRandomCodeFeature() {
  const codes = ['f1'];
  return codes[Math.floor(Math.random() * codes.length)];
}

export function getRandomFeature(themeName: string, sections?: string) {
  const category = themeName === 'multi-portal' ? getRandomCategory() : sections;
  const shuffledFeatures =
    themeName === 'converter-portal'
      ? shuffleValue(itemsFeaturesConverter).slice(0, 3)
      : shuffleValue(itemsFeatures).slice(0, 3);
  const randomItems = addRandomIndex(shuffledFeatures);

  return {
    order: getRandomUniqueOrder(),
    code: getRandomCodeFeature(),
    items: randomItems,
    ...(getRandomBoolean() && {
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
    }),
    buttonVariant,
    buttonStyle,
    style: {
      background: getRandomBoolean(),
      iconTop: getRandomBoolean(),
      displayButton: getRandomBoolean(),
      displayCard: false,
    },
  };
}
