import { configureStore } from '@reduxjs/toolkit'
import FavoritesSlice from '../FavoritesSlice'


export const store = configureStore({
    reducer: {
        FavoritesSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch