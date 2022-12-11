import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

  const { user, logOut } = UserAuth();  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
      <h1 className='text-blue-700 text-7xl font-bold cursor-pointer'>Movie Key</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Listem</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-blue-700 px-6 py-2 rounded cursor-pointer text-white'
          >
            Çıkış
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Kayıt Olmak</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-blue-700 px-6 py-2 rounded cursor-pointer text-white'>
              Üye Olmak
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar