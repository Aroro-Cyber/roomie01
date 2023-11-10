import { addDays } from "date-fns";
import { create } from "zustand";
import { useDateType } from "../../types";


export const useDate = create<useDateType>((set) => ({
	date: {
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	},
	setDate: (newDate) => set({ date: newDate }),
}));
