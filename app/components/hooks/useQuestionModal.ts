import { create } from 'zustand'

interface QuestionModalStore{
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;

};

const useQuestionModal = create<QuestionModalStore>((set) => ({
    isOpen: true,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false })
}));

export default useQuestionModal;