import React, { Component } from 'react'
import {connect} from 'react-redux'

import Saga from '@/components/saga'

const numberContainer = connect(
  state => ({
    value: state.random
  }),
  dispatch => ({
    change: () => dispatch({type: 'RANDOM'})
  })
)(Saga);

export default numberContainer