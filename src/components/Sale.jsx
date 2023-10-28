import React, { useEffect, useState } from "react";
import Card from "./Card";
import BuyNowModal from "./BuyNowModal";

const Sale = () => {
	const [buyNowModal, setBuyNowModal] = useState(false);
	const [auctionItem, setAuctionItem] = useState([
		{
			id: 1,
			name: "Punnet Super Star",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
		{
			id: 2,
			name: "Amit Star",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images: '/assets/dp.jpg', // or the correct path to the images
		},
		{
			id: 3,
			name: "Punnet Modi",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
		{
			id: 4,
			name: "Punnet Gandhi",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
		{
			id: 5,
			name: "Rahul Gandhi",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
		{
			id: 6,
			name: "Modi Gandhi",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
		{
			id: 7,
			name: "Keju Gandhi",
			description:
				"Here are the biggest enterprise technology acquisitions of 2021.",
			image: "/assets/dp.jpg", // or the correct path to the images
		},
	]);
	console.log(buyNowModal);

	console.log("buyNowModal", buyNowModal);
	const fetchItems = async () => {
		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/item/get-all`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			if (response.ok) {
				setAuctionItem(data.Items);
			} else {
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<>
			<div className="flex justify-center mt-5">
				<h1 className="text-slate-900 text-3xl font-mono font-bold">Items</h1>
			</div>
			<div className="mt-3 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{auctionItem.map((item) => (
					<Card
						key={item._id}
						itemId={item._id}
						name={item.name}
						description={item.description}
						image={item.imgSrc}
						price={item.price}
						setBuyNowModal={setBuyNowModal}
					/>
				))}
			</div>
			{buyNowModal && (
				<BuyNowModal
					buyNowModal={buyNowModal}
					setBuyNowModal={setBuyNowModal}
				/>
			)}
		</>
	);
};

export default Sale;
