import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/store';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
