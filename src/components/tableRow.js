import React from "react";

const TableRow = ({ country, confirm, deaths, recovered }) => {
	return (
		<tr className="border-solid border-b-2 border-blue-700 mx-2">
			<td className="text-xs text-font-bold text-center px-2 py-4 text-black">
				{country}
			</td>
			<td className="text-xs text-center font-bold p-2 text-blue-700">
				{Number(confirm).toLocaleString()}
			</td>
			<td className="text-xs text-center font-bold p-2 text-red-700">
				{Number(deaths).toLocaleString()}
			</td>
			<td className="text-xs text-center font-bold p-2 text-green-700">
				{Number(recovered).toLocaleString()}
			</td>
		</tr>
	);
};

export default TableRow;
