import { create } from "zustand";
import { useAmenitiesType } from "../../types";

export const useAmenities = create<useAmenitiesType>((set) => ({
	amenities: [],
	setAmenities: (newAmenities: string[]) => set({ amenities: newAmenities }),
}));
