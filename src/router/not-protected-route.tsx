import { PropsWithChildren, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Navigate } from 'react-router';

export default function NotProtectedRoute({ children }: PropsWithChildren) {
  const { authData } = useContext(AuthContext);

  if (authData) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return children;
}
