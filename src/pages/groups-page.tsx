import DiaSelector from '../components/dia-selector';
import { useContext } from 'react';
import DiaGroupes from '../components/dia-groups';
import { DiaSelectorContext } from '../context/dia-selector-context';

export default function GroupsPage() {
  const { dia } = useContext(DiaSelectorContext);

  return (
    <div className="flex flex-col flex-1 items-center pt-[2rem] px-[0.5rem]">
      <div className="flex flex-col w-full max-w-[55rem]">
        <DiaSelector></DiaSelector>

        {dia ? <DiaGroupes dia={dia}></DiaGroupes> : null}
      </div>
    </div>
  );
}
