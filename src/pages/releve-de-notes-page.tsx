import { useContext } from 'react';
import DiaSelector from '../components/dia-selector';
import { DiaSelectorContext } from '../context/dia-selector-context';
import DiaReleveDeNotes from '../components/dia-releve-de-notes';

export default function ReleveDeNotesPage() {
  const { dia } = useContext(DiaSelectorContext);

  return (
    <div className="flex flex-col flex-1 items-center pt-[2rem] px-[0.5rem]">
      <div className="flex flex-col w-full max-w-[55rem]">
        <DiaSelector></DiaSelector>

        {dia ? <DiaReleveDeNotes dia={dia}></DiaReleveDeNotes> : null}
      </div>
    </div>
  );
}
