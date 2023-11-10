import { AirVent, Tv, Users, Wifi } from "lucide-react";
import { RoomType } from "../../types";
import { BookingPopover } from "./BookingPopover";

export default function RoomCard({
	id,
	image,
	amenities,
	roomTitle,
	capacity,
}: RoomType) {
	return (
		<div className="w-full h-20 flex rounded-md overflow-hidden md:h-36">
			<img
				src={`${image}`}
				className="w-1/2 h-full"
			/>
			<div className="w-1/2 h-full text-gray-800 border-2 border-blue-800 border-l-0 grid p-0.5">
				<p className="font-bold text-sm">{roomTitle}</p>
				<div className="flex gap-1 justify-start">
					{amenities &&
						amenities.map((amenity) => {
							switch (amenity) {
								case "FreeWiFi":
									return (
										<i key={amenity}>
											<Wifi size={13} />
										</i>
									);
								case "AirConditioner":
									return (
										<i key={amenity}>
											<AirVent size={13} />
										</i>
									);
								case "FlatScreenTV":
									return (
										<i key={amenity}>
											<Tv size={13} />
										</i>
									);
							}
						})}
					<p className="text-xs  flex items-start">
						<i>{`${capacity}`}</i>
						<i>
							<Users size={13} />
						</i>
					</p>
				</div>
				{/* @ts-ignore */}
				<BookingPopover passedId={id && id}/>
			</div>
		</div>
	);
}
