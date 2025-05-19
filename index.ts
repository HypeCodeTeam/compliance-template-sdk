const path = require("path");

export function generateWithTheme(themeName: string, data: any) {
  const themeModuleName =
    themeName.replace(/-([a-z])/g, (_: any, g1: string) => g1.toUpperCase()) +
    "Theme";

  const themePath = path.join(__dirname, "themes", `${themeModuleName}.js`);

  try {
    const themeModule = require(themePath);

    if (typeof themeModule.generateTheme !== "function") {
      throw new Error(
        `Le module ${themeModuleName} ne contient pas de fonction 'generateTheme'.`
      );
    }

    return themeModule.generateTheme(data);
  } catch (error: any) {
    console.error(`Erreur lors du chargement du thème '${themeName}':`, error);
    throw error;
  }
}
