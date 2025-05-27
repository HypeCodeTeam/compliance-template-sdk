import { buttonStyle, buttonVariant, contentPosition, getRandomUniqueOrder } from './index';
// COMPATIBLED-FORMAT
function getRandomCodeCompatibledFormat() {
    const codes = ['cf1', 'cf2'];
    return codes[Math.floor(Math.random() * codes.length)];
}
export function getRandomCompatibledFormat() {
    return {
        order: getRandomUniqueOrder(),
        code: getRandomCodeCompatibledFormat(),
        buttonVariant,
        buttonStyle,
        contentPosition,
    };
}
//# sourceMappingURL=compatibledFormat.js.map