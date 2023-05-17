// import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShown = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' });
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    // dispatch({ type: 'INCREASE', amount: 5 });
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE_COUNTER' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={increaseHandler}>
          Increase by 5
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button type="button" onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>
//           <button type="button" onClick={this.decrementHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

//function that maps redux state to props which will be received in this component then.
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//connect() returns a new function a value
