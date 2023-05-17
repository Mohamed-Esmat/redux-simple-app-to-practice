import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Header  from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
