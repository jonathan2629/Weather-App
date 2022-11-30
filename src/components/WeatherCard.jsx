import React from "react";

const WeatherCard = ({
	weather,
	temperature,
	iscelsius,
	changeTemperature,
}) => {
	return (
		<article>
			<div className="weather_tltle">
				<h1>WEATHER APP</h1>
				<img
					className="weather_title_image"
					src="https://cdn-icons-png.flaticon.com/128/740/740918.png"
					alt=" sun image"
				/>
			</div>

			<h3>
				{weather.name}, {weather.sys.country}
			</h3>

			<h4 className="weather_state_heaven">
				{weather.weather[0].description}
			</h4>
			<section>
				<div>
					<img
						src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
						alt="Image "
					/>
				</div>
			</section>
			<div className="wather_change_temperature">
				<p>
					{iscelsius
						? `${temperature.celsius}  °C`
						: `${temperature.fahrenheit}°F`}
				</p>
				<button onClick={changeTemperature}> DEGREES °F/°C</button>
			</div>
			<ul>
				<li></li>
				<li>
					<span> Wind Speed </span> {weather?.wind.speed}m/s
				</li>
				<li>
					<span>Clouds </span> {weather?.clouds.all} %
				</li>
				<li>
					<span>Pressure </span> {weather.main.pressure}
				</li>
			</ul>
		</article>
	);
};

export default WeatherCard;
