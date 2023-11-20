import { Matrix } from '@/shared/api/types.js'
import { Matrices } from '@/shared/api/data.js'

const delay = (ms: number): Promise<void> => new Promise(r => setTimeout(() => r(), ms))

const getMatrices = async (): Promise<Array<Matrix>> => {
  await delay(450)
  return Matrices || null
}

const MatrixApi = { getMatrices }

export default MatrixApi