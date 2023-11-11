import { create } from "zustand";
import { useSearchValueType } from "../../types";

export const useFromTime = create<useSearchValueType>((set) => ({
	value: "",
	setValue: (newValue: string) => set({ value: newValue }),
}));

export const useToTime = create<useSearchValueType>((set) => ({
	value: "",
	setValue: (newValue: string) => set({ value: newValue }),
}));