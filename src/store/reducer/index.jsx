import {
  ADD,
  SUBTRACT,
  ADD_TODO,
  GAIN_RANDOM,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../action/index'

import Immutable from 'immutable'


// 异步reudx-saga
export const randomSaga = function(state = '', action) {
  switch (action.type) {
    case 'GAIN_RANDOM':
      return action.value
    default:
      return state
  }
}


// 计数器retucer
const counterState = Immutable.fromJS({ counter: 0 })

const counterReducer = function (state = counterState, action) {
  if (action.type === ADD) {
    return state.set('counter', state.get('counter') + 1)
  } else if (action.type === SUBTRACT) {
    return state.set('counter', state.get('counter') - 1)
  }

  return state
}

const filterState = 'SHOW_ALL'
const visibilityFilter = (state = filterState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [
  {text: 'xxx', completed: true},
  {text: 'vvvv', completed: false}
], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    // case TOGGLE_TODO:
    //   return state.map((todo, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, todo, {
    //         completed: !todo.completed
    //       })
    //     }
    //     return todo
    //   })
    default:
      return state
  }
}

export default {
  counter: counterReducer,
  random: randomSaga,
  visibilityFilter,
  todos
}