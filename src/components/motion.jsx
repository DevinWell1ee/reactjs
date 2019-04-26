import React, {Component} from 'react'
import {Motion, spring, presets, StaggeredMotion, TransitionMotion} from 'react-motion'

import '../asstes/css/style.css'

class Test1 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      left: 0,
      length: 10,
      show: false
    }
  }

  clickHandler() {
    console.log('###')
    let target
    if(this.state.left === 0) target = 200
    else target = 0

    this.setState({
      left: target
    })
  }

  addLength() {
    let newLength

    if (this.state.length) {
      newLength = 0
    } else {
      newLength = 10
    }

    this.setState({
      length: newLength
    })
  }

  clickHandler1 () {
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount() {
    this.clickHandler()
  }

  willEnter(styleThatEnter) {
    return { scale: 0 }
  }

  willLeave(styleThatLeft) {
    return { scale: spring(0) }
  }

  render() {
    let boxes = []
    for (let i = 0, len = this.state.length; i < len; i++) {
      boxes.push({
        scale: 0
      })
    }

    return (
      <div className="container">
        <Motion style={{x: spring(this.state.left, presets.wobbly)}}>
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{transform: `translateX(${interpolatingStyle.x}px)`}} className='box'></div>
            )
          }}
        </Motion>

        <button onClick={this.clickHandler.bind(this)}>run</button>

        <div>
          {this.state.length > 0 ? (
            <StaggeredMotion defaultStyles={boxes}
              styles={prevStyles => prevStyles.map((item, i) => {
                return i === 0
                  ? { scale: spring(1, { ...presets.noWobble }) }
                  : prevStyles[i - 1]
              })}>
              {interpolatingStyles =>
                <div style={{display: 'flex'}}>
                  {interpolatingStyles.map((item, i) => {
                    return (
                      <div className="box2"
                        key={i}
                        style={{
                          transform: `scale(${item.scale}, ${item.scale})`
                        }}></div>
                    )
                  })}
                </div>
              }
            </StaggeredMotion>
          ) : null}
        </div>

        <button onClick={this.addLength.bind(this)}>run1</button>


        <TransitionMotion styles={this.state.show ? [{
          key: 'test',
          style: { scale: spring(1) }
        }] : []}
          willEnter={this.willEnter}
          willLeave={this.willLeave}>
          {inStyles => (
              inStyles[0] ? (
                <div className="box3"
                  key={inStyles[0].key}
                  style={{
                    transform: `scale(${inStyles[0].style.scale},${inStyles[0].style.scale})`
                  }}></div>
              ) : null
          )}
        </TransitionMotion>

        <button onClick={this.clickHandler1.bind(this)}>run2</button>
      </div>
    )
  }
}

export default Test1