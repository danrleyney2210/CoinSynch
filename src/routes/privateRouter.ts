import { useParams, Navigate } from 'react-router-dom';

interface IRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: IRoutesProps) => {
  const params = useParams<{ id?: string }>();
  return params.id ? children : <Navigate to="/" />;
};
