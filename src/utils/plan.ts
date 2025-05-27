import {
  contentPosition,
  getRandomCategory,
  getRandomImageNumber,
  getRandomUniqueOrder,
  typeAssets,
} from './index';

// PLAN
function getRandomCodePlan() {
  const codes = ['p1', 'p2'];
  return codes[Math.floor(Math.random() * codes.length)];
}

export function generateXsItems(total: number) {
  const possibleValues = [2, 3, 4, 6];
  const items = [];
  let remaining = total;

  const filterValues = (val: number) => val <= remaining;

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

export function addRandomImagesToItems(
  themeName: string,
  items: string | any[],
  sections?: string,
) {
  const numberOfImages = Math.floor(Math.random() * 3);
  const category = themeName === 'multi-portal' ? getRandomCategory() : sections;

  for (let i = 0; i < numberOfImages; i += 1) {
    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex].image = `${category}/${typeAssets}/${getRandomImageNumber(
      typeAssets,
      category || '',
    )}.png`;
  }

  return items;
}

export function getRandomPlan(themeName: string, sections?: string) {
  const code = getRandomCodePlan();
  const category = themeName === 'multi-portal' ? getRandomCategory() : sections;

  const plan: {
    code: string;
    order: number;
    image?: string;
    contentPosition?: string;
    items?: any[];
  } = {
    code,
    order: getRandomUniqueOrder(),
  };

  if (code === 'p1') {
    plan.image = `${category}/${typeAssets}/${getRandomImageNumber(typeAssets, category || '')}.png`;
    plan.contentPosition = contentPosition;
  }

  if (code === 'p2') {
    let topItems = generateXsItems(12);
    let bottomItems = generateXsItems(12);

    topItems = addRandomImagesToItems(themeName, topItems, sections) as any[];
    bottomItems = addRandomImagesToItems(themeName, bottomItems, sections) as any[];

    plan.items = [...topItems, ...bottomItems];
  }

  return plan;
}
