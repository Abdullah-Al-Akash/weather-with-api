// Search City:
const apiKey = '941ac23ac6cb3099f1d94c2d4e7b69d6';
const searchCity = () => {
        const searchField = document.getElementById('search-field');
        const searchFieldText = searchField.value;
        searchField.value = '';
        // Without Search Something:
        if (searchFieldText.length == 0) {
                alert('Please Enter Your City Name');
        }
        // console.log(searchFieldText);
        else {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchFieldText}&appid=${apiKey}`)
                        .then(res => res.json())
                        .then(data => displayWeatherDetails(data))
        }
}

const displayWeatherDetails = (data) => {
        console.log(data);
        const { main, weather } = data;
        const city = document.getElementById('city');
        const temp = document.getElementById('temp');
        const situation = document.getElementById('situation');
        const pressure = document.getElementById('pressure');
        const humidity = document.getElementById('humidity');

        // Set Every Update:
        if (data.name == undefined) {
                city.innerText = 'There is no city';
                temp.innerText = '';
                situation.innerText = '';
                pressure.innerText = '';
                humidity.innerText = '';
        }
        else {
                city.innerText = data.name;
                temp.innerText = (main.temp - 273.15).toFixed(2);
                situation.innerText = weather[0].main;
                pressure.innerText = main.pressure;
                humidity.innerText = main.humidity;

                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.textContent = ''
                const div = document.createElement('div');
                if (weather[0].main == "Clouds") {
                        div.innerHTML = `
                        <i class="bi bi-cloud-drizzle-fill icon"></i>
                `;
                        weatherIcon.appendChild(div);
                }
                else {
                        div.innerHTML = `
                        <i class="bi bi-brightness-high-fill icon"></i>
                `;
                        weatherIcon.appendChild(div);
                }
        }

}