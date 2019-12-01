export const spot = {
  state: {
    playersList: [
      'Вася Пупкин',
      'Иван Иванов',
      'Александр Сидоров',
      'Дядя Вася',
      'Леха со двора',
      'Тироназавр Рекс',
      'Кама Пуля',
      'Монгол',
      'Брат Гоблыча',
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
