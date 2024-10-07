import { Button, Card, Spinner, Tooltip } from '@nextui-org/react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { $api } from '../open-api-client';
import DiaItem from './dia-item';

export default function DiaSelector() {
  const { authData } = useContext(AuthContext);

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
    <div className="flex overflow-x-auto w-full space-x-7 py-[1rem] px-[3rem]">
      {data.map((dia) => (
        <Tooltip
          showArrow={true}
          placement="bottom"
          content={<DiaItem dia={dia}></DiaItem>}
        >
          <Button variant="faded" className="px-[2rem] min-w-[10rem]">
            {dia.anneeAcademiqueCode}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
