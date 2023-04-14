import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveToken } from '../store/token/actions';

export function useToken() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(saveToken());
  }, [dispatch]);
}
