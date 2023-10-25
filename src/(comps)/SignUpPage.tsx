import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
		<main className="w-screen h-screen flex justify-center items-center">
			<SignUp redirectUrl={`${import.meta.env.VITE_WEB_URL}/home`} />
		</main>
	);
}
