export const animationValues = [
    'fade',
    'slide',
    'flip',
    'scale',
    'rotate',
    'reveal',
    'blur',
    'stagger',
    'default',
];
export const colorModes = ['light', 'dark'];
export const limits = {
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
export const subCategories = {
    astrology: ['lovecompatibility', 'horoscope', 'practices', 'zodiac'],
    games: [
        'action',
        'adventure',
        'arcade',
        'casual',
        'entertainment',
        'puzzle',
        'sports',
        'strategy',
    ],
    fitness: ['abdominal', 'bodyweight', 'dumbbell', 'meditation', 'pilates', 'pregnancy'],
    security: ['convenience', 'multimedia', 'office', 'security', 'utilities'],
};
export const categoriesArray = [
    'movies',
    'games',
    'softwares',
    'music',
    'audiobooks',
    'ebooks',
    'sports',
    'fitness',
    'astrology',
    'security',
];
export const itemsFeatures = [
    'secure',
    'transaction',
    'experience',
    'desktop',
    'soundtrack',
    'book',
    'controllerGames',
    'desktopGames',
    'gym',
];
export const itemsFeaturesConverter = [
    'secure',
    'transaction',
    'uploadFileCloud',
    'downloadCloud',
    'uploadFile',
    'converter',
    'download',
];
export const usedNumbers = new Map();
export const buttonStyle = getRandomValue('rounded', 'menu');
export const buttonVariant = getRandomValue('default', 'variant-2', 'outline-2');
export const alignment = getRandomValue('start', 'center', 'end');
export const variant = getRandomValue('default', 'modern');
export const anchor = getRandomValue('left', 'right');
export const contentPosition = getRandomValue('left', 'right');
export const type = getRandomValue('absolute', 'fixed', 'default');
export const iconPosition = getRandomValue('left', 'right');
export const typeAssets = getRandomValue('details', 'headers');
export const direction = getRandomValue('row', 'row-reverse', 'column', 'column-reverse');
export const includeBanner = Math.random() < 0.5;
export const includeFeature = Math.random() < 0.5;
export const includeFAQ = Math.random() < 0.5;
export const includePlan = Math.random() < 0.5;
export const includeCompatibledFormat = Math.random() < 0.5;
export function getRandomCategory() {
    return categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
}
export function getRandomUniqueOrder() {
    const availableOrders = [2, 3, 4];
    const randomIndex = Math.floor(Math.random() * availableOrders.length);
    const selectedOrder = availableOrders[randomIndex];
    availableOrders.splice(randomIndex, 1);
    return selectedOrder;
}
export function getRandomImageNumber(type, sections) {
    const categoryLimits = limits[sections] || limits.default;
    if (!categoryLimits || !categoryLimits[type]) {
        throw new Error(`Limites non définies pour la catégorie "${sections}" et le type "${type}"`);
    }
    const [min, max] = categoryLimits[type];
    const key = `${sections}-${type}`;
    if (!usedNumbers.has(key)) {
        usedNumbers.set(key, new Set());
    }
    const used = usedNumbers.get(key);
    const availableNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min).filter(num => !used.has(num));
    if (availableNumbers.length === 0) {
        used.clear();
        availableNumbers.push(...Array.from({ length: max - min + 1 }, (_, i) => i + min));
    }
    const selectedNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    used.add(selectedNumber);
    return selectedNumber;
}
export function getRandomBoolean() {
    return Math.random() < 0.5;
}
export function addRandomIndex(items) {
    return items.map(item => `${item}_${Math.floor(Math.random() * 2) + 1}`);
}
export function getRandomValue(...args) {
    return args[Math.floor(Math.random() * args.length)];
}
export function shuffleValue(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export function getSubCategories(category) {
    return subCategories[category] || [];
}
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomColor() {
    return Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
}
export function getComplementaryColor(hex) {
    const r = 255 - parseInt(hex.slice(0, 2), 16);
    const g = 255 - parseInt(hex.slice(2, 4), 16);
    const b = 255 - parseInt(hex.slice(4, 6), 16);
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
    return `${rHex}${gHex}${bHex}`;
}
export function getColorTheme() {
    const primaryColor = getRandomColor();
    const secondaryColor = getComplementaryColor(primaryColor);
    return {
        primaryColor: `#${primaryColor}`,
        secondaryColor: `#${secondaryColor}`,
    };
}
export function getAlignment(selectedCode, index) {
    if (selectedCode !== 's1') {
        return alignment;
    }
    if (index === 0) {
        return 'start';
    }
    return index % 2 === 1 ? 'end' : 'start';
}
export function getContentPosition(index) {
    if (index === 0) {
        return 'left';
    }
    return index % 2 === 1 ? 'right' : 'left';
}
//# sourceMappingURL=index.js.map