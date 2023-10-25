import type { RoomType } from "../../types";

export default function RoomCard({
	id,
	image,
	roomTitle,
	capacity,
}: RoomType) {
	return (
		<div
			key={`${id}`}
			className="w-full h-40 flex rounded-md overflow-hidden ">
			<img
				src={image}
				className="w-1/2 h-full"
			/>
			<div className="w-1/2 h-full bg-lime-500 border-2 border-blue-800 border-l-0">
				<h1>{roomTitle}</h1>
                {/* TODO:Map through amenities and fix this div the way it displays things*/}
				<p>Fits {`${capacity}`} people</p>
			</div>
		</div>
	);
}
