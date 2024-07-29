// components/PrivateRoute.js
// src/components/PrivateRoute.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return user ? children : null;
};

export default PrivateRoute;
