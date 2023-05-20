import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { fetchUsers } from '../store/users/usersSlice';
import DisplayUser from './DisplayUser';

export const AllUsers = () => {
  const {users, isLoading, error} = useSelector((store)=> store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users);
  }, [])
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1> {error}</h1>}
      <h1>Users</h1>
      {users &&
        users.map((user) => {
          return <DisplayUser key={crypto.randomUUID()} {...user} />;
        })}
    </div>
  );
};
