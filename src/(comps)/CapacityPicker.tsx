import { useCapacity } from "../(hooks)/useCapacity";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../@/components/ui/select";

export function CapacityPicker() {
	const { setCapacity } = useCapacity();

	const handleChange = (capacity: string) => {
		setCapacity(Number(capacity));
	};

	return (
		<Select onValueChange={handleChange}>
			<SelectTrigger className="w-[80px]">
				<SelectValue placeholder="Capacity" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Number of People</SelectLabel>
					<SelectItem value="02">Two</SelectItem>
					<SelectItem value="03">Three</SelectItem>
					<SelectItem value="04">Four</SelectItem>
					<SelectItem value="05">Five</SelectItem>
					<SelectItem value="06">Six</SelectItem>
					<SelectItem value="07">Seven</SelectItem>
					<SelectItem value="08">Eight</SelectItem>
					<SelectItem value="09">Nine</SelectItem>
					<SelectItem value="10">Ten</SelectItem>
					<SelectItem value="11">Eleven</SelectItem>
					<SelectItem value="12">Twelve</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
