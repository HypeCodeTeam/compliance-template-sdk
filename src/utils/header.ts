import { alignment, anchor, buttonStyle, buttonVariant, type, variant } from './index';

// HEADER
function getRandomCodeHeader() {
  const codes = ['h1', 'h2', 'h3', 'h4'];
  return codes[Math.floor(Math.random() * codes.length)];
}

export function getRandomHncHeader() {
  const code = getRandomCodeHeader();

  return {
    code,
    alignment,
    buttonVariant,
    buttonStyle,
    type,
    ...(code === 'h4' && {
      anchor,
      variant,
    }),
    style: {
      background: false,
    },
  };
}

export function getRandomHcHeader() {
  const code = getRandomCodeHeader();

  return {
    code,
    alignment,
    buttonStyle,
    type: code === 'h3' || code === 'h4' ? 'fixed' : type,
    ...(code === 'h4' && {
      anchor,
      variant,
    }),
    style: {
      background: false,
    },
  };
}
