import { createSlice } from "@reduxjs/toolkit";



export const messageSlicer = createSlice({
   name: 'message',
   initialState: {
      messageId: null

   },
   reducers: {
      messageIDS: (state, action) => {
         state.messageId = action.payload.messageId
      }
   },
});

export const { messageIDS } = messageSlicer.actions;
export const selectMessageId = state => state.message.messageId;
export default messageSlicer.reducer
