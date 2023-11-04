import { Matrix } from '@/shared/api/types.js'

export interface MatrixState {
  entities: Array<Matrix> | null
  loading: boolean
  error: string | null
}