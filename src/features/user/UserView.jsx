import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'


const UserView = () => {
  const user = useSelector(state => state.user)
  

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchUsers())    
    } catch (e) {
      console.log(error);
    }
  
  }, [])
  
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>Error: {user.error} </div>}
      {!user.loading && user.users.length > 0 && user.users?.map((user)=>(<p>{user.name}</p>))}
    </div>
  )
}

export default UserView
