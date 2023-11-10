import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
		<main className="w-screen h-screen flex justify-center items-center">
			<SignUp redirectUrl={"/home"} />
		</main>
	);
}
