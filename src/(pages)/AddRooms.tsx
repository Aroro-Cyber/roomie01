import { useState } from "react";
import { AmenitiesPicker } from "../(comps)/AmenitiesPicker";
import { CapacityPicker } from "../(comps)/CapacityPicker";
import RoomCard from "../(comps)/RoomCard";
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
import { useCapacity } from "../(hooks)/useCapacity";
import { useAmenities } from "../(hooks)/useAmenities";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../@/components/ui/use-toast";

export default function AddRooms() {
	const { capacity } = useCapacity();
	const { amenities } = useAmenities();

	const [image, setImage] = useState(null);
	const [roomTitle, setRoomTitle] = useState("");

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

	const mutation = useMutation({
		mutationKey: ["savingMutationKey"],
		mutationFn: async () => {
			return await axios.post(
				"http://localhost:8080/api/v1/room",
				{
					capacity: capacity,
					roomTitle: roomTitle,
					amenities: amenities,
					image: `${image}`,
				},
				{
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				}
			);
		},
	});

	const { toast } = useToast();

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
						{image && (
							<RoomCard
								amenities={amenities}
								capacity={capacity}
								roomTitle={roomTitle}
								image={image}
							/>
						)}
					</div>
				</CardContent>
				<CardContent className="space-y-1">
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
							value={roomTitle}
							onChange={(e: any) => setRoomTitle(e.target.value)}
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
					<Button
						onClick={() => {
							mutation.mutate();
							mutation &&
							toast({
								className: "bg-green-600 text-white",
								description: `${roomTitle} has been saved successfully!.`,
							});
						}}>
						{mutation.isPending ? "Saving..." : "Save"}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
