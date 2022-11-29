import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
	// 2  guardamos las coodenas de mi ubicacio en un usestae//

	const [coords, setCoords] = useState();
	const [weather, setweather] = useState();
	const [temperature, setTemperature] = useState();
	const [iscelsius, setIscelsius] = useState(true);

	const success = (pos) => {
		const newCoords = {
			lat: pos.coords.latitude,
			lon: pos.coords.longitude,
		};
		setCoords(newCoords);
	};

	const changeTemperature = () => {
		setIscelsius(!iscelsius);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success); //1    esta es al geolocalizacion de mi posicion si es exitosa "success" me da la posicion
		//pasamos al useeffect para que se renderice 1 sola vez
	}, []);
	///////////////////////////////////////////////////////////////////////////////////

	/////peticon a la api del clima //////////

	useEffect(() => {
		if (coords) {
			const API_KEY = "f5ff8a1506b56841c78ecf057b1b36dd";
			const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;
			axios
				.get(URL)
				.then((res) => {
					const temKelvin = res.data.main.temp;
					const temCelsius = (temKelvin - 273.15).toFixed(1);
					const temFahrenheit = ((temCelsius * 9) / 5 + 32).toFixed(1);
					const newTemperature = {
						fahrenheit: temFahrenheit,
						celsius: temCelsius,
					};
					setTemperature(newTemperature);
					setweather(res.data);
				})
				
				.catch((err) => console.log(err));
				
		}
	}, [coords]);


	return (
		<div className="App">
			{weather ? (
				<WeatherCard
					weather={weather}
					temperature={temperature}
					iscelsius={iscelsius}
					changeTemperature={changeTemperature}
				/>
			) : (
				<p>
					Loading......................
				</p>
				
			)}
		</div>
	);
}

export default App;
