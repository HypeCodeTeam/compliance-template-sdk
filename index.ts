export async function useTheme(themeName: string): Promise<string> {
  try {
    const { handler } = await import(`./theme/${themeName}.js`);
    return handler();
  } catch (error) {
    throw new Error(`Theme "${themeName}" not found or invalid: ${error}`);
  }
}
