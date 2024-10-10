import { createBrowserRouter, Navigate } from 'react-router-dom';
import SignInPage from '../pages/sign-in-page';
import NotProtectedRoute from './not-protected-route';
import ProtectedRoute from './protected-route';
import DashboardLayout from '../layout/dashboard-layout';
import HomePage from '../pages/home-page';
import DashboardDataProvider from '../context/dashboard-data-context';
import NotesBacPage from '../pages/notes-bac-page';
import DiasPage from '../pages/dias-page';
import GroupsPage from '../pages/groups-page';
import DiaSelectorProvider from '../context/dia-selector-context';
import ReleveDeNotesPage from '../pages/releve-de-notes-page';

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
        element: <NotesBacPage></NotesBacPage>,
      },
      {
        path: '/dashboard/groupes',
        element: (
          <DiaSelectorProvider>
            <GroupsPage></GroupsPage>
          </DiaSelectorProvider>
        ),
      },
      {
        path: '/dashboard/releve-de-notes',
        element: (
          <DiaSelectorProvider>
            <ReleveDeNotesPage></ReleveDeNotesPage>
          </DiaSelectorProvider>
        ),
      },
      {
        path: '/dashboard/dias',
        element: <DiasPage></DiasPage>,
      },
    ],
  },
]);
