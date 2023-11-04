import { AirVent, Tv, Users, Wifi, X } from "lucide-react";
import { Button } from "../@/components/ui/button";
import { RoomType } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "../@/components/ui/use-toast";
import { EditPopover } from "./EditPopover";

export default function EditRoomCard({
	id,
	image,
	amenities,
	roomTitle,
	capacity,
}: RoomType) {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const { mutate} = useMutation({
		mutationKey: ["deletingMutationKey"],
		mutationFn: async (id: Number) => {
			return await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getRoomsKey"] });
			toast({
				className: "bg-green-700 text-white",
				description: `${roomTitle} has been deleted successfully!`,
			});
		},
		onError: () => {
			toast({
				className: "bg-red-700 text-white",
				description: `An Error occured deleting ${roomTitle}!.`,
			});
		},
	});

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
						})}{" "}
					<p className="text-xs  flex items-start">
						<i>{`${capacity}`}</i>
						<i>
							<Users size={13} />
						</i>
					</p>
				</div>
				<div className="flex gap-1">
					{/* @ts-ignore */}
					<EditPopover id={id} />
					<Button
						className="bg-red-500"
						size={"sm"}
						onClick={() => {
							id && mutate(id);
						}}>
						<X size={10} />
					</Button>
				</div>
			</div>
		</div>
	);
}
