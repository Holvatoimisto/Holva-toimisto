import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface ModalContextType {
  open: boolean;
  /** Mikä CTA avasi modalin — lähetetään Formspreen mukana (spec §28 source tracking) */
  source: string;
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("tuntematon");
  const openModal = useCallback((s: string = "tuntematon") => {
    setSource(s);
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <ModalContext.Provider value={{ open, source, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
