import { createBrowserRouter, Navigate } from 'react-router-dom';
import SignInPage from '../pages/sign-in-page';
import NotProtectedRoute from './not-protected-route';
import ProtectedRoute from './protected-route';
import DashboardLayout from '../layout/dashboard-layout';
import HomePage from '../pages/home-page';
import DashboardDataProvider from '../context/dashboard-data-context';
import BacMarksPage from '../pages/bac-marks-page';
import DiasPage from '../pages/dias-page';
import GroupsPage from '../pages/groups-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/sign-in"></Navigate>,
  },
  {
    path: '/sign-in',
    element: (
      <NotProtectedRoute>
        <SignInPage></SignInPage>
      </NotProtectedRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardDataProvider>
          <DashboardLayout></DashboardLayout>
        </DashboardDataProvider>
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <HomePage></HomePage>,
      },
      {
        path: '/dashboard/bac',
        element: <BacMarksPage></BacMarksPage>,
      },
      {
        path: '/dashboard/groupes',
        element: <GroupsPage></GroupsPage>,
      },
      {
        path: '/dashboard/dias',
        element: <DiasPage></DiasPage>,
      },
    ],
  },
]);
