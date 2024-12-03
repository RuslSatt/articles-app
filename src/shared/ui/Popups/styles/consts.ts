import style from './Popups.module.scss';

export type PopupDirection = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export const directionClasses: Record<PopupDirection, string> = {
    'bottom-left': style['bottom-left'],
    'bottom-right': style['bottom-right'],
    'top-left': style['top-left'],
    'top-right': style['top-right']
};
