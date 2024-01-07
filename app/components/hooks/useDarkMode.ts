import { create } from 'zustand'

interface DarkModeStore{
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
};

const useDarkMode = create<DarkModeStore>((set) => ({
    isOpen: true,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false })
}));

export default useDarkMode;