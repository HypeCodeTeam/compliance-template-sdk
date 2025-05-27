import { alignment, buttonStyle, buttonVariant, contentPosition, getRandomCategory, getRandomImageNumber, typeAssets, } from './index';
// SECTION-TOP
function getRandomCodeSectionTop() {
    const codes = ['st1', 'st2', 'st3'];
    return codes[Math.floor(Math.random() * codes.length)];
}
export function getRandomSectionTop(themeName, sections) {
    const code = getRandomCodeSectionTop();
    const category = themeName === 'multi-portal' ? getRandomCategory() : sections;
    if (code === 'st2') {
        return {
            code,
            image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`,
            contentPosition,
            buttonVariant,
            buttonStyle,
        };
    }
    if (code === 'st3') {
        return {
            code,
            image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`,
            contentPosition,
            alignment,
            buttonVariant,
            buttonStyle,
        };
    }
    return {
        code,
        image: `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`,
        backgroundOpacity: true,
    };
}
//# sourceMappingURL=sectionTop.js.map