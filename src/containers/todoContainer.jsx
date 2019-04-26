import { connect } from 'react-redux'
import { makeGetVisibleTodos } from '../store/selector'

import TodoList from 'components/todolist'

import * as action from '../store/action'

const makeMapStateToProps = () => {
  const getVisibleTodos = makeGetVisibleTodos()

  const mapStateToProps = (state, props) => {
    console.log(state)
    console.log(props)
    return {
      todos: getVisibleTodos(state, props)
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (text) => {
      dispatch(action.toggleTodo(text))
    },

    addToDo: (param) => {
      dispatch(action.addTodo(param))
    },

    setFilter: (value) => {
      dispatch(action.setVisibilityFilter(value))
    }
  }
}

const VisibleTodoList = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList