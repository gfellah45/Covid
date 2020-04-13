import React from "react";

const World = ({ global }) => {
	const data = { ...global };

	// console.log(global);
	const isloading = Object.keys(data).length === 0;
	return isloading ? (
		<p className="text-center bg-gray-300 my-6 h-auto rounded p-4">
			Loading....{" "}
			<span className="block text-blue-700">Kindly refresh the page</span>{" "}
		</p>
	) : (
		<div className="bg-gray-300 my-6 h-auto rounded px-2 py-8 shadow-xl">
			<h3 className="text-center p-2 text-gray-900 font-bold text-1xl">
				Global Case Summary
			</h3>
			<div className="text-center">
				<p className="text-yellow-700 font-bold text-sm ">
					Total Confirm Cases
				</p>
				<h2 className="text-yellow-800 font-bold text-4xl">
					{Number(data.TotalConfirmed).toLocaleString()}
				</h2>
			</div>
			<div className="text-center">
				<p className="text-red-800 font-bold text-sm ">Total Confirm Deaths</p>
				<h2 className="text-red-800 font-bold text-4xl">
					{Number(data.TotalDeaths).toLocaleString()}
				</h2>
			</div>
			<div className="text-center">
				<p className="text-green-700 font-bold text-sm ">
					Total Confirm Recovered
				</p>
				<h2 className="text-green-700 font-black text-4xl">
					{Number(data.TotalRecovered).toLocaleString()}
				</h2>
			</div>
		</div>
	);
};

export default World;
