export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOT_FOUND = '*'
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
};
