import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/user';
import CardComponent from './CardComponent';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch])
  
    return (
      <>
        {users.loading && <p>Loading...</p>}
        {users.length === 0 && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}
        {users.length > 0 && users.map((user) => (
            <div className="divider">
          <CardComponent key={user.id} user={user} />
          </div>
        ))}
      </>
    )
  }

export default Users;