import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { bookingType } from "../../types";
import { Button } from "../@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "../@/components/ui/use-toast";

export default function Booking() {

	const queryClient = useQueryClient();
	const { toast } = useToast();

	const { data } = useQuery({
		queryKey: ["bookingQueryKey"],
		queryFn: async (): Promise<bookingType[]> => {
			const { data } = await axios.get(
				`${import.meta.env.VITE_API_URL}/booking`
			);
			return await data;
		},
	});

	const { mutate } = useMutation({
		mutationKey: ["deleteBookingKey"],
		mutationFn: async (id: number) => {
			return await axios.delete(
				`${import.meta.env.VITE_API_URL}/booking/${id}`
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookingQueryKey"] });
			toast({
				className: "bg-green-700 text-white",
				description: `Booking has been deleted successfully!`,
			});
		},
		onError: () => {
			toast({
				className: "bg-red-700 text-white",
				description: `An Error occured while deleting !.`,
			});
		},
	});

	return (
		<>
			<h1 className="flex justify-center items-center font-black">Bookings</h1>
			
				<div className="w-full h-full grid grid-cols-2 p-0.5 sm:grid-cols-3 gap-1 lg:grid-cols-4 overflow-y-scroll">
					{/* @ts-ignore */}

					{data &&
						data.map((booking, index) => (
							<div
								key={index}
								className="w-full rounded-md border-2 grid gap-2 p-2">
								<h2 className="text-center font-semibold text-xs">
									{booking.customerEmail}
								</h2>
								<h3 className="text-xs italic text-gray-500 font-semibold">
									From: <i>{booking.checkIn}</i>
								</h3>
								<h3 className="text-xs italic text-gray-500 font-semibold ">
									To: <i>{booking.checkOut}</i>
								</h3>
								<h4>Room : {booking.roomId}</h4>
								<Button
									className="w-1/4 place-self-end bg-red-600"
									onClick={() => mutate(booking.id)}>
									<X />
								</Button>
							</div>
						))}
						
				</div>
			
		</>
	);
}
