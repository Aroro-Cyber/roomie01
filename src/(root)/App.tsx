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
import AddRooms from "../(pages)/AddRooms";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import EditRooms from "../(pages)/EditRooms";
import { Toaster } from "sonner"
import Booking from "../(pages)/Booking";
import ContactPage from "../(pages)/ContactPage";
import UserBooking from "../(pages)/UserBooking";

const queryClient = new QueryClient();

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

export default function MyPage() {
	const navigate = useNavigate();
	return (
		<QueryClientProvider client={queryClient}>
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
						path="/home"
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
							path="add_rooms"
							element={<AddRooms />}
						/>
						<Route
							path="edit_rooms"
							element={<EditRooms />}
						/>
						<Route
							path="booking"
							element={<Booking />}
						/>
						<Route
							path="contact_us"
							element={<ContactPage />}
						/>
						<Route
							path="user_booking"
							element={<UserBooking />}
						/>
					</Route>
				</Routes>
				<Toaster richColors />
			</ClerkProvider>
		</QueryClientProvider>
	);
}
