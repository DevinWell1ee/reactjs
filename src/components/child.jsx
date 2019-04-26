import React, { Component } from 'react'
import SubChild from './subchild'
import PropTypes from 'prop-types'

class Child extends Component {
  constructor (props) { // 1. Initializing state
    super(props)

    this.state = {
      number: ''
    }
  }

  componentDidMount () {
    console.log('did mount')
    // 2. Fetching external data
	  // 3. Adding event listeners (or subscriptions)
  }

  static getDerivedStateFromProps(nextProps, prevState) { // 代替component will receive props
    console.log('receive props')
    console.log(nextProps, console.log(prevState))
    // 静态方法，拿不到实例,返回值会自动setState

    // 4. Updating state based on props
    // 7. Fetching external data when props change

    if (nextProps.number !== prevState.number) {
      return {
        number: nextProps.number,
      }
    }

    // 不需要更新
    return null
  }

  shouldComponentUpdate () {
    console.log('should update')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('after render')
    // 8. Reading DOM properties before an update
    return null
  }

  componentDidUpdate () {
    console.log('did update')
    // 5. Invoking external callbacks
	  // 6. Side effects on props change
  }

  render () {
    return (
      <div>
        child component content: { this.state.number }

        <button onClick={ () => this.props.changeNumber(3) }>change number</button>

        <SubChild></SubChild>
      </div>
    )
  }
}

Child.propTypes = {
  number: PropTypes.number
}

export default Child