import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cohorts: [
    {
      id: '1',
      name: 'MC-45',
      track: 'Full Stack',
      startDate: '2024-01-01',
      endDate: '2024-06-30'
    },
    {
      id: '2',
      name: 'MC-46',
      track: 'Android',
      startDate: '2024-03-01',
      endDate: '2024-08-31'
    }
  ],
  loading: false,
  error: null
};

const cohortsSlice = createSlice({
  name: 'cohorts',
  initialState,
  reducers: {
    setCohorts: (state, action) => {
      state.cohorts = action.payload;
    },
    addCohort: (state, action) => {
      state.cohorts.push(action.payload);
    },
    updateCohort: (state, action) => {
      const index = state.cohorts.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.cohorts[index] = action.payload;
      }
    },
    deleteCohort: (state, action) => {
      state.cohorts = state.cohorts.filter(c => c.id !== action.payload);
    }
  }
});

export const { setCohorts, addCohort, updateCohort, deleteCohort } = cohortsSlice.actions;
export default cohortsSlice.reducer;