import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/article';
import { getUserData } from '@/entities/user';

export const getCanEditArticle = createSelector(
    getUserData,
    getArticleDetailsData,
    (userData, articleData) => {
        if (!userData || !articleData) {
            return false;
        }
        return userData?.id === articleData?.user?.id;
    }
);
