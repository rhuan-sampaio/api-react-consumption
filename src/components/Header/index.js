﻿import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
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
        <FaHome size={24} title="Home" />
      </Link>
      <Link to="../../register">
        {isLoggedIn ? (
          <FaUserAlt size={22} title="Edit" />
        ) : (
          <FaUserPlus size={24} title="Register" />
        )}
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout" title="Logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="login" title="Login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && (
        <div className="online">
          <FaCircle title="User Online" size={24} /> <span>Online</span>
        </div>
      )}
    </Nav>
  );
}
