import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from  '../index'

export const useAppDispatch: () => AppDispatch = useDispatch
