import { getRandomBanner } from '../utils/banner';
import { getRandomFAQ } from '../utils/faq';
import { getRandomFeature } from '../utils/features';
import { getRandomFooter } from '../utils/footer';
import { getRandomHncHeader, getRandomHcHeader } from '../utils/header';
import {
  buttonVariant,
  buttonStyle,
  getRandomImageNumber,
  limits,
  getRandomBoolean,
  shuffleValue,
  includeFeature,
  includeBanner,
  includeFAQ,
  includePlan,
  categoriesArray,
  alignment,
  direction,
  getColorTheme,
  typeAssets,
  getAlignment,
  getContentPosition,
} from '../utils/index';
import { getRandomPlan } from '../utils/plan';
import { getRandomSectionTop } from '../utils/sectionTop';
import {
  getRandomThemeLogo,
  getRandomThemeMode,
  getRandomThemeAnimationCard,
  getRandomThemeForm,
  getRandomThemeTranslation,
  getRandomThemeFont,
} from '../utils/theme';

// SECTIONS-HNC
function getRandomCodeSectionsHnc() {
  const codes = ['s1', 's2', 's3', 's4', 's5', 's6'];
  return codes[Math.floor(Math.random() * codes.length)];
}

function getRandomHncSection() {
  const selectedCode = getRandomCodeSectionsHnc();

  const processedSectionData = {
    order: 1,
    code: selectedCode,
    items: {},
  };

  shuffleValue(categoriesArray).forEach((category, index) => {
    let imagePath: string;

    if (selectedCode === 's4') {
      const categoryLimits = limits[category] || limits.default;
      const typeLimits = categoryLimits[typeAssets];
      const maxIndex = typeLimits[1];
      imagePath = `${category}/${typeAssets}/${maxIndex}`;
    } else {
      imagePath = `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`;
    }

    processedSectionData.items[category] = {
      order: index + 1,
      image: imagePath,
      buttonVariant,
      buttonStyle,
      alignment: getAlignment(selectedCode, index),
      ...(selectedCode === 's1' && {
        contentPosition: getContentPosition(index),
      }),
    };
  });

  return processedSectionData;
}

// SECTION-HC
function getRandomCodeSectionsHc() {
  const codes = ['s1', 's2', 's3', 's4', 's5'];
  return codes[Math.floor(Math.random() * codes.length)];
}

function processItemHcStyles(selectedCode: string) {
  const processedStyles: Record<string, boolean | string> = {};

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
      return Math.floor(Math.random() * 4) + 5;
    case 's2':
      return Math.floor(Math.random() * 3) + 5;
    case 's3':
      return Math.floor(Math.random() * 5) + 5;
    case 's4':
      return Math.floor(Math.random() * 10) + 10;
    default:
      return Math.floor(Math.random() * 7) + 5;
  }
}

function getRandomHcSection() {
  const processedSectionData = {
    order: 1,
    items: {},
  };

  shuffleValue(categoriesArray).forEach((category, index) => {
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
      assets: 1,
    },
  };

  categoriesArray.forEach(category => {
    const categoryData = {
      headerImage: `${category}/headers/${getRandomImageNumber('headers', category)}.png`,
      detailImage: `${category}/details/${getRandomImageNumber('details', category)}.png`,
    };
    processedSectionData.sectionTop[category] = categoryData;
  });

  return processedSectionData;
}

export function templateMultiPortal(themeName: string) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(themeName),
      sections: getRandomHncSection(),
      ...(includeFeature && { features: getRandomFeature(themeName) }),
      ...(includeBanner && { banner: getRandomBanner(themeName) }),
      ...(includeFAQ && { faq: getRandomFAQ() }),
      ...(includePlan && { plan: getRandomPlan(themeName) }),
      footer: getRandomFooter(themeName),
    },
    hc: {
      header: getRandomHcHeader(),
      sectionTop: getRandomSectionTop(themeName),
      sections: getRandomHcSection(),
      footer: getRandomFooter(themeName),
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
