import { Button } from "../@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../@/components/ui/popover";
import { DatePicker } from "./DatePicker";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { bookingType } from "../../types";
import axios from "axios";
import { useDate } from "../(hooks)/useDate";
import { FromTimePicker, ToTimePicker } from "./TimePicker";
import { toast } from "sonner";
import { useFromTime, useToTime } from "../(hooks)/useTime";

export function BookingPopover(passedId: number) {
	const { date } = useDate();
	const { mutate, isPending } = useMutation({
		mutationKey: ["bookRoom"],
		mutationFn: async (booking: bookingType) => {
			return await axios.post(`${import.meta.env.VITE_API_URL}/booking`, {
				...booking,
			});
		},
		onSuccess: () => {
			toast.success("Booked successfully!");
		},
		onError: () => {
			toast.error(`An Error occured while booking!.`);
		},
	});

	const { user } = useUser();
	const { value: fromTimeValue } = useFromTime();
	const { value: toTimeValue } = useToTime();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					size={"sm"}
					color="primary">
					Book
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<div className="grid gap-4">
					<div className="space-y-2">
						<DatePicker />
					</div>
					<div className="flex gap-2">
						<FromTimePicker />
						<ToTimePicker />
					</div>

					<div className="space-y-2">
						<Button
							onClick={() =>
								user &&
								mutate({
									fromTime: `${fromTimeValue}`,
									toTime: `${toTimeValue}`,
									checkIn: `${date.from.toISOString().slice(0, 10)}`,
									checkOut: `${date.to.toISOString().slice(0, 10)}`,
									customerEmail: `${user.primaryEmailAddress?.emailAddress}`,
									roomId: Object.values(passedId)[0],
								})
							}>
							{isPending ? "Booking..." : "Submit Booking"}
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
