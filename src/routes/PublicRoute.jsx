import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/index';

export const PublicRoute = ({ children }) => {
  const { logged } = useContext( AuthContext )
  return (!logged )
    ? children
    : <Navigate to='/' />
}
