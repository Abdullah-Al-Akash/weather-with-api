// Search City:
const apiKey = '941ac23ac6cb3099f1d94c2d4e7b69d6';
const searchCity = () => {
        const searchField = document.getElementById('search-field');
        const searchFieldText = searchField.value;
        searchField.value = '';
        // console.log(searchFieldText);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchFieldText}&appid=${apiKey}`)
                .then(res => res.json())
                .then(data => displayWeatherDetails(data))
}

const displayWeatherDetails = (data) => {
        console.log(data);
        const { main, weather } = data;
        console.log(weather[0]);
        const city = document.getElementById('city');
        const temp = document.getElementById('temp');
        const situation = document.getElementById('situation');
        const pressure = document.getElementById('pressure');

        // Set Every Update:
        city.innerText = data.name;
        temp.innerText = (main.temp - 273.15).toFixed(2);
        situation.innerText = weather[0].main;
        pressure.innerText = main.pressure;
}