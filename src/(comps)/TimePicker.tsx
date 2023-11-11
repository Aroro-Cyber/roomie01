import { useFromTime, useToTime } from "../(hooks)/useTime";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../@/components/ui/select";

export function FromTimePicker() {
	const { setValue } = useFromTime();
	return (
		<Select onValueChange={(value) => setValue(value)}>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="From" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup className="max-h-40 overflow-y-scroll">
					<SelectItem value="08:00 am">08:00 am</SelectItem>
					<SelectItem value="08:30 am">08:30 am</SelectItem>
					<SelectItem value="09:00 am">09:00 am</SelectItem>
					<SelectItem value="09:30 am">09:30 am</SelectItem>
					<SelectItem value="10:00 am">10:00 am</SelectItem>
					<SelectItem value="10:30 am">10:30 am</SelectItem>
					<SelectItem value="11:00 am">11:00 am</SelectItem>
					<SelectItem value="11:30 am">11:30 am</SelectItem>
					<SelectItem value="12:00 am">12:00 am</SelectItem>
					<SelectItem value="12:30 am">12:30 am</SelectItem>
					<SelectItem value="01:00 pm">01:00 pm</SelectItem>
					<SelectItem value="01:30 am">01:30 am</SelectItem>
					<SelectItem value="02:00 pm">02:00 pm</SelectItem>
					<SelectItem value="02:30 am">02:30 am</SelectItem>
					<SelectItem value="03:00 pm">03:00 pm</SelectItem>
					<SelectItem value="03:30 am">03:30 am</SelectItem>
					<SelectItem value="04:00 pm">04:00 pm</SelectItem>
					<SelectItem value="04:30 am">04:30 am</SelectItem>
					<SelectItem value="05:00 pm">05:00 pm</SelectItem>
					<SelectItem value="05:30 am">05:30 am</SelectItem>
					<SelectItem value="06:00 pm">06:00 pm</SelectItem>
					<SelectItem value="06:30 am">06:30 am</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export function ToTimePicker() {
	const { setValue } = useToTime();
	return (
		<Select onValueChange={(value) => setValue(value)}>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="To" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup className="max-h-40 overflow-y-scroll">
					<SelectItem value="08:00 am">08:00 am</SelectItem>
					<SelectItem value="08:30 am">08:30 am</SelectItem>
					<SelectItem value="09:00 am">09:00 am</SelectItem>
					<SelectItem value="09:30 am">09:30 am</SelectItem>
					<SelectItem value="10:00 am">10:00 am</SelectItem>
					<SelectItem value="10:30 am">10:30 am</SelectItem>
					<SelectItem value="11:00 am">11:00 am</SelectItem>
					<SelectItem value="11:30 am">11:30 am</SelectItem>
					<SelectItem value="12:00 am">12:00 am</SelectItem>
					<SelectItem value="12:30 am">12:30 am</SelectItem>
					<SelectItem value="01:00 pm">01:00 pm</SelectItem>
					<SelectItem value="01:30 am">01:30 am</SelectItem>
					<SelectItem value="02:00 pm">02:00 pm</SelectItem>
					<SelectItem value="02:30 am">02:30 am</SelectItem>
					<SelectItem value="03:00 pm">03:00 pm</SelectItem>
					<SelectItem value="03:30 am">03:30 am</SelectItem>
					<SelectItem value="04:00 pm">04:00 pm</SelectItem>
					<SelectItem value="04:30 am">04:30 am</SelectItem>
					<SelectItem value="05:00 pm">05:00 pm</SelectItem>
					<SelectItem value="05:30 am">05:30 am</SelectItem>
					<SelectItem value="06:00 pm">06:00 pm</SelectItem>
					<SelectItem value="06:30 am">06:30 am</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
