import { create } from "zustand";
import { useCapacityType } from "../../types";

export const useCapacity = create<useCapacityType>((set) => ({
	capacity: 0,
	setCapacity: (newCapacity:number) => set({ capacity: newCapacity }),
}));
