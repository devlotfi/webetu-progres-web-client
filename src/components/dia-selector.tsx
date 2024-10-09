import { Button } from '@nextui-org/react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiaSelectorContext } from '../context/dia-selector-context';

export default function DiaSelector() {
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
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex ml-[1.5rem] items-center space-x-3 text-primary font-bold text-[15pt]">
        <div className="flex h-[2.3rem] w-[2.3rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
        </div>
        <div className="flex">Choisir une periode</div>
      </div>

      <div className="flex overflow-x-auto space-x-5 py-[1rem] px-[1rem]">
        {dias.map((dia) => (
          <Button
            key={dia.id}
            onPress={() => setDia(dia)}
            variant={selectedDia?.id === dia.id ? 'solid' : 'faded'}
            color={selectedDia?.id === dia.id ? 'primary' : 'default'}
            className="px-[2rem] min-w-[10rem] h-auto"
          >
            <div className="flex flex-col items-center py-[0.5rem]">
              <div className="flex font-bold text-[12pt]">
                {dia.anneeAcademiqueCode}
              </div>
              <div className="flex">{dia.niveauLibelleLongLt}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
