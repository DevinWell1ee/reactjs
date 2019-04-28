import React from 'react'

var enhanceComponent = (Component) =>
  class Enhance extends React.Component {
    constructor(props) {
      super(props);

      this.state = { remoteTitle: '' };
    }

    componentDidMount() {
      // ajax -> set remoteTitle
      setTimeout(() => {
        this.setState({
          remoteTitle: 'remoteTitle'
        })
      }, 200)
    }

    render() {
      return (
        <Component
          {...this.props}
          remoteTitle={ this.state.remoteTitle } // 添加props
        />
      )
    }
  };

var OriginalTitle  = ({ remoteTitle }) =>
  <h1>{ remoteTitle }</h1>;

var EnhancedTitle = enhanceComponent(OriginalTitle);

export default EnhancedTitle

