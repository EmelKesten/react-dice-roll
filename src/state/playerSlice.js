import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    appData: {
        player0: {
            name: "Player 1",
            score: 0,
            currentScore: 0,
            isActive: true,
            isWinner: false,
        },
        player1: {
            name: "Player 2",
            score: 0,
            currentScore: 0,
            isActive: false,
            isWinner: false,
        },
    },
  };
  
  export const playerSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
      addData: (state, action) => {
        state.appData = action.payload;
      },
    },
  });
  
  export const { addData } = playerSlice.actions;
  
  export default playerSlice.reducer;
  