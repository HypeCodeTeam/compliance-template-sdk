const fs = require("fs");
const path = require("path");

//RETURN RANDOM SECTIONS
export function generateTheme(row) {
  const outputFolder = path.join(
    __dirname,
    "..",
    "..",
    "generatedTemplates",
    row.name
  );

  const configPath = path.join(outputFolder, "config");
  const compliancesFolder = path.resolve(__dirname, "../../../compliances");

  const buttonVariant = getRandomValue("default || variant-2 || outline-2");
  const buttonStyle = getRandomValue("rounded || menu");
  const categoriesArray = ["movies", "music"];

  let availableOrders = [2, 3, 4];

  const animationValues = [
    "fade",
    "slide",
    "flip",
    "scale",
    "rotate",
    "reveal",
    "blur",
    "stagger",
    "default",
  ];

  const limits = {
    default: { headers: [1, 30], details: [32, 32] },
    movies: { headers: [1, 43], details: [1, 40] },
    music: { headers: [1, 40], details: [1, 38] },
  };

  const colorModes = [
    "light",
    "dark",
    "purple",
    "darkPurple",
    "red",
    "darkRed",
    "blue",
    "darkBlue",
    "green",
    "darkGreen",
  ];

  function copyFolderSync(source, target) {
    if (!fs.existsSync(source)) {
      console.warn(`⚠️ Le dossier source "${source}" n'existe pas.`);
      return;
    }

    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }

    const entries = fs.readdirSync(source, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(target, entry.name);

      if (entry.isDirectory()) {
        copyFolderSync(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  function getRandomValue(options) {
    if (!options || typeof options !== "string") {
      return options || "";
    }

    if (options.includes("||")) {
      const values = options.split("||").map((val) => val.trim());
      return values[Math.floor(Math.random() * values.length)];
    }
    return options;
  }

  const usedNumbers = new Map();

  function getRandomImageNumber(category, type) {
    if (!category || !type) {
      return undefined;
    }

    const categoryLimits = limits[category] || limits.default;
    if (!categoryLimits || !categoryLimits[type]) {
      throw new Error(
        `Limites non définies pour la catégorie "${category}" et le type "${type}"`
      );
    }

    const [min, max] = categoryLimits[type];
    const key = `${category}-${type}`;

    if (!usedNumbers.has(key)) {
      usedNumbers.set(key, new Set());
    }

    const used = usedNumbers.get(key);

    const availableNumbers = Array.from(
      { length: max - min + 1 },
      (_, i) => i + min
    ).filter((num) => !used.has(num));

    if (availableNumbers.length === 0) {
      used.clear();
      availableNumbers.push(
        ...Array.from({ length: max - min + 1 }, (_, i) => i + min)
      );
    }

    const selectedNumber =
      availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    used.add(selectedNumber);

    return selectedNumber;
  }

  function getRandomCategory() {
    return categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
  }

  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function addRandomIndex(items) {
    return items.map((item) => `${item}_${Math.floor(Math.random() * 2) + 1}`);
  }

  function shuffleValue(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getRandomUniqueOrder() {
    if (availableOrders.length === 0) {
      availableOrders = [2, 3, 4];
    }

    const randomIndex = Math.floor(Math.random() * availableOrders.length);
    const selectedOrder = availableOrders[randomIndex];
    availableOrders.splice(randomIndex, 1);
    return selectedOrder;
  }

  // HEADER
  function getRandomCodeHeader() {
    const codes = ["h1", "h2", "h3", "h4"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomHncHeader() {
    const code = getRandomCodeHeader();
    const alignment = getRandomValue("start || center || end");
    const anchor = getRandomValue("left", "right");
    const variant = getRandomValue("default", "modern");

    return {
      code,
      alignment,
      buttonVariant,
      buttonStyle,
      type: getRandomValue("absolute || fixed || default"),
      ...(code === "h4" && {
        anchor,
        variant,
      }),
      style: {
        background: false,
      },
    };
  }

  function getRandomHcHeader() {
    const code = getRandomCodeHeader();
    const alignment = getRandomValue("start || center || end");

    return {
      code,
      alignment,
      buttonStyle,
      type:
        code !== "h3" || code !== "h4"
          ? getRandomValue("absolute || fixed || default")
          : "fixed",
      ...(code === "h4" && {
        anchor,
        variant,
      }),
      style: {
        background: false,
      },
    };
  }

  // SECTION-TOP
  function getRandomCodeSectionTop() {
    const codes = ["st1", "st2", "st3"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomSectionTop() {
    const code = getRandomCodeSectionTop();
    const category = getRandomCategory();
    const alignment = getRandomValue("start || center || end");
    const type = getRandomValue("details || headers");

    if (code === "st2") {
      return {
        code,
        image: `${category}/${type}/${getRandomImageNumber(
          category,
          type
        )}.png`,
        contentPosition: getRandomValue("left || right"),
        alignment,
        buttonVariant,
        buttonStyle,
      };
    } else if (code === "st3") {
      return {
        code,
        image: `${category}/${type}/${getRandomImageNumber(
          category,
          type
        )}.png`,
        contentPosition: getRandomValue("top || bottom || left || right"),
        alignment,
        buttonVariant,
        buttonStyle,
      };
    }

    return {
      code,
      image: `${category}/${type}/${getRandomImageNumber(category, type)}.png`,
      backgroundOpacity: true,
    };
  }

  // SECTION-HNC
  function getRandomHncSection() {
    const sectionCodes = ["s1", "s2", "s3"];
    const sectionConfig = {
      s1: [4, 6, 8],
      s2: [4],
      s3: [4, 6],
    };

    const numSections = Math.floor(Math.random() * sectionCodes.length) + 1;
    const selectedSections = sectionCodes
      .sort(() => Math.random() - 0.5)
      .slice(0, numSections);

    const processedSectionData = {
      order: 1,
      items: [],
    };

    const availableOrders = Array.from(
      { length: sectionCodes.length },
      (_, i) => i + 1
    );
    const shuffledOrders = availableOrders.sort(() => Math.random() - 0.5);

    selectedSections.forEach((code, index) => {
      const possibleLengths = sectionConfig[code];
      const numElements =
        possibleLengths[Math.floor(Math.random() * possibleLengths.length)];

      const type = getRandomValue("details || headers");
      const category = getRandomCategory();

      const elements = Array.from({ length: numElements }, () => ({
        image: `${category}/${type}/${getRandomImageNumber(
          category,
          type
        )}.png`,
      }));

      processedSectionData.items.push({
        order: shuffledOrders[index],
        code,
        elements,
        ...(code === "s2" && {
          style: {
            background: getRandomBoolean(),
            direction: getRandomValue(
              "row || row-reverse || column || column-reverse"
            ),
          },
        }),
      });
    });

    return processedSectionData;
  }

  // SECTION-HC
  function getRandomCodeSectionsHc() {
    const codes = ["s1", "s2", "s3", "s4", "s5"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function processItemHcStyles(selectedCode, colors) {
    const processedStyles = {};

    switch (selectedCode) {
      case "s1":
      case "s2":
      case "s4":
        processedStyles.background = getRandomBoolean();
        break;
      case "s3":
        processedStyles.direction = getRandomValue(
          "row || row-reverse || column || column-reverse"
        );
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

  function getRandomHcSection(colors) {
    const processedSectionData = {
      order: 1,
      items: {},
    };

    categoriesArray.forEach((category, index) => {
      const categoryCode = getRandomCodeSectionsHc();
      const alignment = getRandomValue("start || center || end", colors);

      processedSectionData.items[category] = {
        order: index + 1,
        code: categoryCode,
        item: getCategoryItemLimit(categoryCode),
        ...(categoryCode === "s5" && {
          divider: true,
          alignment,
          buttonStyle,
          buttonVariant,
        }),
        style: processItemHcStyles(categoryCode, colors),
      };
    });

    return processedSectionData;
  }

  // BANNER
  function getRandomCodeBanner() {
    const codes = ["b1"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomBanner() {
    const category = getRandomCategory();
    const type = getRandomValue("details || headers");
    const alignment = getRandomValue("start || center || end");

    return {
      order: getRandomUniqueOrder(),
      code: getRandomCodeBanner(),
      image: `${category}/${type}/${getRandomImageNumber(category, type)}.png`,
      contentPosition: getRandomValue("left || right"),
      alignment,
      buttonVariant,
      buttonStyle,
    };
  }

  // FEATURE
  function getRandomCodeFeature() {
    const codes = ["f1"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomFeature() {
    const itemsFeatures = [
      "secure",
      "transaction",
      "experience",
      "desktop",
      "soundtrack",
    ];
    const shuffledFeatures = shuffleValue(itemsFeatures).slice(0, 3);
    const randomItems = addRandomIndex(shuffledFeatures);
    const category = getRandomCategory();
    const type = getRandomValue("details || headers");

    return {
      order: getRandomUniqueOrder(),
      code: getRandomCodeFeature(),
      items: randomItems,
      ...(getRandomBoolean() && {
        image: `${category}/${type}/${getRandomImageNumber(
          category,
          type
        )}.png`,
      }),
      buttonVariant,
      buttonStyle,
      style: {
        background: getRandomBoolean(),
        iconTop: getRandomBoolean(),
        displayCard: false,
        displayButton: getRandomBoolean(),
      },
    };
  }

  // FAQ
  function getRandomCodeFAQ() {
    const codes = ["faq1", "faq2", "faq3"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomFAQ() {
    const code = getRandomCodeFAQ();
    const baseFAQ = {
      order: getRandomUniqueOrder(),
      code,
      item: Math.floor(Math.random() * 5) + 3,
    };

    let style;

    switch (code) {
      case "faq3":
        style = {
          icon: getRandomBoolean(),
        };
        break;
      case "faq2":
        break;
      default:
        style = {
          icon: getRandomBoolean(),
          iconPosition: getRandomValue("left || right"),
          border: getRandomBoolean(),
        };
        break;
    }

    return style ? { ...baseFAQ, style } : baseFAQ;
  }

  // PLAN
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

      const randomXs =
        filteredValues[Math.floor(Math.random() * filteredValues.length)];
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

  function addRandomImagesToItems(items) {
    const numberOfImages = Math.floor(Math.random() * 3);
    const category = getRandomCategory();
    const type = getRandomValue("details || headers");

    for (let i = 0; i < numberOfImages; i += 1) {
      const randomIndex = Math.floor(Math.random() * items.length);
      items[randomIndex].image = `${category}/${type}/${getRandomImageNumber(
        category,
        type
      )}.png`;
    }

    return items;
  }

  function getRandomPlan() {
    const code = getRandomCodePlan();
    const category = getRandomCategory();
    const type = getRandomValue("details || headers");

    const plan = {
      code,
      order: getRandomUniqueOrder(),
      contentPosition: getRandomValue("left || right || top || bottom"),
    };

    if (code === "p1") {
      plan.image = `${category}/${type}/${getRandomImageNumber(
        category,
        type
      )}.png`;
    }

    if (code === "p2") {
      let topItems = generateXsItems(12);
      let bottomItems = generateXsItems(12);

      topItems = addRandomImagesToItems(topItems);
      bottomItems = addRandomImagesToItems(bottomItems);

      plan.items = [...topItems, ...bottomItems];
    }

    return plan;
  }

  // FOOTER
  function getRandomCodeFooter() {
    const codes = ["f1", "f2", "f3", "f4", "f5", "f6"];
    return codes[Math.floor(Math.random() * codes.length)];
  }

  function getRandomFooter() {
    const code = getRandomCodeFooter();
    const category = getRandomCategory();

    return {
      code,
      style: {
        background: getRandomBoolean(),
      },
      ...(code === "f6" &&
        getRandomBoolean() && {
          image: `${category}/headers/${getRandomImageNumber(
            category,
            "headers"
          )}.png`,
        }),
    };
  }

  // DETAILS
  function getRandomCodeSubcategories() {
    const codes = ["c1", "c2"];
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

    categoriesArray.forEach((category) => {
      const categoryData = {
        headerImage: `${category}/headers/${getRandomImageNumber(
          category,
          "headers"
        )}.png`,
        detailImage: `${category}/details/${getRandomImageNumber(
          category,
          "details"
        )}.png`,
      };
      processedSectionData.sectionTop[category] = categoryData;
    });

    return processedSectionData;
  }

  // //THEME PAGE
  // function getRandomThemePage() {
  //   return Math.floor(Math.random() * 2) + 1;
  // }

  //THEME ANIMATION CARD
  function getRandomThemeAnimationCard() {
    return getRandomValue(animationValues.join(" || "));
  }

  //THEME TRANSLATION
  function getRandomThemeTranslation() {
    return Math.floor(Math.random() * 21) + 1;
  }

  //THEME LOGO
  function getRandomThemeLogo() {
    return {
      white: false,
      card: false,
    };
  }

  //THEME MODE
  function getRandomThemeMode() {
    const randomIndex = Math.floor(Math.random() * colorModes.length);
    return colorModes[randomIndex];
  }

  //THEME FORM
  function getRandomThemeForm() {
    return Math.random() < 0.5 ? "form" : "form1";
  }

  //THEME FONT
  function getRandomThemeFont() {
    return Math.random() < 0.5
      ? "Courier, monospace"
      : "'Helvetica Narrow', sans-serif";
  }
  const imagesSource = path.join(compliancesFolder, row.name, "images");
  const imagesDest = path.join(outputFolder, "images");

  if (fs.existsSync(imagesSource)) {
    fs.mkdirSync(imagesDest, { recursive: true });
    copyFolderSync(imagesSource, imagesDest);
  }

  const envFile = path.join(compliancesFolder, row.name, ".env.json");
  const envDest = path.join(outputFolder, ".env.json");

  if (fs.existsSync(envFile)) {
    fs.copyFileSync(envFile, envDest);
  }

  const includeBanner = Math.random() < 0.5;
  const includeFeature = Math.random() < 0.5;
  const includePlan = Math.random() < 0.5;
  const includeFAQ = Math.random() < 0.5;

  const jsonData = {
    hnc: {
      header: getRandomHncHeader(),
      sectionTop: getRandomSectionTop(),
      sections: getRandomHncSection(),
      ...(includeFeature && { features: getRandomFeature() }),
      ...(includeBanner && { banner: getRandomBanner() }),
      ...(includePlan && { plan: getRandomPlan() }),
      ...(includeFAQ && { faq: getRandomFAQ() }),
      footer: getRandomFooter(),
    },
    hc: {
      header: getRandomHcHeader(),
      sections: getRandomHcSection(),
      ...(includeFeature && { features: getRandomFeature() }),
      ...(includeBanner && { banner: getRandomBanner() }),
      ...(includePlan && { plan: getRandomPlan() }),
      footer: getRandomFooter(),
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
      primaryColor: row.primaryColor || "#1976d2",
      secondaryColor: row.secondaryColor || "#d81b60",
    },
  };

  return jsonData;
}
