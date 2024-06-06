import { PropsWithChildren, createContext, useContext, useState } from "react";

interface OutletAnimationContextInterface {
  visible: boolean;
  toggleVisibility: () => void;
}

const OutletAnimationContext = createContext<OutletAnimationContextInterface>(
  {} as OutletAnimationContextInterface,
);

function OutletAnimationProvider({ children }: PropsWithChildren) {
  const [visible, setVisible] = useState<boolean>(false);

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <OutletAnimationContext.Provider value={{ visible, toggleVisibility }}>
      {children}
    </OutletAnimationContext.Provider>
  );
}

export { OutletAnimationProvider, OutletAnimationContext };
export type { OutletAnimationContextInterface };
