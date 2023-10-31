import { AirVent, Tv, Users, Wifi, X } from "lucide-react";
import { Button } from "../@/components/ui/button";
import { RoomType } from "../../types";
import { useMutation } from "@tanstack/react-query";
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
	
	const { toast } = useToast();

	const deleteMutation = useMutation({
		mutationKey: ["EditMutationKey"],
		mutationFn: async (id: Number) => {
			return await axios.delete(`http://localhost:8080/api/v1/room/${id}`);
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
					<EditPopover id={"13"}/>
					<Button
						className="bg-red-500"
						size={"sm"}
						onClick={() => {
							id && deleteMutation.mutate(id);
							deleteMutation &&
								toast({
									className: "bg-red-200 text-white",
									description: `${roomTitle} has been deleted.`,
								});

							
						}}>
						<X size={10} />
					</Button>
				</div>
			</div>
		</div>
	);
}
