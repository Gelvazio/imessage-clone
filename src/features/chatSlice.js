/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',

  initialState: {
    chatId: null,
    chatName: null,
  },

  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});

export const { setChat } = chatSlice.actions;
export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;
export default chatSlice.reducer;
