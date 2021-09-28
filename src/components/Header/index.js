import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaPowerOff,
  FaUserPlus,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.success('You have successfully logged out');
    history.push('/');
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={17} title="Home" />
        <span>Home</span>
      </Link>
      <Link to="../../register">
        {isLoggedIn ? (
          <>
            <FaUserAlt size={16} title="Edit" /> <span>Edit Account</span>
          </>
        ) : (
          <>
            <FaUserPlus size={16} title="Register" />
            <span>Register</span>
          </>
        )}
      </Link>
      {isLoggedIn ? (
        <>
          <Link onClick={handleLogout} to="/logout" title="Logout">
            <FaPowerOff size={16} />
            <span>Logout</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="login" title="Login">
            <FaSignInAlt size={16} />
            <span>Login</span>
          </Link>
        </>
      )}
    </Nav>
  );
}
