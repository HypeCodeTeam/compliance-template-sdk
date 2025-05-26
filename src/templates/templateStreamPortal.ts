import { getRandomBanner } from '../utils/banner';
import { getRandomFAQ } from '../utils/faq';
import { getRandomFeature } from '../utils/features';
import { getRandomFooter } from '../utils/footer';
import { getRandomHncHeader, getRandomHcHeader } from '../utils/header';
import {
  getRandomImageNumber,
  includeBanner,
  includeFeature,
  includeFAQ,
  includePlan,
  getRandomBoolean,
  categoriesArray,
  alignment,
  buttonStyle,
  buttonVariant,
  getRandomNumber,
  typeAssets,
  direction,
  getColorTheme,
} from '../utils/index';
import { getRandomPlan } from '../utils/plan';
import { getRandomSectionTop } from '../utils/sectionTop';
import {
  getRandomThemeAnimationCard,
  getRandomThemeFont,
  getRandomThemeForm,
  getRandomThemeLogo,
  getRandomThemeMode,
  getRandomThemeTranslation,
} from '../utils/theme';

// SECTION-HNC
function getRandomHncSection() {
  const sectionCodes = ['s1', 's2', 's3'];
  const sectionConfig = {
    s1: [4, 6, 8],
    s2: [4],
    s3: [4],
  };

  const numSections = Math.floor(Math.random() * sectionCodes.length) + 1;
  const selectedSections = sectionCodes.sort(() => Math.random() - 0.5).slice(0, numSections);

  const processedSectionData = {
    order: 1,
    items: [],
  };

  const availableOrders = Array.from({ length: sectionCodes.length }, (_, i) => i + 1);
  const shuffledOrders = availableOrders.sort(() => Math.random() - 0.5);

  selectedSections.forEach((code, index) => {
    const categoriesArray = ['movies', 'music'];
    const possibleLengths = sectionConfig[code];
    const numElements = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];

    const category = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];

    const elements = Array.from({ length: numElements }, () => ({
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
    }));

    return processedSectionData.items.push({
      order: shuffledOrders[index],
      code,
      elements,
      ...(code === 's2' && {
        style: {
          background: getRandomBoolean(),
          direction,
        },
      }),
    });
  });
}

// SECTION-HC
function getRandomCodeSectionsHc() {
  const codes = ['s1', 's2', 's3', 's4', 's5'];
  return codes[Math.floor(Math.random() * codes.length)];
}

function processItemHcStyles(selectedCode: string) {
  const processedStyles = {};

  switch (selectedCode) {
    case 's1':
    case 's2':
    case 's4':
      processedStyles.background = getRandomBoolean();
      break;
    case 's3':
      processedStyles.direction = direction;
      processedStyles.background = getRandomBoolean();
      processedStyles.displayCard = getRandomBoolean();
      break;
    default:
      break;
  }

  return processedStyles;
}

function getCategoryItemLimit(categoryCode: string) {
  switch (categoryCode) {
    case 's1':
      return getRandomNumber(5, 8);
    case 's2':
      return getRandomNumber(5, 7);
    case 's3':
      return getRandomNumber(5, 9);
    case 's4':
      return getRandomNumber(10, 19);
    default:
      return getRandomNumber(5, 11);
  }
}

function getRandomHcSection() {
  const processedSectionData = {
    order: 1,
    items: {},
  };

  categoriesArray.forEach((category, index) => {
    const categoryCode = getRandomCodeSectionsHc();

    processedSectionData.items[category] = {
      order: index + 1,
      code: categoryCode,
      item: getCategoryItemLimit(categoryCode),
      ...(categoryCode === 's5' && {
        divider: true,
        alignment,
        buttonStyle,
        buttonVariant,
      }),
      style: processItemHcStyles(categoryCode),
    };
  });

  return processedSectionData;
}

// DETAILS
function getRandomCodeSubcategories() {
  const codes = ['c1', 'c2'];
  return codes[Math.floor(Math.random() * codes.length)];
}

function getRandomDetails() {
  const processedSectionData = {
    sectionTop: {},
    subcategories: {
      code: getRandomCodeSubcategories(),
      assets: Math.floor(Math.random() * 20) + 1,
    },
  };

  categoriesArray.forEach(category => {
    const categoryData = {
      headerImage: `${category}/headers/${getRandomImageNumber(category, 'headers')}.png`,
      detailImage: `${category}/details/${getRandomImageNumber(category, 'details')}.png`,
    };
    processedSectionData.sectionTop[category] = categoryData;
  });

  return processedSectionData;
}

export function templateStreamPortal(themeName: string, sections: string) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(themeName, sections),
      sections: getRandomHncSection(),
      ...(includeFeature && { features: getRandomFeature(themeName, sections) }),
      ...(includeBanner && { banner: getRandomBanner(themeName, sections) }),
      ...(includePlan && { plan: getRandomPlan(themeName, sections) }),
      ...(includeFAQ && { faq: getRandomFAQ() }),
      footer: getRandomFooter(themeName, sections),
    },
    hc: {
      header: getRandomHcHeader(),
      sections: getRandomHcSection(),
      ...(includeFeature && { features: getRandomFeature(themeName, sections) }),
      ...(includeBanner && { banner: getRandomBanner(themeName, sections) }),
      ...(includePlan && { plan: getRandomPlan(themeName, sections) }),
      footer: getRandomFooter(themeName, sections),
    },
    details: getRandomDetails(),
    theme: {
      logo: getRandomThemeLogo(),
      mode: getRandomThemeMode(),
      animationCard: getRandomThemeAnimationCard(),
      form: {
        code: getRandomThemeForm(),
        image: getRandomBoolean(),
        page: getRandomBoolean(),
      },
      translation: getRandomThemeTranslation(),
      fontFamily: getRandomThemeFont(),
      primaryColor: getColorTheme().primaryColor || '#fff',
      secondaryColor: getColorTheme().secondaryColor || '#fff',
    },
  };
}
