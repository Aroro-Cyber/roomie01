import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../@/components/ui/select";

export function TimePicker() {
	return (
		<Select>
			<SelectTrigger className="w-[120px]">
				<SelectValue placeholder="Time" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Time</SelectLabel>
					<SelectItem value="08">08:00 am</SelectItem>
					<SelectItem value="09">09:00 am</SelectItem>
					<SelectItem value="10">10:00 am</SelectItem>
					<SelectItem value="11">11:00 am</SelectItem>
					<SelectItem value="12">12:00 am</SelectItem>
					<SelectItem value="01">01:00 pm</SelectItem>
					<SelectItem value="02">02:00 pm</SelectItem>
					<SelectItem value="03">03:00 pm</SelectItem>
					<SelectItem value="04">04:00 pm</SelectItem>
					<SelectItem value="05">05:00 pm</SelectItem>
					<SelectItem value="06">06:00 pm</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
