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
		<div className="w-full h-24 flex rounded-md overflow-hidden md:h-36">
			<img
				src={`${image}`}
				className="w-1/2 h-full"
			/>
			<div className="w-1/2 h-full text-gray-800 border-2 border-blue-800 border-l-0 grid p-0.5">
				<p className="font-bold text-sm m-auto">{roomTitle}</p>
				<div className="flex justify-evenly">
					{amenities &&
						amenities.map((amenity) => {
							switch (amenity) {
								case "FreeWiFi":
									return (
										<i
											key={amenity}
											className="flex items-center">
											<Wifi size={18} />
										</i>
									);
								case "AirConditioner":
									return (
										<i
											key={amenity}
											className="flex items-center">
											<AirVent size={18} />
										</i>
									);
								case "FlatScreenTV":
									return (
										<i
											key={amenity}
											className="flex items-center">
											<Tv size={18} />
										</i>
									);
							}
						})}
					<h5 className="flex items-center">
						<p className="text-lg">{`${capacity}`}</p>
						<i>
							<Users size={18} />
						</i>
					</h5>
				</div>
				{/* @ts-ignore */}
				<BookingPopover passedId={id && id} />
			</div>
		</div>
	);
}
