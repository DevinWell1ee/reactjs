import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as action from '../store/action'

import Counter from 'components/counter'

const counterContainer = connect(
  state => ({
    value: state.counter.get('counter')
  }),
  dispatch => ({
    add: () => dispatch(action.add()),
    subtract: () => dispatch(action.subtract())
  })
)(Counter);

export default counterContainer
