import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface AuthState {
    value: string
}

const initialState: AuthState = {
    value: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthValue(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
    }
})

export const { setAuthValue } = authSlice.actions

export const  selectAuthValue = (state: RootState) => state.auth.value;

export default authSlice.reducer