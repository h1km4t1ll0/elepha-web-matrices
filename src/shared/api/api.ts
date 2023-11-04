import { Matrix } from '@/shared/api/types.js'
import { Matrices } from '@/shared/api/data.js'

const delay = (ms: number): Promise<void> => new Promise(r => setTimeout(() => r(), ms))

export const getMatrices = async (): Promise<Array<Matrix> | null> => {
  await delay(500)
  return Matrices || null
}

const getMatrix = async (name: string): Promise<Matrix | null> => {
  await delay(250)
  return Matrices.find(m => m.name === name) || null
}

export default { getMatrices, getMatrix }