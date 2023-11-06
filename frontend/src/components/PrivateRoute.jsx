import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// only if user is logged in - the outlet children routes will be accessible
//else redirected to login 
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
