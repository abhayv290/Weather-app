const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f1181307mshdf4a45b95ee4a0fp1630dfjsnc745486cd73b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityname.innerHTML = 'Weather Forcast for ' + city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp + '&deg C'
			feels_like.innerHTML = response.feels_like + '&deg C'
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp + '&deg C'
			min_temp.innerHTML = response.min_temp + '&deg C'
			wind_speed.innerHTML = response.wind_speed+ 'Km/H'
			wind_degrees.innerHTML = response.wind_degrees +'&deg'
			sunrise.innerHTML = response.sunrise 
			sunset.innerHTML = response.sunset


			const rs = response.cloud_pct
			if(rs>90){
				document.getElementById('img1').style.visibility='hidden'
				document.getElementById('img2').style.visibility='hidden'
				document.getElementById('img3').style.visibility='visible'
				
			}
			else if(rs>50 && rs<=90){
				document.getElementById('img3').style.visibility='hidden';
				document.getElementById('img2').style.visibility='visible';
				document.getElementById('img1').style.visibility='hidden'
			}
			else {
				document.getElementById('img3').style.visibility='hidden';
				document.getElementById('img2').style.visibility='hidden';
				document.getElementById('img1').style.visibility='visible'
			}

			
			
		})
		.catch(error => console.log(error));
}










Submit.addEventListener('click', (e) => {
	// e.preventDefault()
	getWeather(city.value)
})



knpr.addEventListener('click', (e) => {
	// e.preventDefault()
	getWeather('Kanpur')
})
bgl.addEventListener('click', (e) => {
	// e.preventDefault()
	getWeather('Banglore')
})
mum.addEventListener('click', (e) => {
	// e.preventDefault()
	getWeather('Mumbai')
})
getWeather('Delhi');



const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f1181307mshdf4a45b95ee4a0fp1630dfjsnc745486cd73b',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

function getaqi(city) {

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, option)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			overall_aqi.innerHTML = response.overall_aqi
			CO.innerHTML = response.CO.concentration
			NO2.innerHTML = response.NO2.concentration

			SO2.innerHTML = response.SO2.concentration
			O3.innerHTML = response.O3.concentration



		})
}
Submit.addEventListener('click', (e) => {
	// e.preventDefault()
	getaqi(city.value)
})
knpr.addEventListener('click', (e) => {
	// e.preventDefault()
	getaqi('Kanpur')
})
bgl.addEventListener('click', (e) => {
	// e.preventDefault()
	getaqi('Banglore')
})
mum.addEventListener('click', (e) => {
	// e.preventDefault()
	getaqi('Mumbai')
})
getaqi('Delhi');

