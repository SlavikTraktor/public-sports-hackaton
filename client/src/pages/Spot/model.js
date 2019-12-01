export const spot = {
  state: {
    playersList: [
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
      'Вася Пупкин',
    ],
  },
  reducers: {
    checkinMeHere: (state, payload) => ({
      playersList: [
        ...state.playersList,
        payload,
      ],
    }),
  },
};
