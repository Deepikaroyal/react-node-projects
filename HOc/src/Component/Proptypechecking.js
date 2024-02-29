import PropTypes from 'prop-types';
import React from 'react';

class Greeting extends React.Component {

  render() {
    return (
      <h1>Hello: {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name:  PropTypes.array
};
export default Greeting;