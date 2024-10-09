import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { components } from '../__generated__/schema';
import { $api } from '../open-api-client';
import { AuthContext } from './auth-context';
import { Spinner } from '@nextui-org/react';
import Logo from '../assets/svg/logo.svg';

interface DashboardDataContext {
  image?: string;
  bacIndividu?: components['schemas']['BacIndivuduDTO'];
  anneeAcademique?: components['schemas']['AnneeAcademiqueDTO'];
  dias?: components['schemas']['DiaDTO'][];

  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const initialValue: DashboardDataContext = {
  sidebarOpen: true,
  setSidebarOpen() {},
};

export const DashboardDataContext = createContext(initialValue);

export default function DashboardDataProvider({ children }: PropsWithChildren) {
  const { authData } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  if (!authData) {
    throw new Error('No user');
  }

  const { data: imageData, isLoading: imageIsLoading } = $api.useQuery(
    'get',
    '/api/infos/image/{userUUID}',
    {
      params: {
        path: {
          userUUID: authData.uuid,
        },
      },
      parseAs: 'text',
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: true,
    },
  );

  const { data: bacIndividuData, isLoading: bacIndividuIsLoading } =
    $api.useQuery('get', '/api/infos/bac/{userUUID}/individu', {
      params: {
        path: {
          userUUID: authData.uuid,
        },
      },
    });

  const { data: anneeAcademiqueData, isLoading: anneeAcademiqueIsLoading } =
    $api.useQuery('get', '/api/infos/AnneeAcademiqueEncours');

  const { data: diasData, isLoading: diasIsLoading } = $api.useQuery(
    'get',
    '/api/infos/bac/{userUUID}/dias',
    {
      params: {
        path: {
          userUUID: authData.uuid,
        },
      },
    },
  );

  if (
    imageIsLoading ||
    bacIndividuIsLoading ||
    anneeAcademiqueIsLoading ||
    diasIsLoading
  ) {
    return (
      <div className="fixed h-screen w-screen top-0 left-0 flex flex-col justify-center items-center space-y-7">
        <img className="h-[7rem]" src={Logo} alt="logo" />
        <Spinner color="primary" size="lg"></Spinner>
      </div>
    );
  }

  return (
    <DashboardDataContext.Provider
      value={{
        image: imageData,
        bacIndividu: bacIndividuData,
        anneeAcademique: anneeAcademiqueData,
        dias: diasData,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </DashboardDataContext.Provider>
  );
}
