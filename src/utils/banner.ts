import {
  getRandomCategory,
  getRandomUniqueOrder,
  getRandomImageNumber,
  buttonVariant,
  buttonStyle,
  typeAssets,
  alignment,
  contentPosition,
} from './index';

// BANNER
function getRandomCodeBanner() {
  const codes = ['b1'];
  return codes[Math.floor(Math.random() * codes.length)];
}

export function getRandomBanner(themeName: string, sections?: string) {
  const category = themeName === 'multi-portal' ? getRandomCategory() : sections;

  return {
    order: getRandomUniqueOrder(),
    code: getRandomCodeBanner(),
    image:
      themeName === 'converter-portal'
        ? `converter/${Math.floor(Math.random() * 49) + 1}.png`
        : `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`,
    contentPosition,
    alignment,
    buttonVariant,
    buttonStyle,
  };
}
