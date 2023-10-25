import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
		<main className="w-screen h-screen flex justify-center items-center">
			<SignIn redirectUrl={`${import.meta.env.VITE_WEB_URL}/home`} />
		</main>
	);
}
