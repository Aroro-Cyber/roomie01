import { Pen } from "lucide-react";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../@/components/ui/popover";
import { Card, CardContent, CardFooter } from "../@/components/ui/card";
import { useToast } from "../@/components/ui/use-toast";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { AmenitiesPicker } from "./AmenitiesPicker";
import { CapacityPicker } from "./CapacityPicker";
import { useAmenities } from "../(hooks)/useAmenities";
import { useCapacity } from "../(hooks)/useCapacity";
import { useState } from "react";

export function EditPopover(passedId:Number) {
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

		const updateMutation = useMutation({
			mutationKey: ["updatingMutationKey"],
			mutationFn: async (id:Number) => {
				return await axios.put(
					`${import.meta.env.VITE_API_URL}/${id}`,
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
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size={"sm"}
					className="bg-green-500">
					<Pen size={10} />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-3/4">
				<Card>
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
								updateMutation.mutate(passedId);
								updateMutation &&
									toast({
										className: "bg-green-600 text-white",
										description: `${roomTitle} has been saved successfully!.`,
									});
							}}>
							{updateMutation.isPending ? "Updating..." : "Update"}
						</Button>
					</CardFooter>
				</Card>
			</PopoverContent>
		</Popover>
	);
}
