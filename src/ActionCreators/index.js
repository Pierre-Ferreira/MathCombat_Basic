import * as types from '../constants/ActionTypes'

const questionsAnswered  = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})
