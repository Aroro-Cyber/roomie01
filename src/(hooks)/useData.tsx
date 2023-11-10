import { create } from "zustand";
import { RoomType, useDataType } from "../../types";

export const useData = create<useDataType>((set) => ({
	rooms: [],
	filteredRooms: [],
	setRooms: (newRooms: RoomType[]) => set({ rooms: newRooms }),
	setFileteredRooms: (newFileteredRooms: RoomType[]) =>
		set({ filteredRooms: newFileteredRooms }),
}));
