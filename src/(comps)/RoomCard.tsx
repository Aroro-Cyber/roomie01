import { AirVent, Tv, Users, Wifi } from "lucide-react";
import { Button } from "../@/components/ui/button";
import { RoomType } from "../../types";

export default function RoomCard({
	image,
	amenities,
	roomTitle,
	capacity,
}: RoomType) {
	return (
		<div className="w-full h-20 flex rounded-md overflow-hidden md:h-36">
			<img
				src={image!}
				className="w-1/2 h-full"
			/>
			<div className="w-1/2 h-full text-gray-800 border-2 border-blue-800 border-l-0 grid p-0.5">
				<p className="font-bold text-sm">{roomTitle}</p>
				<div className="flex gap-1 justify-start">
					{amenities.map((amenity, i) => {
						switch (amenity) {
							case "Free Wi-Fi":
								return (
									<i key={amenity[i]}>
										<Wifi size={13} />
									</i>
								);
							case "Air conditioning":
								return (
									<i key={amenity[i]}>
										<AirVent size={13} />
									</i>
								);
							case "Flat-screen TV":
								return (
									<i key={amenity[i]}>
										<Tv size={13} />
									</i>
								);
						}
					})}{" "}
					<p className="text-xs  flex items-start">
						<i>{`${capacity}`}</i>{" "}
						<i>
							<Users size={13} />
						</i>
					</p>
				</div>
				{/* TODO:Onclick pop up booking details */}
				<Button size={"sm"}>Book</Button>
			</div>
		</div>
	);
}
