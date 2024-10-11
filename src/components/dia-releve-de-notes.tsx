import { Divider, Spinner } from '@nextui-org/react';
import { components } from '../__generated__/schema';
import { $api } from '../open-api-client';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useTranslation } from 'react-i18next';
import DiaBilanAnnuel from './dia-bilan-annuel';
import DiaPeriodeBilans from './dia-periode-bilans';

interface Props {
  dia: components['schemas']['DiaDTO'];
}

export default function DiaReleveDeNotes({ dia }: Props) {
  const { t, i18n } = useTranslation();
  const { authData } = useContext(AuthContext);

  if (!authData) {
    throw new Error('No user');
  }

  const { data: bilanAnnueldata, isLoading: bilanAnnuelIsLoading } =
    $api.useQuery('get', '/api/infos/bac/{userUUID}/dia/{diaId}/annuel/bilan', {
      params: {
        path: {
          userUUID: authData.uuid,
          diaId: `${dia.id}`,
        },
      },
    });

  const { data: periodeBilansData, isLoading: periodeBilansIsLoading } =
    $api.useQuery(
      'get',
      '/api/infos/bac/{userUUID}/dias/{diaId}/periode/bilans',
      {
        params: {
          path: {
            userUUID: authData.uuid,
            diaId: `${dia.id}`,
          },
        },
      },
    );

  if (bilanAnnuelIsLoading || periodeBilansIsLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner size="lg" color="primary"></Spinner>
      </div>
    );
  }

  if (!periodeBilansData || !Array.isArray(periodeBilansData)) {
    return;
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3 text-primary font-bold text-[18pt]">
        <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
          <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
        </div>
        <div className="flex">{t('transcripts')}</div>
      </div>

      <DiaBilanAnnuel bilansAnnuels={bilanAnnueldata}></DiaBilanAnnuel>
      <Divider></Divider>
      <DiaPeriodeBilans periodeBilans={periodeBilansData}></DiaPeriodeBilans>
    </div>
  );
}
