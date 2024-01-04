import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from  '../index'

type AppDispatchFunc = () => AppDispatch;
export const useAppDispatch: AppDispatchFunc = useDispatch;
