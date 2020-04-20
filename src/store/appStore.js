// import { EventEmitter } from "events";
// // import { getCountries, getSingleCountries } from "../actions/appActions";
// import dispatcher from "../appDispatcher";

// let _countries = {};
// let _nigeria = {};

// class Store extends EventEmitter {
// 	addChangeListeners(callback) {
// 		this.on("change", callback);
// 	}
// 	removeChangeListener(callback) {
// 		this.removeListener("change", callback);
// 	}

// 	emitChange() {
// 		this.emit("change");
// 	}
// 	getCountries() {
// 		return _countries;
// 	}
// 	getNigeria() {
// 		return _nigeria;
// 	}
// }

// const store = new Store();

// dispatcher.register((action) => {
// 	switch (action.actionType) {
// 		case "LOAD_COUNTRIES":
// 			_countries = { ...action.data };
// 			store.emitChange();
// 			break;
// 		case "LOAD_COUNTRY":
// 			_nigeria = { ...action.data };
// 			store.emitChange();
// 			break;
// 		default:
// 			return "noting to load";
// 	}
// });

// export default store;
