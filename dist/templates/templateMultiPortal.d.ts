export declare function templateMultiPortal(themeName: string): {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image?: string | undefined;
            code: string;
        };
        plan?: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        } | undefined;
        faq?: {
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
        } | undefined;
        banner?: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        } | undefined;
        features?: {
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
        } | undefined;
        header: {
            style: {
                background: boolean;
            };
            anchor?: string | undefined;
            variant?: string | undefined;
            code: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
            type: string;
        };
        sectionTop: {
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
        sections: Record<string, any>;
    };
    hc: {
        header: {
            style: {
                background: boolean;
            };
            anchor?: string | undefined;
            variant?: string | undefined;
            code: string;
            alignment: string;
            buttonStyle: string;
            type: string;
        };
        sectionTop: {
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
        sections: Record<string, any>;
        footer: {
            style: {
                background: boolean;
            };
            image?: string | undefined;
            code: string;
        };
    };
    details: Record<string, any>;
    theme: {
        logo: {
            white: boolean;
            card: boolean;
        };
        mode: string;
        animationCard: string;
        form: {
            code: string;
            image: boolean;
            page: boolean;
        };
        translation: number;
        fontFamily: string;
        primaryColor: string;
        secondaryColor: string;
    };
};
