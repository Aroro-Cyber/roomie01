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
import { useAmenities } from "../(hooks)/useAmenities";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function AmenitiesPicker() {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
	const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
	const [showPanel, setShowPanel] = React.useState<Checked>(false);

	const [foo, setFoo] = React.useState(showStatusBar);
	const [bar, setBar] = React.useState(showActivityBar);
	const [fooBar, setFooBar] = React.useState(showPanel);

	const { setAmenities } = useAmenities();

	const fooS = foo ? "FreeWiFi" : "No Wi-Fi";
	const barS = bar ? "AirConditioner" : "no AC";
	const fooBarS = fooBar ? "FlatScreenTV" : "no tv";

	const amenitiesArray:string[] = []

	amenitiesArray.push(fooS)
	amenitiesArray.push(barS)
	amenitiesArray.push(fooBarS)
	

	React.useEffect(() => setAmenities(amenitiesArray), [foo,bar,fooBar]);

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
					onCheckedChange={setShowStatusBar}
					onClick={() => setFoo(!foo)}>
					Free Wifi
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showActivityBar}
					onCheckedChange={setShowActivityBar}
					onClick={() => setBar(!bar)}>
					Air Conditioner
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showPanel}
					onCheckedChange={setShowPanel}
					onClick={() => setFooBar(!fooBar)}>
					Flat-screen TV
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
