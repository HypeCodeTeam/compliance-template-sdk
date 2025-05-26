var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getThemeTemplate: () => getThemeTemplate
});
module.exports = __toCommonJS(src_exports);

// src/utils/index.ts
var animationValues = [
  "fade",
  "slide",
  "flip",
  "scale",
  "rotate",
  "reveal",
  "blur",
  "stagger",
  "default"
];
var colorModes = ["light", "dark"];
var limits = {
  default: { headers: [1, 30], details: [32, 32] },
  astrology: { headers: [1, 45], details: [1, 44] },
  audiobooks: { headers: [1, 30], details: [1, 33] },
  fitness: { headers: [1, 67], details: [1, 65] },
  games: { headers: [1, 82], details: [1, 84] },
  movies: { headers: [1, 43], details: [1, 40] },
  music: { headers: [1, 40], details: [1, 38] },
  softwares: { headers: [1, 75], details: [1, 65] },
  sports: { headers: [1, 32], details: [1, 32] },
  security: { headers: [1, 30], details: [1, 29] }
};
var subCategories = {
  astrology: ["lovecompatibility", "horoscope", "practices", "zodiac"],
  games: [
    "action",
    "adventure",
    "arcade",
    "casual",
    "entertainment",
    "puzzle",
    "sports",
    "strategy"
  ],
  fitness: ["abdominal", "bodyweight", "dumbbell", "meditation", "pilates", "pregnancy"],
  security: ["convenience", "multimedia", "office", "security", "utilities"]
};
var categoriesArray = [
  "movies",
  "games",
  "softwares",
  "music",
  "audiobooks",
  "ebooks",
  "sports",
  "fitness",
  "astrology",
  "security"
];
var itemsFeatures = [
  "secure",
  "transaction",
  "experience",
  "desktop",
  "soundtrack",
  "book",
  "controllerGames",
  "desktopGames",
  "gym"
];
var itemsFeaturesConverter = [
  "secure",
  "transaction",
  "uploadFileCloud",
  "downloadCloud",
  "uploadFile",
  "converter",
  "download"
];
var usedNumbers = /* @__PURE__ */ new Map();
var buttonStyle = getRandomValue("rounded", "menu");
var buttonVariant = getRandomValue("default", "variant-2", "outline-2");
var alignment = getRandomValue("start", "center", "end");
var variant = getRandomValue("default", "modern");
var anchor = getRandomValue("left", "right");
var contentPosition = getRandomValue("left", "right");
var type = getRandomValue("absolute", "fixed", "default");
var iconPosition = getRandomValue("left", "right");
var typeAssets = getRandomValue("details", "headers");
var direction = getRandomValue("row", "row-reverse", "column", "column-reverse");
var includeBanner = Math.random() < 0.5;
var includeFeature = Math.random() < 0.5;
var includeFAQ = Math.random() < 0.5;
var includePlan = Math.random() < 0.5;
var includeCompatibledFormat = Math.random() < 0.5;
function getRandomCategory() {
  return categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
}
function getRandomUniqueOrder() {
  const availableOrders = [2, 3, 4];
  const randomIndex = Math.floor(Math.random() * availableOrders.length);
  const selectedOrder = availableOrders[randomIndex];
  availableOrders.splice(randomIndex, 1);
  return selectedOrder;
}
function getRandomImageNumber(type2, sections) {
  const categoryLimits = limits[sections] || limits.default;
  if (!categoryLimits || !categoryLimits[type2]) {
    throw new Error(`Limites non d\xE9finies pour la cat\xE9gorie "${sections}" et le type "${type2}"`);
  }
  const [min, max] = categoryLimits[type2];
  const key = `${sections}-${type2}`;
  if (!usedNumbers.has(key)) {
    usedNumbers.set(key, /* @__PURE__ */ new Set());
  }
  const used = usedNumbers.get(key);
  const availableNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min).filter(
    (num) => !used.has(num)
  );
  if (availableNumbers.length === 0) {
    used.clear();
    availableNumbers.push(...Array.from({ length: max - min + 1 }, (_, i) => i + min));
  }
  const selectedNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
  used.add(selectedNumber);
  return selectedNumber;
}
function getRandomBoolean() {
  return Math.random() < 0.5;
}
function addRandomIndex(items) {
  return items.map((item) => `${item}_${Math.floor(Math.random() * 2) + 1}`);
}
function getRandomValue(...args) {
  return args[Math.floor(Math.random() * args.length)];
}
function shuffleValue(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getSubCategories(category) {
  return subCategories[category] || [];
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
function getComplementaryColor(hex) {
  const r = 255 - parseInt(hex.slice(0, 2), 16);
  const g = 255 - parseInt(hex.slice(2, 4), 16);
  const b = 255 - parseInt(hex.slice(4, 6), 16);
  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");
  return `${rHex}${gHex}${bHex}`;
}
function getColorTheme() {
  const primaryColor = getRandomColor();
  const secondaryColor = getComplementaryColor(primaryColor);
  return {
    primaryColor: `#${primaryColor}`,
    secondaryColor: `#${secondaryColor}`
  };
}

// src/utils/banner.ts
function getRandomCodeBanner() {
  const codes = ["b1"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomBanner(themeName, sections) {
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  return {
    order: getRandomUniqueOrder(),
    code: getRandomCodeBanner(),
    image: themeName === "converter-portal" ? `converter/${Math.floor(Math.random() * 49) + 1}.png` : `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
    contentPosition,
    alignment,
    buttonVariant,
    buttonStyle
  };
}

// src/utils/compatibledFormat.ts
function getRandomCodeCompatibledFormat() {
  const codes = ["cf1", "cf2"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomCompatibledFormat() {
  return {
    order: getRandomUniqueOrder(),
    code: getRandomCodeCompatibledFormat(),
    buttonVariant,
    buttonStyle,
    contentPosition
  };
}

// src/utils/faq.ts
function getRandomCodeFAQ() {
  const codes = ["faq1", "faq2", "faq3"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomFAQ() {
  const code = getRandomCodeFAQ();
  const baseFAQ = {
    order: getRandomUniqueOrder(),
    code,
    item: Math.floor(Math.random() * 5) + 3
  };
  let style;
  switch (code) {
    case "faq3":
      style = {
        icon: getRandomBoolean(),
        border: getRandomBoolean()
      };
      break;
    case "faq2":
      break;
    default:
      style = {
        icon: getRandomBoolean(),
        iconPosition,
        border: getRandomBoolean()
      };
      break;
  }
  return style ? { ...baseFAQ, style } : baseFAQ;
}

// src/utils/features.ts
function getRandomCodeFeature() {
  const codes = ["f1"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomFeature(themeName, sections) {
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  const shuffledFeatures = themeName === "converter-portal" ? shuffleValue(itemsFeaturesConverter).slice(0, 3) : shuffleValue(itemsFeatures).slice(0, 3);
  const randomItems = addRandomIndex(shuffledFeatures);
  return {
    order: getRandomUniqueOrder(),
    code: getRandomCodeFeature(),
    items: randomItems,
    ...getRandomBoolean() && {
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`
    },
    buttonVariant,
    buttonStyle,
    style: {
      background: getRandomBoolean(),
      iconTop: getRandomBoolean(),
      displayButton: getRandomBoolean(),
      displayCard: false
    }
  };
}

// src/utils/footer.ts
function getRandomCodeFooter() {
  const codes = ["f1", "f2", "f3", "f4", "f5", "f6"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomFooter(themeName, sections) {
  const code = getRandomCodeFooter();
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  return {
    code,
    ...code === "f6" && getRandomBoolean() && {
      image: themeName === "converter-portal" ? `converter/${Math.floor(Math.random() * 49) + 1}.png` : `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`
    },
    style: {
      background: getRandomBoolean()
    }
  };
}

// src/utils/header.ts
function getRandomCodeHeader() {
  const codes = ["h1", "h2", "h3", "h4"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomHncHeader() {
  const code = getRandomCodeHeader();
  return {
    code,
    alignment,
    buttonVariant,
    buttonStyle,
    type,
    ...code === "h4" && {
      anchor,
      variant
    },
    style: {
      background: false
    }
  };
}
function getRandomHcHeader() {
  const code = getRandomCodeHeader();
  return {
    code,
    alignment,
    buttonStyle,
    type: code === "h3" || code === "h4" ? "fixed" : type,
    ...code === "h4" && {
      anchor,
      variant
    },
    style: {
      background: false
    }
  };
}

// src/utils/theme.ts
function getRandomThemeTranslation() {
  return Math.floor(Math.random() * 21) + 1;
}
function getRandomThemeAnimationCard() {
  return getRandomValue(...animationValues);
}
function getRandomThemeLogo() {
  return { white: false, card: false };
}
function getRandomThemeMode() {
  return colorModes[Math.floor(Math.random() * colorModes.length)];
}
function getRandomThemeForm() {
  return Math.random() < 0.5 ? "form" : "form1";
}
function getRandomThemeFont() {
  return Math.random() < 0.5 ? "Courier, monospace" : "Arial";
}

// src/utils/uploader.ts
function getRandomCodeUploader() {
  const codes = ["u1", "u2", "u3"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomUploader() {
  const code = getRandomCodeUploader();
  const hasButton = getRandomBoolean();
  const hasImage = getRandomBoolean();
  const uploader = {
    code,
    button: hasButton,
    ...hasButton && {
      buttonStyle,
      buttonVariant
    },
    ...hasImage && {
      image: `${Math.floor(Math.random() * 4) + 1}.png`
    }
  };
  switch (code) {
    case "u2":
    case "u3":
      uploader.imageOutside = `${Math.floor(Math.random() * 49) + 1}.png`;
      uploader.contentPosition = contentPosition;
      break;
    default:
      break;
  }
  return uploader;
}

// src/templates/templateConverterPortal.ts
function templateConverterPortal(themeName) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      uploader: getRandomUploader(),
      ...includeFeature && { features: getRandomFeature(themeName) },
      ...includeBanner && { banner: getRandomBanner(themeName) },
      ...includeFAQ && { faq: getRandomFAQ() },
      ...includeCompatibledFormat && {
        compatibledFormat: getRandomCompatibledFormat()
      },
      footer: getRandomFooter(themeName)
    },
    hc: {
      header: getRandomHcHeader(),
      footer: getRandomFooter(themeName)
    },
    theme: {
      logo: getRandomThemeLogo(),
      mode: getRandomThemeMode(),
      form: {
        code: getRandomThemeForm(),
        image: getRandomBoolean(),
        page: getRandomBoolean()
      },
      translation: getRandomThemeTranslation(),
      fontFamily: getRandomThemeFont(),
      primaryColor: getColorTheme().primaryColor || "#fff",
      secondaryColor: getColorTheme().secondaryColor || "#fff"
    }
  };
}

// src/utils/plan.ts
function getRandomCodePlan() {
  const codes = ["p1", "p2"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function generateXsItems(total) {
  const possibleValues = [2, 3, 4, 6];
  const items = [];
  let remaining = total;
  const filterValues = (val) => val <= remaining;
  while (remaining > 0) {
    const filteredValues = possibleValues.filter(filterValues);
    if (filteredValues.length === 0) {
      break;
    }
    const randomXs = filteredValues[Math.floor(Math.random() * filteredValues.length)];
    items.push({ xs: randomXs });
    remaining -= randomXs;
  }
  const currentTotal = items.reduce((sum, item) => sum + item.xs, 0);
  if (currentTotal !== total) {
    const difference = total - currentTotal;
    items[items.length - 1].xs += difference;
  }
  return items;
}
function addRandomImagesToItems(themeName, items, sections) {
  const numberOfImages = Math.floor(Math.random() * 3);
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  for (let i = 0; i < numberOfImages; i += 1) {
    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex].image = `${category}/${typeAssets}/${getRandomImageNumber(
      typeAssets,
      category
    )}.png`;
  }
  return items;
}
function getRandomPlan(themeName, sections) {
  const code = getRandomCodePlan();
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  const plan = {
    code,
    order: getRandomUniqueOrder()
  };
  if (code === "p1") {
    plan.image = `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`;
    plan.contentPosition = contentPosition;
  }
  if (code === "p2") {
    let topItems = generateXsItems(12);
    let bottomItems = generateXsItems(12);
    topItems = addRandomImagesToItems(themeName, topItems, sections);
    bottomItems = addRandomImagesToItems(themeName, bottomItems, sections);
    plan.items = [...topItems, ...bottomItems];
  }
  return plan;
}

// src/utils/sectionTop.ts
function getRandomCodeSectionTop() {
  const codes = ["st1", "st2", "st3"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomSectionTop(themeName, sections) {
  const code = getRandomCodeSectionTop();
  const category = themeName === "multi-portal" ? getRandomCategory() : sections;
  if (code === "st2") {
    return {
      code,
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
      contentPosition,
      buttonVariant,
      buttonStyle
    };
  }
  if (code === "st3") {
    return {
      code,
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
      contentPosition,
      alignment,
      buttonVariant,
      buttonStyle
    };
  }
  return {
    code,
    image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`,
    backgroundOpacity: true
  };
}

// src/templates/templateMonoPortal.ts
function getRandomHncSection(sections) {
  const sectionCodes = ["s1", "s2", "s3"];
  const sectionConfig = {
    s1: [4, 6, 8],
    s2: [4],
    s3: [4]
  };
  const numSections = Math.floor(Math.random() * sectionCodes.length) + 1;
  const selectedSections = sectionCodes.sort(() => Math.random() - 0.5).slice(0, numSections);
  const processedSectionData = {
    order: 1,
    items: []
  };
  const availableOrders = Array.from({ length: sectionCodes.length }, (_, i) => i + 1);
  const shuffledOrders = availableOrders.sort(() => Math.random() - 0.5);
  selectedSections.forEach((code, index) => {
    if (sectionConfig[code]) {
      const numGenres = sectionConfig[code][Math.floor(Math.random() * sectionConfig[code].length)];
      const randomGenres = getSubCategories(sections).sort(() => 0.5 - Math.random()).slice(0, numGenres);
      processedSectionData.items.push({
        order: shuffledOrders[index],
        code,
        elements: randomGenres.map((genre) => ({
          ...code === "s2" && { title: genre },
          image: `${sections}/${typeAssets}/${getRandomImageNumber(typeAssets, sections)}.png`
        })),
        ...code === "s2" && {
          style: {
            background: getRandomBoolean(),
            direction
          }
        }
      });
    }
  });
  return processedSectionData;
}
function getRandomHcSection() {
  const sectionCodes = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const numSections = Math.floor(Math.random() * (sectionCodes.length - 1)) + 2;
  const shuffledSections = shuffleValue(sectionCodes).slice(0, numSections);
  const orders = shuffleValue([...Array(numSections).keys()].map((i) => (i + 1).toString()));
  const processedSectionData = {
    order: 1,
    items: []
  };
  shuffledSections.forEach((code, index) => {
    const sectionItem = {
      order: orders[index],
      code
    };
    if (code === "s5") {
      sectionItem.subcategories = Math.floor(Math.random() * 10) + 1;
    }
    processedSectionData.items.push(sectionItem);
  });
  return processedSectionData;
}
function getRandomCodeSubcategories() {
  const codes = ["c1", "c2"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomDetails(sections) {
  return {
    sectionTop: {
      [sections]: {
        headerImage: `${sections}/headers/${getRandomImageNumber("headers", sections)}.png`,
        detailImage: `${sections}/details/${getRandomImageNumber("details", sections)}.png`
      }
    },
    subcategories: {
      code: getRandomCodeSubcategories(),
      assets: Math.floor(Math.random() * 20) + 1
    }
  };
}
function templateMonoPortal(themeName, sections) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(themeName, sections),
      sections: getRandomHncSection(sections),
      ...includeFeature && { features: getRandomFeature(themeName, sections) },
      ...includeBanner && { banner: getRandomBanner(themeName, sections) },
      ...includeFAQ && { faq: getRandomFAQ() },
      ...includePlan && { plan: getRandomPlan(themeName, sections) },
      footer: getRandomFooter(themeName, sections)
    },
    hc: {
      header: getRandomHcHeader(),
      sections: getRandomHcSection(),
      sectionTop: getRandomSectionTop(themeName, sections),
      ...includeFeature && { features: getRandomFeature(themeName, sections) },
      ...includeBanner && { banner: getRandomBanner(themeName, sections) },
      ...includePlan && { plan: getRandomPlan(themeName, sections) },
      footer: getRandomFooter(themeName, sections)
    },
    details: getRandomDetails(sections),
    theme: {
      logo: getRandomThemeLogo(),
      mode: getRandomThemeMode(),
      animationCard: getRandomThemeAnimationCard(),
      form: {
        code: getRandomThemeForm(),
        image: getRandomBoolean(),
        page: getRandomBoolean()
      },
      translation: getRandomThemeTranslation(),
      fontFamily: getRandomThemeFont(),
      primaryColor: getColorTheme().primaryColor || "#fff",
      secondaryColor: getColorTheme().secondaryColor || "#fff"
    }
  };
}

// src/templates/templateMultiPortal.ts
function getRandomCodeSectionsHnc() {
  const codes = ["s1", "s2", "s3", "s4", "s5", "s6"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomHncSection2() {
  const selectedCode = getRandomCodeSectionsHnc();
  const processedSectionData = {
    order: 1,
    code: selectedCode,
    items: {}
  };
  shuffleValue(categoriesArray).forEach((category, index) => {
    let imagePath;
    if (selectedCode === "s4") {
      const categoryLimits = limits[category] || limits.default;
      const typeLimits = categoryLimits[type];
      const maxIndex = typeLimits[1];
      imagePath = `${category}/${type}/${maxIndex}`;
    } else {
      imagePath = `${category}/${type}/${getRandomImageNumber(category, type)}.png`;
    }
    processedSectionData.items[category] = {
      order: index + 1,
      image: imagePath,
      buttonVariant,
      buttonStyle,
      alignment: getAlignment(selectedCode, index),
      ...selectedCode === "s1" && {
        contentPosition: getContentPosition(index)
      }
    };
  });
  return processedSectionData;
}
function getRandomCodeSectionsHc() {
  const codes = ["s1", "s2", "s3", "s4", "s5"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function processItemHcStyles(selectedCode) {
  const processedStyles = {
    background: false,
    direction: "row",
    displayCard: false
  };
  switch (selectedCode) {
    case "s1":
    case "s2":
    case "s4":
      processedStyles.background = getRandomBoolean();
      break;
    case "s3":
      processedStyles.direction = direction;
      processedStyles.background = getRandomBoolean();
      processedStyles.displayCard = getRandomBoolean();
      break;
    default:
      break;
  }
  return processedStyles;
}
function getCategoryItemLimit(categoryCode) {
  switch (categoryCode) {
    case "s1":
      return Math.floor(Math.random() * 4) + 5;
    case "s2":
      return Math.floor(Math.random() * 3) + 5;
    case "s3":
      return Math.floor(Math.random() * 5) + 5;
    case "s4":
      return Math.floor(Math.random() * 10) + 10;
    default:
      return Math.floor(Math.random() * 7) + 5;
  }
}
function getRandomHcSection2() {
  const processedSectionData = {
    order: 1,
    items: {}
  };
  shuffleValue(categoriesArray).forEach((category, index) => {
    const categoryCode = getRandomCodeSectionsHc();
    processedSectionData.items[category] = {
      order: index + 1,
      code: categoryCode,
      item: getCategoryItemLimit(categoryCode),
      ...categoryCode === "s5" && {
        divider: true,
        alignment,
        buttonStyle,
        buttonVariant
      },
      style: processItemHcStyles(categoryCode)
    };
  });
  return processedSectionData;
}
function getRandomCodeSubcategories2() {
  const codes = ["c1", "c2"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomDetails2() {
  const processedSectionData = {
    sectionTop: {},
    subcategories: {
      code: getRandomCodeSubcategories2(),
      assets: 1
    }
  };
  categoriesArray.forEach((category) => {
    const categoryData = {
      headerImage: `${category}/headers/${getRandomImageNumber(category, "headers")}.png`,
      detailImage: `${category}/details/${getRandomImageNumber(category, "details")}.png`
    };
    processedSectionData.sectionTop[category] = categoryData;
  });
  return processedSectionData;
}
function getAlignment(selectedCode, index) {
  if (selectedCode !== "s1") {
    return alignment;
  }
  if (index === 0) {
    return "start";
  }
  return index % 2 === 1 ? "end" : "start";
}
function getContentPosition(index) {
  if (index === 0) {
    return "left";
  }
  return index % 2 === 1 ? "right" : "left";
}
function templateMultiPortal(themeName) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(themeName),
      sections: getRandomHncSection2(),
      ...includeFeature && { features: getRandomFeature(themeName) },
      ...includeBanner && { banner: getRandomBanner(themeName) },
      ...includeFAQ && { faq: getRandomFAQ() },
      ...includePlan && { plan: getRandomPlan(themeName) },
      footer: getRandomFooter(themeName)
    },
    hc: {
      header: getRandomHcHeader(),
      sectionTop: getRandomSectionTop(themeName),
      sections: getRandomHcSection2(),
      footer: getRandomFooter(themeName)
    },
    details: getRandomDetails2(),
    theme: {
      logo: getRandomThemeLogo(),
      mode: getRandomThemeMode(),
      animationCard: getRandomThemeAnimationCard(),
      form: {
        code: getRandomThemeForm(),
        image: getRandomBoolean(),
        page: getRandomBoolean()
      },
      translation: getRandomThemeTranslation(),
      fontFamily: getRandomThemeFont(),
      primaryColor: getColorTheme().primaryColor || "#fff",
      secondaryColor: getColorTheme().secondaryColor || "#fff"
    }
  };
}

// src/templates/templateStreamPortal.ts
function getRandomHncSection3() {
  const sectionCodes = ["s1", "s2", "s3"];
  const sectionConfig = {
    s1: [4, 6, 8],
    s2: [4],
    s3: [4]
  };
  const numSections = Math.floor(Math.random() * sectionCodes.length) + 1;
  const selectedSections = sectionCodes.sort(() => Math.random() - 0.5).slice(0, numSections);
  const processedSectionData = {
    order: 1,
    items: []
  };
  const availableOrders = Array.from({ length: sectionCodes.length }, (_, i) => i + 1);
  const shuffledOrders = availableOrders.sort(() => Math.random() - 0.5);
  selectedSections.forEach((code, index) => {
    const categoriesArray2 = ["movies", "music"];
    const possibleLengths = sectionConfig[code];
    const numElements = possibleLengths[Math.floor(Math.random() * possibleLengths.length)];
    const category = categoriesArray2[Math.floor(Math.random() * categoriesArray2.length)];
    const elements = Array.from({ length: numElements }, () => ({
      image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category)}.png`
    }));
    return processedSectionData.items.push({
      order: shuffledOrders[index],
      code,
      elements,
      ...code === "s2" && {
        style: {
          background: getRandomBoolean(),
          direction
        }
      }
    });
  });
}
function getRandomCodeSectionsHc2() {
  const codes = ["s1", "s2", "s3", "s4", "s5"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function processItemHcStyles2(selectedCode) {
  const processedStyles = {
    background: false,
    direction: "row",
    displayCard: false
  };
  switch (selectedCode) {
    case "s1":
    case "s2":
    case "s4":
      processedStyles.background = getRandomBoolean();
      break;
    case "s3":
      processedStyles.direction = direction;
      processedStyles.background = getRandomBoolean();
      processedStyles.displayCard = getRandomBoolean();
      break;
    default:
      break;
  }
  return processedStyles;
}
function getCategoryItemLimit2(categoryCode) {
  switch (categoryCode) {
    case "s1":
      return getRandomNumber(5, 8);
    case "s2":
      return getRandomNumber(5, 7);
    case "s3":
      return getRandomNumber(5, 9);
    case "s4":
      return getRandomNumber(10, 19);
    default:
      return getRandomNumber(5, 11);
  }
}
function getRandomHcSection3() {
  const processedSectionData = {
    order: 1,
    items: {}
  };
  categoriesArray.forEach((category, index) => {
    const categoryCode = getRandomCodeSectionsHc2();
    processedSectionData.items[category] = {
      order: index + 1,
      code: categoryCode,
      item: getCategoryItemLimit2(categoryCode),
      ...categoryCode === "s5" && {
        divider: true,
        alignment,
        buttonStyle,
        buttonVariant
      },
      style: processItemHcStyles2(categoryCode)
    };
  });
  return processedSectionData;
}
function getRandomCodeSubcategories3() {
  const codes = ["c1", "c2"];
  return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomDetails3() {
  const processedSectionData = {
    sectionTop: {},
    subcategories: {
      code: getRandomCodeSubcategories3(),
      assets: Math.floor(Math.random() * 20) + 1
    }
  };
  categoriesArray.forEach((category) => {
    const categoryData = {
      headerImage: `${category}/headers/${getRandomImageNumber(category, "headers")}.png`,
      detailImage: `${category}/details/${getRandomImageNumber(category, "details")}.png`
    };
    processedSectionData.sectionTop[category] = categoryData;
  });
  return processedSectionData;
}
function templateStreamPortal(themeName, sections) {
  return {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(themeName, sections[0]),
      sections: getRandomHncSection3(),
      ...includeFeature && { features: getRandomFeature(themeName, sections[0]) },
      ...includeBanner && { banner: getRandomBanner(themeName, sections[0]) },
      ...includePlan && { plan: getRandomPlan(themeName, sections[0]) },
      ...includeFAQ && { faq: getRandomFAQ() },
      footer: getRandomFooter(themeName, sections[0])
    },
    hc: {
      header: getRandomHcHeader(),
      sections: getRandomHcSection3(),
      ...includeFeature && { features: getRandomFeature(themeName, sections[0]) },
      ...includeBanner && { banner: getRandomBanner(themeName, sections[0]) },
      ...includePlan && { plan: getRandomPlan(themeName, sections[0]) },
      footer: getRandomFooter(themeName, sections[0])
    },
    details: getRandomDetails3(),
    theme: {
      logo: getRandomThemeLogo(),
      mode: getRandomThemeMode(),
      animationCard: getRandomThemeAnimationCard(),
      form: {
        code: getRandomThemeForm(),
        image: getRandomBoolean(),
        page: getRandomBoolean()
      },
      translation: getRandomThemeTranslation(),
      fontFamily: getRandomThemeFont(),
      primaryColor: getColorTheme().primaryColor || "#fff",
      secondaryColor: getColorTheme().secondaryColor || "#fff"
    }
  };
}

// src/index.ts
function getThemeTemplate(themeName, sections) {
  console.log(sections);
  console.log(themeName);
  switch (themeName) {
    case "mono-portal":
      return templateMonoPortal(themeName, sections[0]);
    case "multi-portal":
      return templateMultiPortal(themeName);
    case "stream-portal":
      return templateStreamPortal(themeName, sections);
    case "converter-portal":
      return templateConverterPortal(themeName);
    default:
      return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getThemeTemplate
});
