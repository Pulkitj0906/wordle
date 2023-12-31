import { create } from 'zustand'

interface SideModalStore{
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
};

const useSideModal = create<SideModalStore>((set) => ({
    isOpen: false,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false })
}));

export default useSideModal;