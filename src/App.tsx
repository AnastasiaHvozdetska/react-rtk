import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './App.css';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {
  const dispatch = useAppDispatch();
  const { increment } = userSlice.actions
  const { count, users, isLoading, error } = useAppSelector(state => state.userReducer);


  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {count}
      {/* {isLoading  && <h1>...loading</h1>}
      {error  && <h1>{error}</h1>} */}
      {/* {JSON.stringify(users, null, 2)} */}
      <button onClick={() => dispatch(increment(1))}>Click</button>

      <PostContainer />
    </div>
  );
}

export default App;
