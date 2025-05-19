import path from "path";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function useTheme(themeName: string): Promise<string> {
  try {
    const themePath = pathToFileURL(
      path.join(__dirname, "theme", `${themeName}.js`)
    ).href;

    const { handler } = await import(themePath);
    return handler();
  } catch (error) {
    throw new Error(`Theme "${themeName}" not found or invalid: ${error}`);
  }
}
