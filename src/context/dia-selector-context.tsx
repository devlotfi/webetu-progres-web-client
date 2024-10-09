import { createContext, PropsWithChildren, useState } from 'react';
import { components } from '../__generated__/schema';

interface DiaSelectorContext {
  dia: components['schemas']['DiaDTO'] | null;
  setDia: (value: components['schemas']['DiaDTO'] | null) => void;
}

const initialValue: DiaSelectorContext = {
  dia: null,
  setDia() {},
};

export const DiaSelectorContext = createContext(initialValue);

export default function DiaSelectorProvider({ children }: PropsWithChildren) {
  const [dia, setDia] = useState<components['schemas']['DiaDTO'] | null>(
    initialValue.dia,
  );

  return (
    <DiaSelectorContext.Provider
      value={{
        dia,
        setDia,
      }}
    >
      {children}
    </DiaSelectorContext.Provider>
  );
}
