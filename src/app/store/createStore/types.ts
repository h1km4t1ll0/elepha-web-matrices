import store from '@/app/store/createStore/createStore.js'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch