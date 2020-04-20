const urlWorld = "https://api.covid19api.com/summary";
const urlNigeria =
	"https://api.covid19api.com/live/country/nigeria/status/confirmed22";

export async function getGlobal() {
	return await fetch(urlWorld)
		.then((data) => data.json())
		.then((res) => res);
}

export async function getLocal() {
	return await fetch(urlNigeria)
		.then((data) => data.json())
		.then((res) => res);
}

//

// async function data() {
//     // 	const res = await fetch(urlWorld);
//     // 	res
//     // 		.json()
//     // 		.then((data) => {
//     // 			global(data);
//     // 		})
//     // 		.catch((error) => console.log(error));
//     // 	const res2 = await fetch(urlNigeria);
//     // 	res2
//     // 		.json()
//     // 		.then((data) => local(data))
//     // 		.catch((error) => console.log(error));
//     // }
