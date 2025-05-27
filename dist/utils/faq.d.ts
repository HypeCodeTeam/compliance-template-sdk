export declare function getRandomFAQ(): {
    order: number;
    code: string;
    item: number;
} | {
    style: {
        icon: boolean;
        border: boolean;
        iconPosition?: string;
    };
    order: number;
    code: string;
    item: number;
};
