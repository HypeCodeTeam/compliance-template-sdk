import { getRandomValue, animationValues, colorModes } from './index';

// THEME
export function getRandomThemeTranslation() {
  return Math.floor(Math.random() * 21) + 1;
}

export function getRandomThemeAnimationCard() {
  return getRandomValue(...animationValues);
}

export function getRandomThemeLogo() {
  return { white: false, card: false };
}

export function getRandomThemeMode() {
  return colorModes[Math.floor(Math.random() * colorModes.length)];
}

export function getRandomThemeForm() {
  return Math.random() < 0.5 ? 'form' : 'form1';
}

export function getRandomThemeFont() {
  return Math.random() < 0.5 ? 'Courier, monospace' : 'Arial';
}
