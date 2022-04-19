import { GET_ALL_ADDRESS, GET_CURRENT_ADDRESS } from "../types/tasksType";

export const getAllAddress = () => ({
  type: 'GET_ALL_ADDRESS'
})


export const getCurrentAddress = (task) => {
  console.log(task);
  return {
  type: GET_CURRENT_ADDRESS,
  payload: task
}
}
