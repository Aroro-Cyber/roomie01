export type RoomType = {
    id?:Number
	image:string
    roomTitle:string
    amenities?:string[]
    capacity:Number
};

export type classNameType = {
    className?:string
}

export type useCapacityType = {
	capacity: Number;
	setCapacity: (newCapacity: Number) => void;
};

export type useAmenitiesType = {
	amenities: string[];
	setAmenities: (newAmenities: string[]) => void;
};