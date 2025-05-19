import path from "path";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function useTheme(themeName) {
    try {
        const filePath = pathToFileURL(path.join(__dirname, "theme", `${themeName}.js`)).href;
        const themeModule = await import(filePath);
        if (!themeModule.handler || typeof themeModule.handler !== "function") {
            throw new Error(`Module "${themeName}" n'exporte pas de fonction handler.`);
        }
        return themeModule.handler();
    }
    catch (err) {
        throw new Error(`Erreur lors du chargement du thème "${themeName}" : ${err}`);
    }
}
