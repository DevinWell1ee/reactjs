export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const GAIN_RANDOM = 'GAIN_RANDOM'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const add = () => ({ type: ADD })
export const subtract = () => ({ type: SUBTRACT })
export const random = (value) => ({ type: GAIN_RANDOM, value })

export function addTodo (text) {
  return { type: ADD_TODO, text }
}
export function toggleTodo (index) {
  return { type: TOGGLE_TODO, index }
}
export function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

