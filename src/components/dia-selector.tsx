import { Button, Card, Spinner } from '@nextui-org/react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth-context';
import { $api } from '../open-api-client';
import { components } from '../__generated__/schema';
import DiaItem from './dia-item';

export default function DiaSelector() {
  const { authData } = useContext(AuthContext);
  const [selectedDia, setSelectedDia] = useState<
    components['schemas']['DiaDTO'] | null
  >(null);

  if (!authData) {
    throw new Error('No user');
  }

  const { data, isLoading } = $api.useQuery(
    'get',
    '/api/infos/bac/{userUUID}/dias',
    {
      params: {
        path: {
          userUUID: authData?.uuid,
        },
      },
    },
  );

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Spinner size="lg" color="primary"></Spinner>
      </div>
    );
  }

  if (!data) {
    return;
  }

  return (
    <div className="flex flex-col overflow-x-hidden w-full">
      <div className="flex overflow-x-auto space-x-7 py-[1rem] px-[3rem]">
        {data.map((dia) => (
          <Button
            onPress={() => setSelectedDia(dia)}
            variant="faded"
            className="px-[2rem] min-w-[10rem]"
          >
            {dia.anneeAcademiqueCode}
          </Button>
        ))}
      </div>
      <h1>lol</h1>
    </div>
  );
}
