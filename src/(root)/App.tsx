import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from "@clerk/clerk-react";
import Welcome from "../(pages)/Welcome";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../(pages)/Home";
import SignUpPage from "../(comps)/SignUpPage";
import SignInPage from "../(comps)/SignInPage";
import Hero from "../(pages)/Hero";
import Booking from "../(pages)/Booking";
import Profile from "../(pages)/Profile";
import Location from "../(pages)/Location";

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

export default function MyPage() {
	const navigate = useNavigate();
	return (
		<ClerkProvider
			publishableKey={clerkPubKey}
			navigate={(to) => navigate(to)}>
			<Routes>
				<Route
					path="/"
					element={<Welcome />}
				/>
				<Route
					path="/sign-in"
					element={<SignInPage />}
				/>
				<Route
					path="/sign-up"
					element={<SignUpPage />}
				/>
				<Route
					path="home"
					element={
						<>
							<SignedIn>
								<Home />
							</SignedIn>
							<SignedOut>
								<RedirectToSignIn />
							</SignedOut>
						</>
					}>
					<Route
						path="hero"
						element={<Hero />}
					/>
					<Route
						path="location"
						element={<Location />}
					/>
					<Route
						path="booking"
						element={<Booking />}
					/>
					<Route
						path="profile"
						element={<Profile />}
					/>
				</Route>
			</Routes>
		</ClerkProvider>
	);
}
