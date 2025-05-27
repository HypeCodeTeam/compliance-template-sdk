export declare function templateConverterPortal(themeName: string): {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image?: string | undefined;
            code: string;
        };
        compatibledFormat?: {
            order: number;
            code: string;
            buttonVariant: string;
            buttonStyle: string;
            contentPosition: string;
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
        uploader: Record<string, any>;
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
        footer: {
            style: {
                background: boolean;
            };
            image?: string | undefined;
            code: string;
        };
    };
    theme: {
        logo: {
            white: boolean;
            card: boolean;
        };
        mode: string;
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
