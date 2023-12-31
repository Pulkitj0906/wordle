import { create } from 'zustand'

interface KeyboardStore{
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
};

const useKeyboard = create<KeyboardStore>((set) => ({
    isOpen: true,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false })
}));

export default useKeyboard;