import { createSlice } from "@reduxjs/toolkit"

interface FavoriteState {
    favorites: any[];
}

const initialState: FavoriteState = {
    favorites: []
}

const favoritesSlice = createSlice({
    name: "favoriteHotels",
    initialState,
    reducers: {
        addFavorite(state, action) {
            const exists = state.favorites.find(hotel => hotel.id === action.payload.id)
            if (!exists)
                state.favorites.push(action.payload)
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter((hotel) => hotel.id !== action.payload)
        },
        clearFavorite(state) {
            state.favorites = []
        }
    }
})

export const { addFavorite, removeFavorite, clearFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer