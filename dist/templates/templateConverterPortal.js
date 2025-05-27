import { getRandomBanner } from '../utils/banner';
import { getRandomCompatibledFormat } from '../utils/compatibledFormat';
import { getRandomFAQ } from '../utils/faq';
import { getRandomFeature } from '../utils/features';
import { getRandomFooter } from '../utils/footer';
import { getRandomHncHeader, getRandomHcHeader } from '../utils/header';
import { includeBanner, includeFeature, includeFAQ, getRandomBoolean, includeCompatibledFormat, getColorTheme, } from '../utils/index';
import { getRandomThemeFont, getRandomThemeForm, getRandomThemeLogo, getRandomThemeMode, getRandomThemeTranslation, } from '../utils/theme';
import { getRandomUploader } from '../utils/uploader';
export function templateConverterPortal(themeName) {
    return {
        hnc: {
            header: getRandomHncHeader(),
            uploader: getRandomUploader(),
            ...(includeFeature && { features: getRandomFeature(themeName) }),
            ...(includeBanner && { banner: getRandomBanner(themeName) }),
            ...(includeFAQ && { faq: getRandomFAQ() }),
            ...(includeCompatibledFormat && {
                compatibledFormat: getRandomCompatibledFormat(),
            }),
            footer: getRandomFooter(themeName),
        },
        hc: {
            header: getRandomHcHeader(),
            footer: getRandomFooter(themeName),
        },
        theme: {
            logo: getRandomThemeLogo(),
            mode: getRandomThemeMode(),
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
//# sourceMappingURL=templateConverterPortal.js.map