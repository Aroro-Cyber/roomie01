import { UserCircle2 } from "lucide-react";
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
import { useToast } from "../@/components/ui/use-toast";

export function BookingPopover(passedId: number) {
	const { date } = useDate();
	const { toast } = useToast();
	const { mutate, isPending } = useMutation({
		mutationKey: ["bookRoom"],
		mutationFn: async (booking: bookingType) => {
			return await axios.post(`${import.meta.env.VITE_API_URL}/booking`, {
				...booking,
			});
		},
		onSuccess: () => {
			toast({
				className: "bg-green-700 text-white",
				description: "Booked successfully!",
			});
		},
		onError: () => {
			toast({
				className: "bg-red-700 text-white",
				description: `An Error occured while booking!.`,
			});
		},
	});

	const { user } = useUser();
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
					<div className=" flex items-center gap-1">
						<i>
							<UserCircle2 size={13} />
						</i>
						<p className="text-sm">
							{user && user.primaryEmailAddress?.emailAddress}
						</p>
					</div>
					<div className="space-y-2">
						<Button
							onClick={() =>
								user &&
								mutate({
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
