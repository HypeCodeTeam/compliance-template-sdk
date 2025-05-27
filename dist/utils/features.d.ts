export declare function getRandomFeature(themeName: string, sections?: string): {
    buttonVariant: string;
    buttonStyle: string;
    style: {
        background: boolean;
        iconTop: boolean;
        displayButton: boolean;
        displayCard: boolean;
    };
    image?: string | undefined;
    order: number;
    code: string;
    items: string[];
};
