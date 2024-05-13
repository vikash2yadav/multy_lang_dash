import React, { useContext } from 'react'
import { UserAuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { userDetails } = useContext(UserAuthContext);

  const handleLogOut = () => {
    localStorage.removeItem('authorization')
    navigate('/login')
  }

  return (
    <>
      <h1> {JSON.stringify(userDetails)} </h1>
      <button className='px-2 py-1 text-blue-300 bg-gray-300'
        onClick={handleLogOut}
      >Log Out</button>    
    </>
  )
}

export default Dashboard