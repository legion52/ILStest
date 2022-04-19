
export const tasksReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_ALL_ADDRESS_FROM_SERVER':
      return payload;
      default:
      return state;
  }
}
