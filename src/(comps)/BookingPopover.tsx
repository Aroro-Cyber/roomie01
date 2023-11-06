import { Button } from "../@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../@/components/ui/popover";
import { DatePicker } from "./DatePicker";

export function BookingPopover() {
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
					<div className="space-y-2">
						<Button>Submit Booking</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
