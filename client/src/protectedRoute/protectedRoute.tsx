// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import DashboardPage from '../pages/DashboardPage';

// interface ProtectedRouteProps {
//   path: string;
//   element: React.ReactNode;
// }

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

//   return isAuthenticated ? <Route path={"/dashboard"} element={<DashboardPage />} /> : <Navigate to="/login" />;

    // return(
    //     <Routes>
    //     {isAuthenticated ? (
    //       <Route path="/dashboard" element={<DashboardPage />} />
    //     ) : (
    //       <Navigate to="/" />
    //     )}
    //   </Routes>
    // )
    if (isAuthenticated) {
        return( 
            <Routes>
        <Route path="/" element={<DashboardPage />} />
        </Routes>
        );
      } else {
        return <Navigate to="/" />;
      }
};

export default ProtectedRoute;