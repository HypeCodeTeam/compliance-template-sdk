export declare function generateXsItems(total: number): {
    xs: number;
}[];
export declare function addRandomImagesToItems(themeName: string, items: string | any[], sections?: string): string | any[];
export declare function getRandomPlan(themeName: string, sections?: string): {
    code: string;
    order: number;
    image?: string;
    contentPosition?: string;
    items?: any[];
};
