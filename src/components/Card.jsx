import React from "react";

const Card = ({ itemId, name, description, image, price, setBuyNowModal }) => {
	return (
		<div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="w-full min-h-[150px]">
				<img
					className="rounded-t-lg w-full h-full object-contain"
					src={image}
					alt=""
				/>
			</div>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>

				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					₹ {price}
				</p>
				<div
					onClick={() => setBuyNowModal(false)}
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Bid Now
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</div>
				<div
					onClick={() => setBuyNowModal(itemId)}
					className="inline-flex items-end float-right px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Buy Now
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Card;
