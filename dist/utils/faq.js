import { getRandomBoolean, getRandomUniqueOrder, iconPosition } from './index';
// FAQ
function getRandomCodeFAQ() {
    const codes = ['faq1', 'faq2', 'faq3'];
    return codes[Math.floor(Math.random() * codes.length)];
}
export function getRandomFAQ() {
    const code = getRandomCodeFAQ();
    const baseFAQ = {
        order: getRandomUniqueOrder(),
        code,
        item: Math.floor(Math.random() * 5) + 3,
    };
    let style;
    switch (code) {
        case 'faq3':
            style = {
                icon: getRandomBoolean(),
                border: getRandomBoolean(),
            };
            break;
        case 'faq2':
            break;
        default:
            style = {
                icon: getRandomBoolean(),
                iconPosition,
                border: getRandomBoolean(),
            };
            break;
    }
    return style ? { ...baseFAQ, style } : baseFAQ;
}
//# sourceMappingURL=faq.js.map