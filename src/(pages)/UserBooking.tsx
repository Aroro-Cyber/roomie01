import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { bookingType } from "../../types";
import { Button } from "../@/components/ui/button";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useFilter } from "react-aria";
import { useUser } from "@clerk/clerk-react";

export default function UserBooking() {
	const { user } = useUser();
	const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ["bookingQueryKey"],
		queryFn: async (): Promise<bookingType[]> => {
			const { data } = await axios.get(
				`${import.meta.env.VITE_API_URL}/booking`
			);
			return await data;
		},
	});

	let { contains } = useFilter({
		sensitivity: "base",
	});

	let filteredData = data?.filter((booking) =>
		contains(
			booking.customerEmail,
			`${user && user.primaryEmailAddress?.emailAddress}`
		)
	);

	const { mutate } = useMutation({
		mutationKey: ["deleteBookingKey"],
		mutationFn: async (id: number) => {
			return await axios.delete(
				`${import.meta.env.VITE_API_URL}/booking/${id}`
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookingQueryKey"] });
			toast.success(`Booking has been deleted successfully!`);
		},
		onError: () => {
			toast.error(`An Error occured while deleting !.`);
		},
	});

	return (
		<>
			<h1 className="flex justify-center items-center font-black">Bookings</h1>
			<div className="w-full h-full grid p-5 sm:p-1 sm:grid-cols-2 gap-1 lg:grid-cols-4 overflow-y-scroll">
				{/* @ts-ignore */}
				{filteredData &&
					filteredData.map((booking, index) => (
						<div
							key={index}
							className="w-full max-h-60 rounded-md border-2 flex flex-col gap-1 relative">
							<p className="mx-auto font-black">Room&nbsp;{booking.roomId}</p>
							<p className="ml-2">
								<span className="text-xs">Check In Date:&nbsp;&nbsp;</span>
								<i className="text-blue-700">
									{booking.checkIn.toString().slice(0, 10)}
								</i>
							</p>
							<p className="ml-2">
								<span className="text-xs">Check Out Date:&nbsp;&nbsp;</span>
								<i className="text-blue-700">
									{booking.checkOut.toString().slice(0, 10)}
								</i>
							</p>
							<p className="ml-2">
								<span className="text-xs">Booking Id:&nbsp;&nbsp;</span>
								<i className="text-blue-700">{booking.id}</i>
							</p>
							<p className="ml-2">
								<span className="text-xs">From:&nbsp;&nbsp;</span>
								<i className="text-blue-700">{booking.fromTime}</i>
							</p>
							<p className="ml-2">
								<span className="text-xs">To:&nbsp;&nbsp;</span>
								<i className="text-blue-700">{booking.toTime}</i>
							</p>
							<p className="ml-2">
								<span className="text-xs">User:&nbsp;&nbsp;</span>
								<i className="text-blue-700">{booking.customerEmail}</i>
							</p>
							<Button
								className="w-10 place-self-end bg-red-600 m-2 absolute"
								size={"sm"}
								onClick={() => mutate(booking.id!)}>
								<X size={20} />
							</Button>
						</div>
					))}
			</div>
		</>
	);
}
