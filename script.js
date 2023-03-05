const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5917ef278msh94bbe90802d5a67p1a1d35jsn41143f01202b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

var getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            // temp3.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}



submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response1 => response1.json())
        .then(response1 => {
            console.log(response1)
            temp3.innerHTML = response1.temp
            humidity3.innerHTML = response1.humidity
            wind_speed3.innerHTML = response1.wind_speed
        })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
        .then(response2 => response2.json())
        .then(response2 => {
            console.log(response2)
            temp4.innerHTML = response2.temp
            humidity4.innerHTML = response2.humidity
            wind_speed4.innerHTML = response2.wind_speed
        })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Siliguri', options)
        .then(response3 => response3.json())
        .then(response3 => {
            temp5.innerHTML = response3.temp
            humidity5.innerHTML = response3.humidity
            wind_speed5.innerHTML = response3.wind_speed
        })





