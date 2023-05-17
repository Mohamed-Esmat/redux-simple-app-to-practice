// import { connect } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';



// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'TOGGLE_COUNTER') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     }
//   }
//   return state;

// }
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
});


export default store;
// store.dispatch({type: 'INCREMENT'})
