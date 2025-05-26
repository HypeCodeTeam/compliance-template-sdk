declare function getThemeTemplate(themeName: string, sections: string): {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        plan: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        };
        faq: {
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
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
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
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        plan: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        };
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
            code: string;
            alignment: string;
            buttonStyle: string;
            type: string;
        };
        sections: Record<string, any>;
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
    };
    details: {
        sectionTop: {
            [sections]: {
                headerImage: string;
                detailImage: string;
            };
        };
        subcategories: {
            code: string;
            assets: number;
        };
    };
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
} | {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        plan: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        };
        faq: {
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
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
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
        sections: {
            order: number;
            code: string;
            items: {};
        };
    };
    hc: {
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
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
        sections: {
            order: number;
            items: {};
        };
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
    };
    details: {
        sectionTop: {};
        subcategories: {
            code: string;
            assets: number;
        };
    };
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
} | {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        faq: {
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
        plan: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        };
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
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
        sections: void;
    };
    hc: {
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        plan: {
            code: string;
            order: number;
            image?: string;
            contentPosition?: string;
            items?: any[];
        };
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
            code: string;
            alignment: string;
            buttonStyle: string;
            type: string;
        };
        sections: {
            order: number;
            items: {};
        };
    };
    details: {
        sectionTop: {};
        subcategories: {
            code: string;
            assets: number;
        };
    };
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
} | {
    hnc: {
        footer: {
            style: {
                background: boolean;
            };
            image: string;
            code: string;
        };
        compatibledFormat: {
            order: number;
            code: string;
            buttonVariant: string;
            buttonStyle: string;
            contentPosition: string;
        };
        faq: {
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
        banner: {
            order: number;
            code: string;
            image: string;
            contentPosition: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
        };
        features: {
            buttonVariant: string;
            buttonStyle: string;
            style: {
                background: boolean;
                iconTop: boolean;
                displayButton: boolean;
                displayCard: boolean;
            };
            image: string;
            order: number;
            code: string;
            items: string[];
        };
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
            code: string;
            alignment: string;
            buttonVariant: string;
            buttonStyle: string;
            type: string;
        };
        uploader: {
            image: string;
            buttonStyle: string;
            buttonVariant: string;
            code: string;
            button: boolean;
        };
    };
    hc: {
        header: {
            style: {
                background: boolean;
            };
            anchor: string;
            variant: string;
            code: string;
            alignment: string;
            buttonStyle: string;
            type: string;
        };
        footer: {
            style: {
                background: boolean;
            };
            image: string;
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

export { getThemeTemplate };
