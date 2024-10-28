declare global {
    interface Window {
        Trix: {
            VERSION: string;
            config: any;
            core: any;
            models: any;
            views: any;
            controllers: any;
            observers: any;
            operations: any;
            elements: any;
        }
    }
}

declare namespace _default {
    function init(): Promise<{
        VERSION: any;
        config: any;
        core: any;
        models: any;
        views: any;
        controllers: any;
        observers: any;
        operations: any;
        elements: any;
        filters: any;
    }>;
}
export default _default;
