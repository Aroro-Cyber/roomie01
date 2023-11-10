import { create } from "zustand";
import { useSearchValueType } from "../../types";

export const useSearchValue = create<useSearchValueType>((set) => ({
	value: "",
	setValue: (newValue: string) => set({ value: newValue }),
}));
