import { DatePicker } from "../(comps)/DatePicker";
import { TimePicker } from "../(comps)/TimePicker";
import { AmenitiesPicker } from "../(comps)/AmenitiesPicker";
import { Button } from "../@/components/ui/button";
import { CapacityPicker } from "../(comps)/CapacityPicker";
import RoomCard from "../(comps)/RoomCard";
import { ScrollArea } from "../@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
	const {data} = useQuery({
		queryKey: ["getRoomsKey"],
		queryFn: () =>
			fetch("../data.json").then((res) =>
				res.json()
				
			),
	});
	return (
		<div className="w-full h-full flex flex-col p-0.5">
			<div className="flex gap-1  flex-wrap w-full md:gap-2">
				<DatePicker />
				<CapacityPicker />
				<TimePicker />
				<AmenitiesPicker />
				<Button className="bg-blue-800">Book</Button>
			</div>
			<h1 className="flex justify-center items-center font-black">
				Currently Available Rooms
			</h1>
			<ScrollArea className="w-full">
				<div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-1">
					{data.map((room) => (
						<RoomCard
							{...room}
							key={`${room.id}`}
						/>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
