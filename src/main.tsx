import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from './context/theme-context.tsx';
import AuthProvider from './context/auth-context.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './i18next.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </NextUIProvider>
  </StrictMode>,
);
