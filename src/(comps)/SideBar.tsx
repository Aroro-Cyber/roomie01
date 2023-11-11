import { useUser } from "@clerk/clerk-react";
import { BookText, FileEdit, HelpCircle, Home, LibraryBig, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
	const { user } = useUser();
	return (
		<div className="w-12 h-screen flex justify-center items-center p-0.5 absolute left-0">
			<div className="w-full h-1/2 flex flex-col justify-evenly items-center rounded-md bg-blue-800">
				<Link to={"/home/hero"}>
					<Home
						size={18}
						color="white"
					/>
				</Link>
				{user &&
				user.primaryEmailAddress?.emailAddress ===
					"kylepeterkoine4@gmail.com" ? (
					<>
						<Link to={"/home/add_rooms"}>
							<Plus
								size={18}
								color="white"
							/>
						</Link>
						<Link to={"/home/edit_rooms"}>
							<FileEdit
								size={18}
								color="white"
							/>
						</Link>
						<Link to={"/home/booking"}>
							<BookText
								size={18}
								color="white"
							/>
						</Link>
					</>
				) : (
					<Link to={"/home/user_booking"}>
						<LibraryBig
							size={18}
							color="white"
						/>
					</Link>
				)}
				<Link to={"/home/contact_us"}>
					<HelpCircle
						size={18}
						color="white"
					/>
				</Link>
			</div>
		</div>
	);
}

