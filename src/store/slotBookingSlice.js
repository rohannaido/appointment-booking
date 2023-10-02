import { createSlice } from '@reduxjs/toolkit';

const slotBookingSlice = createSlice({
  name: 'slotBooking',
  initialState: {
    value: {},
  },
  reducers: {
    addSlot: (state, action) => {
      state.value = action.payload;
    },
    removeSlot: (state) => {
      state.value = {};
    },
  },
});

export const { addSlot, removeSlot } = slotBookingSlice.actions;
export const selectSlot = (state) => state.slotBooking.value;

export default slotBookingSlice.reducer;
