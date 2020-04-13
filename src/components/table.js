import React from "react";
import TableRow from "./tableRow";
import "../assets/style.css";

const Table = ({ table }) => {
	const tableData = [...table];
	const isZero = table.length === 0;

	return (
		<>
			<div className="my-12 flex flex-col bg-gray-300 rounded px-2 py-2 overflow-y-scroll sr">
				<div className="text-center p-6">
					<h1 className="text-2xl text-blue-700 underline font-bold text-shadow-lg">
						{" "}
						Global Data
					</h1>
				</div>
				<table className="table-auto h-32 overflow-x-scroll overflow-y-scroll">
					<thead className="border-b-2 border-solid border-blue-700">
						<tr>
							<th className="text-xs text-center p-2 text-black-700 lg:text-lg">
								Country
							</th>
							<th className="text-xs text-center p-2 text-blue-700 lg:text-lg">
								Confirm Cases
							</th>
							<th className="text-xs text-center p-2 text-red-700 lg:text-lg">
								Confirm Deaths
							</th>
							<th className="text-xs text-center p-2 text-green-700 lg:text-lg">
								Confirm Recovery
							</th>
						</tr>
					</thead>
					<tbody>
						{isZero ? (
							<tr className="flex">
								<td className="text-red-700 text-center px-2 font-extrabold text-md">
									Country Not Found
								</td>
							</tr>
						) : (
							tableData.map((data, index) => {
								const {
									Country,
									TotalConfirmed,
									TotalDeaths,
									TotalRecovered,
								} = data;
								return (
									<TableRow
										key={index}
										country={Country}
										confirm={TotalConfirmed}
										deaths={TotalDeaths}
										recovered={TotalRecovered}
									/>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
