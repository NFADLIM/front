import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const isLogin = Cookies.get('token');
	return isLogin ? <Outlet /> : <Navigate to="/UPerVR/admin/login" />;
};

export default ProtectedRoute;
