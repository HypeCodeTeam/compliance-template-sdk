"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFromTheme = generateFromTheme;
const path = require("path");
function generateFromTheme(themeName, data) {
    const themeModuleName = themeName.replace(/-([a-z])/g, (_, g1) => g1.toUpperCase()) +
        "Theme";
    const themePath = path.resolve(__dirname, "themes", `${themeModuleName}.js`);
    try {
        const themeModule = require(themePath);
        if (typeof themeModule.generateTheme !== "function") {
            throw new Error(`Le module ${themeModuleName} ne contient pas de fonction 'generateTheme'.`);
        }
        return themeModule.generateTheme(data);
    }
    catch (error) {
        throw error;
    }
}
