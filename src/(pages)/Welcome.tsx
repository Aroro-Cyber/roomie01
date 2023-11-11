import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { cn } from "../@/lib/utils";
import { buttonVariants } from "../@/components/ui/button";

export default function Welcome() {
	const { isSignedIn, user } = useUser();

	return (
		<main className="w-screen h-screen flex flex-col justify-center items-center">
			{isSignedIn ? (
				<div className="w-1/2 h-3/4 drop-shadow-lg border-2 shadow-lg rounded-md grid">
					<img
						className="w-24 h-24 m-auto rounded-full"
						src={user?.imageUrl}
						alt="profile picture"
					/>
					<h1 className="text-xl sm:text-3xl font-black font-sans m-auto">
						Welcome {user.fullName} !
					</h1>
					<p className="p-4 text-xs sm:text-sm tracking-wide text-gray-800 ">
						We are excited to have you on board. Our system is designed to make
						your booking experience as seamless as possible. With our
						user-friendly interface, you can easily search for available rooms,
						view their details, and book them in just a few clicks. We offer a
						wide range of rooms to choose from, each equipped with modern
						amenities like wifi,flat tvs and air conditioning to ensure your
						comfort !
					</p>
					<div className="w-1/2 flex justify-evenly items-center mx-auto gap-2">
						<div className={cn(buttonVariants())}>
							<SignOutButton />
						</div>
						<div className={cn(buttonVariants())}>
							<Link to={"/home/hero"}>Go to Home </Link>
						</div>
					</div>
				</div>
			) : (
				<div className="w-1/2 h-3/4 drop-shadow-lg border-2 shadow-lg rounded-md grid">
					<img
						className="w-24 h-24 m-auto rounded-full"
						src="/logo.svg"
						alt="logo"
					/>
					<h1 className="text-xl sm:text-3xl font-black font-sans m-auto">
						Welcome to Roomie01
					</h1>
					<p className="p-4 text-xs sm:text-sm tracking-wide text-gray-800 ">
						We are excited to have you on board. Our system is designed to make
						your booking experience as seamless as possible. With our
						user-friendly interface, you can easily search for available rooms,
						view their details, and book them in just a few clicks. We offer a
						wide range of rooms to choose from, each equipped with modern
						amenities like wifi,flat tvs and air conditioning to ensure your
						comfort !
					</p>
					<div className="w-1/2 flex justify-evenly items-center mx-auto gap-2">
						<div className={cn(buttonVariants())}>
							<Link to={"/sign-up"}>Sign&nbsp;Up</Link>
						</div>
						<div className={cn(buttonVariants())}>
							<Link to={"/sign-in"}>Sign&nbsp;In</Link>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
