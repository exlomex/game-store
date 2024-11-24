import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
