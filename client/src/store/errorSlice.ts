import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface errorState {
  errorMessage: string,
}

const initialState: errorState = {
  errorMessage: ''
}
export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
  setError: (state, action: PayloadAction<string>) => {
    // eslint-disable-next-line no-param-reassign
    state.errorMessage = action.payload;
  }
}

})

export const {setError} = errorSlice.actions
export const selectError = (state: RootState) => state.error.errorMessage
export default errorSlice.reducer