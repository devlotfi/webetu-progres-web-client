import { Button, ScrollShadow } from '@nextui-org/react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiaSelectorContext } from '../context/dia-selector-context';
import { useTranslation } from 'react-i18next';

export default function DiaSelector() {
  const { t, i18n } = useTranslation();
  const { authData } = useContext(AuthContext);
  const { dias } = useContext(DashboardDataContext);
  const { dia: selectedDia, setDia } = useContext(DiaSelectorContext);

  if (!authData) {
    throw new Error('No user');
  }

  if (!dias) {
    return;
  }

  return (
    <div className="flex flex-col overflow-x-hidden mb-[1rem]">
      <div className="flex items-center space-x-3 text-primary font-bold text-[15pt]">
        <div className="flex h-[2.3rem] w-[2.3rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
        </div>
        <div className="flex">{t('choosePeriod')}</div>
      </div>

      <ScrollShadow
        orientation="horizontal"
        className="flex overflow-x-auto space-x-5 py-[1.7rem] px-[1rem]"
        size={150}
      >
        {/* <div className="flex overflow-x-auto space-x-5 py-[1.7rem] px-[1rem]"> */}
        {dias.map((dia) => (
          <Button
            key={dia.id}
            onPress={() => setDia(dia)}
            variant={selectedDia?.id === dia.id ? 'shadow' : 'faded'}
            color={selectedDia?.id === dia.id ? 'secondary' : 'default'}
            className="px-[0.5rem] min-w-[15rem] h-auto w-full"
          >
            <div className="flex flex-col items-center py-[0.5rem] break-words break-all whitespace-break-spaces">
              <div className="flex font-bold text-[12pt]">
                {dia.anneeAcademiqueCode}
              </div>
              <div className="flex font-bold">
                {i18n.language === 'ar'
                  ? dia.niveauLibelleLongAr
                  : dia.niveauLibelleLongLt}
              </div>
              <div className="flex">
                {i18n.language === 'ar'
                  ? dia.llEtablissementArabe
                  : dia.llEtablissementLatin}
              </div>
            </div>
          </Button>
        ))}
      </ScrollShadow>
    </div>
  );
}
