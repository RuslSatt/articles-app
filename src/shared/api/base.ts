import axios from 'axios';
import { API_URL } from './config';
import { LOCAL_STORAGE_USER_KEY } from '../const/storage';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    }
});
