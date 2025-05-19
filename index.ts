import * as streamPortal from "./theme/streamPortal";
import * as autreTheme from "./theme/autreTheme";

const themeMap: Record<string, { handler: () => string }> = {
  streamPortal,
  autreTheme,
};

export function useTheme(themeName: string): string {
  return themeName;
}
