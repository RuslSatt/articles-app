import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';

export const getSaveScrollPosition = (state: StateSchema) => state.saveScroll?.scrollPosition;

export const getSaveScrollPositionByPath = createSelector(
    getSaveScrollPosition,
    (state: StateSchema, path: string) => path,
    (saveScrollPosition, path) => saveScrollPosition[path] || 0
);
