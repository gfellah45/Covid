import React from "react";

function News({ nigeria }) {
	const data = { ...nigeria[nigeria.length - 1] };
	const date = new Date(data.Date);

	return (
		<div className="bg-gray-300 p-4  rounded">
			<p className="text-center p-2 text-gray-900 font-bold">
				Nigeria's latest Update as at {date.toLocaleDateString()}
			</p>
			<div>
				<div className="bg-yellow-700 flex text-white rounded justify-around m-2 p-2">
					<span className="font-semibold ">Confirm Cases</span>
					<span className="font-bold">
						{Number(data.Confirmed).toLocaleString()}
					</span>
				</div>
			</div>
			<div>
				<div className="bg-red-700 flex text-white rounded justify-around m-2 p-2">
					<span className="font-semibold ">Confirm Deaths</span>
					<span className="font-bold">
						{Number(data.Deaths).toLocaleString()}
					</span>
				</div>
			</div>
			<div>
				<div className="bg-green-700 flex text-white rounded justify-around m-2 p-2">
					<span className="font-semibold ">Confirm Recovery</span>
					<span className="font-bold">
						{Number(data.Recovered).toLocaleString()}
					</span>
				</div>
			</div>
			<div>
				<div className="bg-blue-700 flex text-white rounded justify-around m-2 p-2">
					<span className="font-semibold ">Confirm Active</span>
					<span className="font-bold">
						{Number(data.Active).toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
}

export default News;
