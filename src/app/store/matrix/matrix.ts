import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import MatrixApi from '@/shared/api/api.js'
import { MatrixState } from '@/app/store/matrix/types.js'
import { RootState } from '@/app/store/createStore/types.js'
import { Matrix } from '@/shared/api/types.js'

const initialState: MatrixState = {
  entities: null,
  loading: true,
  error: null
}

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected')
}

export const fetchMatrices = createAsyncThunk<Matrix[], undefined, { rejectValue: string }>(
    'matrix/fetchMatrices',
    async (_, { rejectWithValue }) => {
      const data = await MatrixApi.getMatrices()
      return data || rejectWithValue('Не удалось загрузить матрицы. Попробуйте позже')
    }
)

const matrixSlice = createSlice({
  name: 'matrix',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMatrices.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMatrices.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.entities = action.payload
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

const { reducer: matrixReducer} = matrixSlice

export const getMatrices = () => (state: RootState) => state.matrix.entities

export const getMatrixByName = (name: string) => (state: RootState) => state.matrix.entities?.find(m => m.name === name)

export const getMatrixError = () => (state: RootState) => state.matrix.error

export default matrixReducer