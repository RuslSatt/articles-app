export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    NOT_FOUND = '*'
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
};
