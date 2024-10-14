import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
  //    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  //    const navigate = useNavigate();
  //    const user = useSelector(state => state.auth.userData);
  //    useEffect(() => {
  //   if (!isLoggedIn) {
  //      navigate('/login');
  //   }
  //   if (!user?.role === 111111111) {
  //    ;
  //      navigate('/login');
  //   }
  //    }, [isLoggedIn]);
  //    return <>{user?.role === 111111111 && isLoggedIn && children}</>;
}

export default PrivateRoute
