import React from 'react';
import { connect } from 'react-redux';

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num };
}
function decrementCounter(num) {
  return { type: 'DECREMENT', num: num };
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  function handleClickDecrement() {
    props.decrementCounter(-1);
  }
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
