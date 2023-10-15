import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminGuard = () => {
      let isAdmin = false
      return isAdmin ? <Outlet /> : <h1>Вы не админ</h1>
};

export default AdminGuard;