import { UserButton } from "@clerk/clerk-react";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";
import { Search } from "lucide-react";

export default function TopBar() {
  return (
		<nav className="w-full h-12 p-0.5 absolute top-0">
			<div className="w-full h-full bg-blue-800 rounded-md flex">
				<div className="w-1/4 h-full flex justify-center items-center">
					<h1 className="text-white">Roomie01</h1>
				</div>
				<div className="flex w-1/2 h-full justify-center items-center space-x-1">
					<Input
						type="text"
						placeholder="Search"
						className="bg-white max-w-sm"
					/>
					<Button
						size={"icon"}
						type="submit"
						className="border-2">
						<Search
							color="white"
							size={15}
						/>
					</Button>
				</div>
				<div className="w-1/4 h-full flex justify-center items-center">
					<UserButton />
				</div>
			</div>
		</nav>
	);
}