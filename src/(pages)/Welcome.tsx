import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Welcome() {
	const { isSignedIn, user } = useUser();

	return (
		<main className="w-screen h-scree">
			{isSignedIn ? (
				<div>
					<h1>Welcome {user.fullName}to our page</h1>
					<p>{user.primaryEmailAddress?.emailAddress}</p>
          <SignOutButton/>
					<Link to={"/home"}>Go to Home </Link>
				</div>
			) : (
				<>
					<h1>Welcome to our page</h1>
					<div>
						<Link to={"/sign-up"}>SignUp</Link>
					</div>
					<div>
						<Link to={"/sign-in"}>SignIn</Link>
					</div>
				</>
			)}
		</main>
	);
}
