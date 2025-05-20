export async function getThemeContent(themeName: string): Promise<string> {
  try {
    const themeModule = await import(`./themes/${themeName}`);
    return themeModule.default(themeName);

  } catch (err) {
    throw new Error(`Thème "${themeName}" introuvable ou erreur lors de l'import.`);
  }
}

export default { getThemeContent };

