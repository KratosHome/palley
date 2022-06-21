import {TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../store/reducer/rootReducer';


export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector
