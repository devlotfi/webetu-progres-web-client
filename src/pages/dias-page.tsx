import { useContext } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DiaItem from '../components/dia-item';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { useTranslation } from 'react-i18next';

export default function DiasPage() {
  const { t } = useTranslation();
  const { dias } = useContext(DashboardDataContext);

  if (!dias) {
    return;
  }

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex flex-col px-[0.5rem] max-w-[58rem] w-full space-y-5 mt-[1rem]">
        <div className="flex mt-[0.5rem] items-center ml-[0.5rem] space-x-3 text-primary font-bold text-[18pt]">
          <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>
          <div className="flex">{t('inscriptions')}</div>
        </div>

        <div className="flex flex-col space-y-5 pb-[5rem]">
          {dias.map((dia) => (
            <DiaItem key={dia.id} dia={dia}></DiaItem>
          ))}
        </div>
      </div>
    </div>
  );
}
