import { UserButton, useUser } from "@clerk/clerk-react";
import { Input } from "../@/components/ui/input";
import { useFilter } from "react-aria";
import { useData } from "../(hooks)/useData";
import { useEffect } from "react";
import { useSearchValue } from "../(hooks)/useSearchValue";

export default function TopBar() {
	const { rooms, setFileteredRooms } = useData();
	const { value, setValue } = useSearchValue();
	let { contains } = useFilter({
		sensitivity: "base",
	});

	useEffect(() => {
		let matchedRooms = rooms.filter((room) => contains(room.roomTitle, value));
		setFileteredRooms(matchedRooms);
	}, [value]);

	const {user} = useUser()

	return (
		<nav className="w-full h-12 p-0.5 absolute top-0">
			<div className="w-full h-full bg-blue-800 rounded-md flex">
				<div className="w-1/4 h-full flex justify-center items-center">
					<h1 className="text-white">Roomie01</h1>
				</div>
				<div className="flex w-1/2 h-full justify-center items-center space-x-1">
					<Input
						type="text"
						placeholder="Search room name..."
						className="bg-white max-w-sm placeholder:italic"
						//@ts-ignore
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className="w-1/4 h-full flex justify-center gap-1 items-center">
					<p className="hidden text-xs text-white uppercase md:block">{user && user.primaryEmailAddress?.emailAddress}</p>
					<UserButton />
				</div>
			</div>
		</nav>
	);
}
