import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMesssageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMesssageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMesssageIsOpen = false;
    },
    },
  });
  
export const { 
  selectMail, 
  openSendMessage, 
  closeSendMessage 
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMesssageIsOpen = (state) => state.mail.sendMesssageIsOpen;

export default mailSlice.reducer;
