import { getRandomBoolean, getRandomCategory, getRandomImageNumber, typeAssets } from './index';

// FOOTER
function getRandomCodeFooter() {
  const codes = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];
  return codes[Math.floor(Math.random() * codes.length)];
}

export function getRandomFooter(themeName: string, sections?: string) {
  const code = getRandomCodeFooter();
  const category = themeName === 'multi-portal' ? getRandomCategory() : sections;

  return {
    code,
    ...(code === 'f6' &&
      getRandomBoolean() && {
        image:
          themeName === 'converter-portal'
            ? `converter/${Math.floor(Math.random() * 49) + 1}.png`
            : `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`,
      }),
    style: {
      background: getRandomBoolean(),
    },
  };
}
