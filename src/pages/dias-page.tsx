import { useContext } from 'react';
import { $api } from '../open-api-client';
import { AuthContext } from '../context/auth-context';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from '@nextui-org/react';
import DiaItem from '../components/dia-item';

export default function DiasPage() {
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

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex flex-col px-[0.5rem] max-w-[58rem] w-full space-y-5 mt-[1rem]">
        <div className="flex mt-[0.5rem] items-center ml-[0.5rem] space-x-3 text-primary font-bold text-[18pt]">
          <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>
          <div className="flex">Inscriptions</div>
        </div>

        <div className="flex flex-col space-y-5 pb-[5rem]">
          {data?.map((dia) => (
            <DiaItem key={dia.id} dia={dia}></DiaItem>
          ))}
        </div>
      </div>
    </div>
  );
}
