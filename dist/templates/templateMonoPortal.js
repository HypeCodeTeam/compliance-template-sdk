import { getRandomBanner } from '../utils/banner';
import { getRandomFAQ } from '../utils/faq';
import { getRandomFeature } from '../utils/features';
import { getRandomFooter } from '../utils/footer';
import { getRandomHncHeader, getRandomHcHeader } from '../utils/header';
import { getRandomImageNumber, includeBanner, includeFeature, includeFAQ, includePlan, getSubCategories, getRandomBoolean, shuffleValue, typeAssets, direction, getColorTheme, } from '../utils/index';
import { getRandomPlan } from '../utils/plan';
import { getRandomSectionTop } from '../utils/sectionTop';
import { getRandomThemeAnimationCard, getRandomThemeFont, getRandomThemeForm, getRandomThemeLogo, getRandomThemeMode, getRandomThemeTranslation, } from '../utils/theme';
// SECTION-HNC
function getRandomHncSection(sections) {
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
        if (sectionConfig[code]) {
            const numGenres = sectionConfig[code][Math.floor(Math.random() * sectionConfig[code].length)];
            const randomGenres = getSubCategories(sections)
                .sort(() => 0.5 - Math.random())
                .slice(0, numGenres);
            processedSectionData.items.push({
                order: shuffledOrders[index],
                code,
                elements: randomGenres.map(genre => ({
                    ...(code === 's2' && { title: genre }),
                    image: `${sections}/${typeAssets}/${getRandomImageNumber(typeAssets, sections)}.png`,
                })),
                ...(code === 's2' && {
                    style: {
                        background: getRandomBoolean(),
                        direction,
                    },
                }),
            });
        }
    });
    return processedSectionData;
}
// SECTION-HC
function getRandomHcSection() {
    const sectionCodes = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
    const numSections = Math.floor(Math.random() * (sectionCodes.length - 1)) + 2;
    const shuffledSections = shuffleValue(sectionCodes).slice(0, numSections);
    const orders = shuffleValue([...Array(numSections).keys()].map(i => (i + 1).toString()));
    const processedSectionData = {
        order: 1,
        items: [],
    };
    shuffledSections.forEach((code, index) => {
        const sectionItem = {
            order: orders[index],
            code,
        };
        if (code === 's5') {
            sectionItem.subcategories = Math.floor(Math.random() * 10) + 1;
        }
        processedSectionData.items.push(sectionItem);
    });
    return processedSectionData;
}
// DETAILS
function getRandomCodeSubcategories() {
    const codes = ['c1', 'c2'];
    return codes[Math.floor(Math.random() * codes.length)];
}
function getRandomDetails(sections) {
    return {
        sectionTop: {
            [sections]: {
                headerImage: `${sections}/headers/${getRandomImageNumber('headers', sections)}.png`,
                detailImage: `${sections}/details/${getRandomImageNumber('details', sections)}.png`,
            },
        },
        subcategories: {
            code: getRandomCodeSubcategories(),
            assets: Math.floor(Math.random() * 20) + 1,
        },
    };
}
export function templateMonoPortal(themeName, sections) {
    return {
        hnc: {
            header: getRandomHncHeader(),
            sectionTop: getRandomSectionTop(themeName, sections),
            sections: getRandomHncSection(sections),
            ...(includeFeature && { features: getRandomFeature(themeName, sections) }),
            ...(includeBanner && { banner: getRandomBanner(themeName, sections) }),
            ...(includeFAQ && { faq: getRandomFAQ() }),
            ...(includePlan && { plan: getRandomPlan(themeName, sections) }),
            footer: getRandomFooter(themeName, sections),
        },
        hc: {
            header: getRandomHcHeader(),
            sections: getRandomHcSection(),
            sectionTop: getRandomSectionTop(themeName, sections),
            ...(includeFeature && { features: getRandomFeature(themeName, sections) }),
            ...(includeBanner && { banner: getRandomBanner(themeName, sections) }),
            ...(includePlan && { plan: getRandomPlan(themeName, sections) }),
            footer: getRandomFooter(themeName, sections),
        },
        details: getRandomDetails(sections),
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
//# sourceMappingURL=templateMonoPortal.js.map