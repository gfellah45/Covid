import React, { useState, useEffect } from "react";
import Logo from "./assets/img/icons8-coronavirus-80.png";
import News from "./components/news";
import World from "./components/world";
import Table from "./components/table";
import Loader from "./components/loader";
import "./assets/main.css";
import "./assets/style.css";
import ReactGA from "react-ga";
// import auth from "./auth.ts";

function App() {
	// global states
	const [global, setGlobal] = useState({});
	const [table, setTable] = useState([]);
	const [nigeria, setNigeria] = useState([]);
	const [user, setUser] = useState("");
	const [searchData, setSearchData] = useState([]);

	const trackingId = "UA-163507114-1"; // Replace with your Google Analytics tracking ID
	ReactGA.initialize(trackingId);
	// ReactGA.set({
	// 	userId: auth.currentUserId(),
	// 	// any data that is relevant to the user session
	// 	// that you would like to track with google analytics
	// });
	ReactGA.pageview("/index.html");

	// api end points
	const urlWorld = "https://api.covid19api.com/summary";
	const urlNigeria =
		"https://api.covid19api.com/live/country/nigeria/status/confirmed22";

	// requesting api data
	async function data() {
		const res = await fetch(urlWorld);
		res
			.json()
			.then((data) => {
				setTable(data.Countries);
				setGlobal(data.Global);
			})
			.catch((error) => console.log(error));
		const res2 = await fetch(urlNigeria);
		res2
			.json()
			.then((data) => setNigeria(data))
			.catch((error) => console.log(error));
	}

	//use effects(side effect such as change in state and invoking called data)

	useEffect(() => {
		function tableData() {
			const result = table.filter((each) =>
				each.Country.toLowerCase().includes(user.toLowerCase())
			);
			setSearchData(result);
		}
		tableData();
	}, [table, user]);

	useEffect(() => {
		data();
	}, []);

	const isLoading = table.length === 0 && nigeria.length === 0;

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="container mx-auto px-6">
					<header className="flex justify-center py-4 px-8">
						<img
							src={Logo}
							alt="covid 19"
							className="rounded w-16 sm:w-8 lg:w-20"
						></img>
						<h1 className="font-black text-red-400 text-2xl lg:text-6xl md:text-lg">
							Covid19{" "}
							<span className="text-gray-100 inline-block ">Live Updates</span>
						</h1>
					</header>
					{/* main display */}
					<div className="flex flex-col lg:grid grid-cols-4 gap-10  ">
						<div className="col-start-1 col-end-2">
							<News nigeria={nigeria} />
							<World global={global} />
						</div>
						<div className="col-start-2 col-end-5 justify-center">
							<div className="input flex bg-gray-300 py-2 rounded">
								<i className="fas fa-search fa-lg"></i>
								<input
									type="search"
									placeholder="Search Country"
									className="px-4"
									value={user}
									onChange={(e) => setUser(e.target.value)}
								/>
							</div>
							<Table table={searchData} />
						</div>
					</div>
					<footer>
						<div className=" text-gray-300 p-0 lg:p-2">
							<div>
								<p className="font-bold text-sm lg: text-center lg:text-lg lg:m-2">
									{" "}
									Data is sourced from
									<a
										href="https://github.com/CSSEGISandData/COVID-19"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-yellow-700"
									>
										Johns Hopkins CSSE
									</a>
								</p>
							</div>
							<p className="font-bold text-center text-lg m-2 lg:m-0">
								built with{" "}
								<i class="fas fa-heart fa-1x" style={{ color: "red" }}></i> by{" "}
								<a
									href="http://twitter.com/UncleJAA"
									target="_blank"
									rel="noopener noreferrer"
									className="text-red-700"
								>
									Jerry Aaron
								</a>
							</p>
						</div>
					</footer>
				</main>
			)}
		</>
	);
}

export default App;
