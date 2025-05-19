import * as streamPortal from "./theme/streamPortal";
import * as autreTheme from "./theme/autreTheme";

const themeMap: Record<string, { handler: () => string }> = {
  streamPortal,
  autreTheme,
};

export function useTheme(themeName: string): string {
  const theme = themeMap[themeName];
  if (!theme) {
    throw new Error(`Theme "${themeName}" not found.`);
  }
  return theme.handler();
}
