export declare function getRandomSectionTop(themeName: string, sections?: string): {
    code: string;
    image: string;
    contentPosition: string;
    buttonVariant: string;
    buttonStyle: string;
    alignment?: undefined;
    backgroundOpacity?: undefined;
} | {
    code: string;
    image: string;
    contentPosition: string;
    alignment: string;
    buttonVariant: string;
    buttonStyle: string;
    backgroundOpacity?: undefined;
} | {
    code: string;
    image: string;
    backgroundOpacity: boolean;
    contentPosition?: undefined;
    buttonVariant?: undefined;
    buttonStyle?: undefined;
    alignment?: undefined;
};
