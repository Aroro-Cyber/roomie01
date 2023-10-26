import { useState } from "react";
import { AmenitiesPicker } from "../(comps)/AmenitiesPicker";
import { CapacityPicker } from "../(comps)/CapacityPicker";
import RoomCard from "../(comps)/RoomCard";
import { RoomType } from "../../types";
import { Button } from "../@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../@/components/ui/card";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";

export const data: RoomType = {
	id: 2,
	image: "/roomImg.webp",
	roomTitle: "Room 2",
	amenities: ["Free Wi-Fi", "Air conditioning", "Flat-screen TV"],
	capacity: 3,
};

export default function AddRooms() {
	const [image, setImage] = useState(null);

	const handleFileChange = (e: any) => {
		const file = e.target.files[0];

		if (file) {
			//@ts-ignore
			const reader = new FileReader();
			reader.onload = (e: any) => {
				setImage(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="w-full h-full p-0.5">
			<Card>
				<CardHeader>
					<CardTitle>Room</CardTitle>
					<CardDescription>
						Add another room and see preview. Click save when you're done.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<div className="space-y-1 sm:w-1/4">
						<RoomCard
							{...data}
							image={image as unknown as string}
						/>
					</div>
				</CardContent>
				<CardContent className="space-y-2">
					<div className="space-y-1">
						<Label htmlFor="image">Image:</Label>
						<Input
							id="Image"
							type="file"
							onChange={handleFileChange}
						/>
					</div>
					<div className="space-y-1">
						<Label htmlFor="room_title">Title:</Label>
						<Input
							id="room_title"
							placeholder="KCA Amphitheatre..."
						/>
					</div>
					<div className="space-y-1 flex justify-start items-center gap-2">
						<div className="pt-1">
							<AmenitiesPicker />
						</div>
						<CapacityPicker />
					</div>
				</CardContent>
				<CardFooter>
					<Button>Save room</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
