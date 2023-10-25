import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "../@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function AmenitiesPicker() {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
	const [showPanel, setShowPanel] = React.useState<Checked>(false);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Amenities</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={showStatusBar}
					onCheckedChange={setShowStatusBar}>
					Free Wifi
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showActivityBar}
					onCheckedChange={setShowActivityBar}>
					Air Conditioner
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showPanel}
					onCheckedChange={setShowPanel}>
					Flat-screen TV
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
