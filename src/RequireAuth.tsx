import { Navigate, Outlet } from "react-router";
import { useGetIsLoggedIn } from 'hooks';


export const RequireAuth = () => {
  const isLoggedIn = useGetIsLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/unlock" />;
  }

  return (
    <Outlet />
  )
};