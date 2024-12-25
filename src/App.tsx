import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import SignInPage from './pages/sign-in-page';
import NotProtectedRoute from './router/not-protected-route';
import DashboardDataProvider from './context/dashboard-data-context';
import DashboardLayout from './layout/dashboard-layout';
import ProtectedRoute from './router/protected-route';
import HomePage from './pages/home-page';
import NotesBacPage from './pages/notes-bac-page';
import DiasPage from './pages/dias-page';
import DiaSelectorProvider from './context/dia-selector-context';
import GroupsPage from './pages/groups-page';
import ReleveDeNotesPage from './pages/releve-de-notes-page';

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col bg-background">
        <Routes>
          <Route index element={<Navigate to="/sign-in"></Navigate>}></Route>
          <Route
            path="/sign-in"
            element={
              <NotProtectedRoute>
                <SignInPage></SignInPage>
              </NotProtectedRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardDataProvider>
                  <DashboardLayout></DashboardLayout>
                </DashboardDataProvider>
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="bac" element={<NotesBacPage></NotesBacPage>}></Route>
            <Route
              path="groupes"
              element={
                <DiaSelectorProvider>
                  <GroupsPage></GroupsPage>
                </DiaSelectorProvider>
              }
            ></Route>
            <Route
              path="releve-de-notes"
              element={
                <DiaSelectorProvider>
                  <ReleveDeNotesPage></ReleveDeNotesPage>
                </DiaSelectorProvider>
              }
            ></Route>
            <Route path="dias" element={<DiasPage></DiasPage>}></Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
