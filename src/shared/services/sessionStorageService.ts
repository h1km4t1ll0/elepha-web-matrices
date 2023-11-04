import { Matrix } from '@/shared/api/types.js'

const matrices = 'matrices'

export const SessionStorageService = {
  setMatrices(data: Array<Matrix>) {
    sessionStorage.setItem(matrices, JSON.stringify(data))
  },

  getMatrices(): Array<Matrix> | null {
    const data = sessionStorage.getItem(matrices)
    return data ? JSON.parse(data) : null
  }
}