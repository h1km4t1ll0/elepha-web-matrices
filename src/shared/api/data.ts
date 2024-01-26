import { Matrix } from '@/shared/api/types.js'

export const Matrices: Array<Matrix> = [
  {
    name: 'activation',
    title: 'Активация',
    audioUrl: import.meta.env.VITE_ACTIVATION_MATRIX,
    description: 'description activate 12316546465',
    recommendations: 'test activation recommendations'
  },
  {
    name: 'balance',
    title: 'Баланс',
    audioUrl: import.meta.env.VITE_BALANCE_MATRIX,
    description: 'description balance test 3 5 4sdf6ds5f46s',
    recommendations: 'test balance recommendations'
  },
  {
    name: 'rest',
    title: 'Восстановление',
    audioUrl: import.meta.env.VITE_REST_MATRIX,
    description: 'test rest',
    recommendations: 'test rest recommendations'
  }
]