export async function getThemeContent(themeName: string): Promise<string> {
  try {
    const themeModule = await import(`./themes/${themeName}.ts`);
    
    if (typeof themeModule.default === 'function') {
      return themeModule.default();
    }

    throw new Error(`Le fichier pour le thème "${themeName}" n'exporte pas de fonction par défaut`);
  } catch (err) {
    throw new Error(`Thème "${themeName}" introuvable ou erreur lors de l'import.`);
  }
}
