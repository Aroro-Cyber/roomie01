export type RoomType = {
	id?: number;
	image: string;
	roomTitle: string;
	amenities?: string[];
	capacity: number;
};

export type classNameType = {
	className?: string;
};

export type useCapacityType = {
	capacity: number;
	setCapacity: (newCapacity: number) => void;
};

export type useAmenitiesType = {
	amenities: string[];
	setAmenities: (newAmenities: string[]) => void;
};

export type bookingType = {
	id: number;
	checkIn: string;
	checkOut: string;
	customerEmail: string;
	roomId: number;
};

export type useDateType = {
	date: {
		from: Date;
		to: Date;
	};
	setDate: (newDate: useDateType["date"]) => void;
};

export type useDataType = {
	rooms: RoomType[];
	filteredRooms: RoomType[];
	setRooms: (newRooms: RoomType[]) => void;
	setFileteredRooms: (newFilterdRooms: RoomType[]) => void;
};

export type useSearchValueType = {
	value: string;
	setValue: (newValue: string) => void;
};
