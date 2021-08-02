import { getUsers } from './actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div className="App">
      {users && users.map((user) => <h1 key={user.id}>{user.name}</h1>)}
    </div>
  );
}

export default App;
