import React, { useState } from "react";

const Modal = ({ handleModalopen, isOpen, Address, setAdress }) => {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [City, setCity] = useState(null);

	let city = null;
	const QUERY = `${latitude} + ${longitude} `;

	const Api_Key = "22f29fe9b48b464a957f2aefcb871f29";
	const Api_Endpoint = "https://api.opencagedata.com/geocode/v1/json";
	const REQ_URL = `${Api_Endpoint}?key=${Api_Key}&q=${QUERY}`;
	const getLocation = async (URL) => {
		const Response = await fetch(URL);
		let Location = await Response.json();

		console.log(Location);

		const { suburb, state_district, state, country } =
			Location.results[0].components;
		console.log(suburb, state_district, state, country);
		city = state_district;
		setCity(state_district);
		setAdress(`${suburb},${state_district},${state},${country}`);
	};

	function onSubmit(e) {
		e.preventDefault();
		console.log("form submited");
	}

	function findcurrentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLatitude(position.coords.latitude);
					setLongitude(position.coords.longitude);
					console.log(latitude, longitude);
					getLocation(REQ_URL);

					document.querySelector(".messageoferror").innerHTML =
						"Note! Press the button again in case of incorrect location";
					setTimeout(() => {
						document.querySelector(".messageoferror").innerHTML = "";
					}, 5000);
				},
				(error) => {
					console.error("Error getting geolocation:", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}

	return (
		<div className="w-[100%] z-10  h-screen backdrop-blur-3xl   fixed flex justify-center items-center ">
			<div className="content w-[400px] md:w-[500px] bg-gray-100 rounded-3xl flex flex-col justify-center items-center  p-5 gap-2">
				<div
					className="close font-bold text-3xl bg-white p-2 rounded-full hover:bg-gray-50 cursor-pointer self-end"
					onClick={() => {
						handleModalopen();
					}}
				>
					X
				</div>
				<div className="logo flex justify-center">
					<img
						src="./images/logo.webp"
						alt="logo"
						className="rounded-3xl w-40"
					/>
				</div>
				<h4 className="font-bold text-center text-lg">Choose your location </h4>
				<button
					className="bg-gray-300  w-60 p-[6px] rounded-2xl font-bold hover:bg-red-500"
					onClick={() => {
						findcurrentLocation();
					}}
				>
					Use my Current Location
				</button>
				<div className="messageoferror text-red-600 font-bold transition duration-900"></div>
				<form onSubmit={onSubmit} className="flex flex-col gap-2 w-full mt-3">
					<input
						type="text"
						placeholder="City name here..."
						value={City ? `${City}` : ""}
						className="p-3 rounded-2xl"
					/>
					<input
						type="text"
						placeholder="Adress here..."
						value={Address ? `${Address}` : ""}
						className="p-3 rounded-2xl"
						required
					/>
					<input
						type="submit"
						onClick={() => {
							handleModalopen();
						}}
						value="Select"
						required
						className="p-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default Modal;
