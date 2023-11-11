import { Send } from "lucide-react";
import { Button } from "../@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../@/components/ui/card";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	function handleSubmit() {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setName("");
			setEmail("");
			setMessage("");
			toast.success("Message sent successfully!");
		}, 1500);
	}

	return (
		<div className="w-full h-full p-2">
			<Card className="w-full sm:w-1/2">
				<CardHeader>
					<CardTitle>Contact Us</CardTitle>
					<CardDescription>
						Send a message to us for support in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="name..."
									value={name}
									//@ts-ignore
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="email..."
									value={email}
									//@ts-ignore
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Message</Label>
								<textarea
									className="border-2 rounded-md p-2 placeholder:text-sm placeholder:text-gray-500"
									rows={5}
									id="message"
									placeholder="hey can i book two rooms ..."
									value={message}
									//@ts-ignore
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-end">
					<Button onClick={handleSubmit}>
						{loading && <div>Sending...</div>}
						{!loading && (
							<div className="flex justify-between items-center">
								Send{" "}
								<Send
									size={13}
									className="ml-2"
								/>
							</div>
						)}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
