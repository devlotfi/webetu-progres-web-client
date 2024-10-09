import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import DiaSelector from '../components/dia-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { $api } from '../open-api-client';
import { useContext } from 'react';
import DiaGroups from '../components/dia-groups';
import { DiaSelectorContext } from '../context/dia-selector-context';

export default function GroupsPage() {
  const { dia } = useContext(DiaSelectorContext);

  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="flex flex-col w-full max-w-[55rem]">
        <DiaSelector></DiaSelector>

        <div className="flex items-center space-x-3 text-primary font-bold text-[18pt]">
          <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
          </div>
          <div className="flex">Groupes</div>
        </div>

        {dia ? <DiaGroups dia={dia}></DiaGroups> : null}
      </div>
    </div>
  );
}
