import { DatePicker } from "../(comps)/DatePicker";
import { TimePicker } from "../(comps)/TimePicker";
import { AmenitiesPicker } from "../(comps)/AmenitiesPicker";
import { Button } from "../@/components/ui/button";
import { CapacityPicker } from "../(comps)/CapacityPicker";
import { rooms } from "../../data";
import RoomCard from "../(comps)/RoomCard";
import { ScrollArea } from "../@/components/ui/scroll-area";

export default function Hero() {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex gap-1  flex-wrap w-full md:gap-2">
				<DatePicker />
				<CapacityPicker />
				<TimePicker />
				<AmenitiesPicker />
				<Button className="bg-blue-800">Book</Button>
			</div>
			<h1 className="flex justify-center items-center">Currently Available Rooms</h1>
			<ScrollArea className="w-full">
				<div className="w-full h-auto grid grid-cols-1 sm:grid-cols-3 gap-1 p-1">
					{rooms.map((room) => (
						<RoomCard {...room} />
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
