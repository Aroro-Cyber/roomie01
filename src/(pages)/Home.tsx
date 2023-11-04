import { Outlet } from "react-router-dom";
import SideBar from "../(comps)/SideBar";
import TopBar from "../(comps)/TopBar";

export default function Home() {
	return (
		<>
			<main className="flex h-screen">
				<TopBar />
				<SideBar />
				<div className="w-full h-[100vh] pt-12 pl-12 pr-0.5 pb-0.5">
					<div className="w-full h-full border-2 border-blue-800 rounded-md overflow-hidden">
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
}
