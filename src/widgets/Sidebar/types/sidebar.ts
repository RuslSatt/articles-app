import React from 'react';
import { AppRoutes } from '@/shared/config/router/routerConfig';

export interface ISidebarItem {
    path: AppRoutes;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
