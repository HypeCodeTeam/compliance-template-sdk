export async function getThemeContent(
  themeName: string,
  domains: string[],
  sections: string[]
) {
  try {
    switch (themeName) {
      case "mono-portal": {
        const animationValues: string[] = [
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
        const colorModes: string[] = ["light", "dark"];

        const limits: Record<string, Record<string, number[]>> = {
          default: { headers: [1, 30], details: [32, 32] },
          astrology: { headers: [1, 45], details: [1, 44] },
          audiobooks: { headers: [1, 30], details: [1, 33] },
          fitness: { headers: [1, 67], details: [1, 65] },
          games: { headers: [1, 82], details: [1, 84] },
          movies: { headers: [1, 43], details: [1, 40] },
          music: { headers: [1, 40], details: [1, 38] },
          softwares: { headers: [1, 75], details: [1, 65] },
          sports: { headers: [1, 32], details: [1, 32] },
          security: { headers: [1, 30], details: [1, 29] },
        };
        const subCategories: Record<string, string[]> = {
          astrology: ["lovecompatibility", "horoscope", "practices", "zodiac"],
          games: [
            "action",
            "adventure",
            "arcade",
            "casual",
            "entertainment",
            "puzzle",
            "sports",
            "strategy",
          ],
          fitness: [
            "abdominal",
            "bodyweight",
            "dumbbell",
            "meditation",
            "pilates",
            "pregnancy",
          ],
          security: [
            "convenience",
            "multimedia",
            "office",
            "security",
            "utilities",
          ],
        };
        const usedNumbers = new Map();
        const buttonStyle = getRandomValue("rounded", "menu");
        const buttonVariant = getRandomValue(
          "default",
          "variant-2",
          "outline-2"
        );

        const includeBanner = Math.random() < 0.5;
        const includeFeature = Math.random() < 0.5;
        const includeFAQ = Math.random() < 0.5;
        const includePlan = Math.random() < 0.5;

        function getRandomUniqueOrder() {
          const availableOrders = [2, 3, 4];

          const randomIndex = Math.floor(
            Math.random() * availableOrders.length
          );
          const selectedOrder = availableOrders[randomIndex];
          availableOrders.splice(randomIndex, 1);
          return selectedOrder;
        }

        function getRandomImageNumber(type: string) {
          const categoryLimits =
            limits[sections[0] as keyof typeof limits] || limits.default;
          if (
            !categoryLimits ||
            !categoryLimits[type as keyof typeof categoryLimits]
          ) {
            throw new Error(
              `Limites non définies pour la catégorie "${sections[0]}" et le type "${type}"`
            );
          }

          const [min, max] =
            categoryLimits[type as keyof typeof categoryLimits];
          const key = `${sections[0]}-${type}`;

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
            availableNumbers[
              Math.floor(Math.random() * availableNumbers.length)
            ];
          used.add(selectedNumber);

          return selectedNumber;
        }

        function getRandomBoolean() {
          return Math.random() < 0.5;
        }

        function addRandomIndex(items: string[]) {
          return items.map(
            (item) => `${item}_${Math.floor(Math.random() * 2) + 1}`
          );
        }

        function getRandomValue(...options: string[]): string {
          if (!options || options.length === 0) {
            return "";
          }
          return options[Math.floor(Math.random() * options.length)];
        }

        function shuffleValue(array: string[]) {
          for (let i = array.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
        function getSubCategories(category: keyof typeof subCategories) {
          return subCategories[category] || [];
        }

        // HEADER
        function getRandomCodeHeader() {
          const codes = ["h1", "h2", "h3", "h4"];
          return codes[Math.floor(Math.random() * codes.length)];
        }

        function getRandomHncHeader() {
          const code = getRandomCodeHeader();
          const alignment = getRandomValue("start", "center", "end");
          const variant = getRandomValue("default ||modern");
          const anchor = getRandomValue("left ||right");

          return {
            code,
            alignment,
            buttonVariant,
            buttonStyle,
            type: getRandomValue("absolute", "fixed", "default"),
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
          const alignment = getRandomValue("start", "center", "end");
          const variant = getRandomValue("default ||modern");
          const anchor = getRandomValue("left ||right");

          return {
            code,
            alignment,
            buttonStyle,
            type:
              code === "h3" || code === "h4"
                ? "fixed"
                : getRandomValue("absolute", "fixed", "default"),
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
          const alignment = getRandomValue("start", "center", "end");
          const type = getRandomValue("details", "headers");

          if (code === "st2") {
            return {
              code,
              image: `${sections[0]}/${type}/${getRandomImageNumber(type)}.png`,
              contentPosition: getRandomValue("left", "right"),
              alignment,
              buttonVariant,
              buttonStyle,
            };
          } else if (code === "st3") {
            return {
              code,
              image: `${sections[0]}/${type}/${getRandomImageNumber(type)}.png`,
              contentPosition: getRandomValue("top", "bottom", "left", "right"),
              alignment,
              buttonVariant,
              buttonStyle,
            };
          }

          return {
            code,
            image: `${sections[0]}/${type}/${getRandomImageNumber(type)}.png`,
            backgroundOpacity: true,
          };
        }

        const selectedSubCategories = getSubCategories(
          sections[0] as keyof typeof subCategories
        );
        // SECTION-HNC
        function getRandomHncSection() {
          const sectionCodes = ["s1", "s2", "s3"];
          const sectionConfig: Record<string, number[]> = {
            s1: [4, 6, 8],
            s2: [4],
            s3: [4],
          };

          const numSections =
            Math.floor(Math.random() * sectionCodes.length) + 1;
          const selectedSections = sectionCodes
            .sort(() => Math.random() - 0.5)
            .slice(0, numSections);

          const processedSectionData: Record<string, any> = {
            order: 1,
            items: [],
          };
          const availableOrders = Array.from(
            { length: sectionCodes.length },
            (_, i) => i + 1
          );
          const shuffledOrders = availableOrders.sort(
            () => Math.random() - 0.5
          );

          selectedSections.forEach((code, index) => {
            if (!sectionConfig[code]) {
              console.error(`Code de section inconnu : ${code}`);
              return;
            }

            const numGenres =
              sectionConfig[code][
                Math.floor(Math.random() * sectionConfig[code].length)
              ];
            const randomGenres = selectedSubCategories
              .sort(() => 0.5 - Math.random())
              .slice(0, numGenres);
            const type = getRandomValue("details", "headers");

            processedSectionData.items.push({
              order: shuffledOrders[index],
              code,
              elements: randomGenres.map((genre) => ({
                ...(code === "s2" && { title: genre }),
                image: `${sections[0]}/${type}/${getRandomImageNumber(
                  type
                )}.png`,
              })),
              ...(code === "s2" && {
                style: {
                  background: getRandomBoolean(),
                  direction: getRandomValue(
                    "row",
                    "row-reverse",
                    "column",
                    "column-reverse"
                  ),
                },
              }),
            });
          });

          return processedSectionData;
        }

        // SECTION-HC
        function getRandomHcSection() {
          const sectionCodes = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
          const numSections =
            Math.floor(Math.random() * (sectionCodes.length - 1)) + 2;
          const shuffledSections = shuffleValue(sectionCodes).slice(
            0,
            numSections
          );
          const orders = shuffleValue(
            [...Array(numSections).keys()].map((i) => (i + 1).toString())
          );

          const processedSectionData: Record<string, any> = {
            order: 1,
            items: [],
          };

          shuffledSections.forEach((code, index) => {
            const sectionItem: Record<string, number | string> = {
              order: orders[index],
              code,
            };
            if (code === "s5") {
              sectionItem.subcategories = Math.floor(Math.random() * 10) + 1;
            }

            processedSectionData.items.push(sectionItem);
          });

          return processedSectionData;
        }

        // PLAN
        function getRandomCodePlan() {
          const codes = ["p1", "p2"];
          return codes[Math.floor(Math.random() * codes.length)];
        }

        function generateXsItems(total: number) {
          const possibleValues: number[] = [2, 3, 4, 6];
          const items: Record<string, number>[] = [];
          let remaining = total;

          const filterValues = (val: number) => val <= remaining;

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

        function addRandomImagesToItems(items: Record<string, any>) {
          const numberOfImages = Math.floor(Math.random() * 3);
          const type = getRandomValue("details", "headers");

          for (let i = 0; i < numberOfImages; i += 1) {
            const randomIndex = Math.floor(Math.random() * items.length);
            items[randomIndex].image = `${
              sections[0]
            }/${type}/${getRandomImageNumber(type)}.png`;
          }

          return items;
        }

        function getRandomPlan() {
          const code = getRandomCodePlan();
          const type = getRandomValue("details", "headers");

          const plan: Record<
            string,
            number | string | Record<string, number>[]
          > = {
            code,
            order: getRandomUniqueOrder(),
            contentPosition: getRandomValue("left", "right", "top", "bottom"),
          };

          if (code === "p1") {
            plan.image = `${sections[0]}/${type}/${getRandomImageNumber(
              type
            )}.png`;
          }

          if (code === "p2") {
            let topItems = generateXsItems(12);
            let bottomItems = generateXsItems(12);

            topItems = addRandomImagesToItems(topItems) as Record<
              string,
              number
            >[];
            bottomItems = addRandomImagesToItems(bottomItems) as Record<
              string,
              number
            >[];

            plan.items = [...topItems, ...bottomItems];
          }

          return plan;
        }

        // BANNER
        function getRandomCodeBanner() {
          const codes = ["b1"];
          return codes[Math.floor(Math.random() * codes.length)];
        }

        function getRandomBanner() {
          const alignment = getRandomValue("start", "center", "end");
          const type = getRandomValue("details", "headers");

          return {
            order: getRandomUniqueOrder(),
            code: getRandomCodeBanner(),
            image: `${sections[0]}/${type}/${getRandomImageNumber(type)}.png`,
            contentPosition: getRandomValue("left", "right"),
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
          const itemsFeaturesGames = [
            "controllerGames",
            "desktopGames",
            "experience",
            "secure",
            "transaction",
          ];
          const itemsFeaturesFitness = [
            "gym",
            "experience",
            "secure",
            "transaction",
          ];
          const itemsFeaturesAstrology = [
            "experience",
            "secure",
            "transaction",
          ];
          const itemsFeaturesSecurity = ["experience", "secure", "transaction"];

          if (sections[0]) {
            const itemsFeatures =
              sections[0] === "games"
                ? itemsFeaturesGames
                : sections[0] === "fitness"
                ? itemsFeaturesFitness
                : sections[0] === "astrology"
                ? itemsFeaturesAstrology
                : sections[0] === "security"
                ? itemsFeaturesSecurity
                : [];

            const shuffledFeatures = shuffleValue(itemsFeatures).slice(0, 3);
            const randomItems = addRandomIndex(shuffledFeatures);
            const type = getRandomValue("details", "headers");

            return {
              order: getRandomUniqueOrder(),
              code: getRandomCodeFeature(),
              items: randomItems,
              ...(getRandomBoolean() && {
                image: `${sections[0]}/${type}/${getRandomImageNumber(
                  type
                )}.png`,
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
                border: getRandomBoolean(),
              };
              break;
            case "faq2":
              break;
            default:
              style = {
                icon: getRandomBoolean(),
                iconPosition: getRandomValue("left", "right"),
                border: getRandomBoolean(),
              };
              break;
          }

          return style ? { ...baseFAQ, style } : baseFAQ;
        }

        //DETAILS
        function getRandomCodeSubcategories() {
          const codes = ["c1", "c2"];
          return codes[Math.floor(Math.random() * codes.length)];
        }

        function getRandomDetails() {
          return {
            sectionTop: {
              [sections[0]]: {
                headerImage: `${sections[0]}/headers/${getRandomImageNumber(
                  "headers"
                )}.png`,
                detailImage: `${sections[0]}/details/${getRandomImageNumber(
                  "details"
                )}.png`,
              },
            },
            subcategories: {
              code: getRandomCodeSubcategories(),
              assets: Math.floor(Math.random() * 20) + 1,
            },
          };
        }

        // FOOTER
        function getRandomCodeFooter() {
          const codes = ["f1", "f2", "f3", "f4", "f5", "f6"];
          return codes[Math.floor(Math.random() * codes.length)];
        }

        function getRandomFooter() {
          const code = getRandomCodeFooter();
          const type = getRandomValue("headers", "details");
          return {
            code,
            ...(code === "f6" &&
              getRandomBoolean() && {
                image: `${sections[0]}/${type}/${getRandomImageNumber(
                  type
                )}.png`,
              }),
            style: {
              background: getRandomBoolean(),
            },
          };
        }

        //THEME
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

        return {
          hnc: {
            header: getRandomHncHeader(),
            sectionTop: getRandomSectionTop(),
            sections: getRandomHncSection(),
            ...(includeFeature && { features: getRandomFeature() }),
            ...(includeBanner && { banner: getRandomBanner() }),
            ...(includeFAQ && { faq: getRandomFAQ() }),
            ...(includePlan && { plan: getRandomPlan() }),
            footer: getRandomFooter(),
          },
          hc: {
            header: getRandomHcHeader(),
            sections: getRandomHcSection(),
            sectionTop: getRandomSectionTop(),
            ...(includeFeature && { features: getRandomFeature() }),
            ...(includeBanner &&
              getRandomBanner() && { banner: getRandomBanner() }),
            ...(includePlan && getRandomPlan() && { plan: getRandomPlan() }),
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
            primaryColor: "#fff",
            secondaryColor: "#fff",
          },
        };
      }

      case "multi-portal":
        return { message: "multi-portal theme" };

      default:
        throw new Error(`Thème "${themeName}" non reconnu.`);
    }
  } catch (err) {
    throw new Error(
      `Thème "${themeName}" introuvable ou erreur lors de l'import.`
    );
  }
}
