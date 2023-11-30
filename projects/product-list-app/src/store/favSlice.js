
import { createSlice } from '@reduxjs/toolkit';
const favSlice = createSlice({
    name: 'favSlice',
    initialState: {
        favItems: []
    },
    reducers: {
        addFavItem(state, action) {
            const product = state.favItems.find(item => item.id === action.payload.id);
            if (!product) {
                state.favItems.push(action.payload);
            }
        },
        removeFavItem(state, action) {
            state.favItems = state.favItems.filter(item => item.id !== action.payload.id);
        },
        
    }

});
export const { addFavItem, removeFavItem, clearFavItems } = favSlice.actions;
export default favSlice.reducer;