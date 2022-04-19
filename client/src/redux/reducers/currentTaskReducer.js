export const currentTaskReducer = (state = [], action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'GET_GEOCOD' :
      return payload
    default:
      return state;
  }
}
