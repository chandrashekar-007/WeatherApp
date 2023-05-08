
let search_Box = document.querySelector(".search input");
let search_Btn = document.querySelector(".search button");
let weather_Icon = document.querySelector(".icon-weather")
let Weather = document.querySelector('.weather')
let invalid = document.querySelector('.err')
let btn = document.querySelector('.btn')
let menu_bar = document.querySelector('#ham_menu')
let side_bar = document.querySelector('.sidebar')



const api_Key = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const api_Id = '4a608bce4ced8ff9e3fdceef9abdbd35';

const check_Weather = async (city) => {
    let response = await fetch(api_Key + city + `&appid=${api_Id}`)
    if (response.status == 404 || search_Box.value == "") {
        invalid.style.display = 'block';
        Weather.style.display = 'none';
    }
    else {
        let data = await response.json()
        console.log(data)

        let a = document.querySelector('.temp')
        a.innerHTML = Math.round(data.main.temp) + '°C'
        let b = document.querySelector('.city')
        b.innerHTML = data.name
        let c = document.querySelector('.humidity')
        c.innerHTML = data.main.humidity + '%'
        let d = document.querySelector('.wind')
        d.innerHTML = data.wind.speed + ' km/h'
        let e = document.querySelector('.pressure')
        e.innerHTML = data.main.pressure + ' hPa'

        invalid.style.display = 'none';
        Weather.style.display = 'block';


        if (data.weather[0].main == 'Clouds') {
            weather_Icon.src = 'images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weather_Icon.src = 'images/clear.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weather_Icon.src = 'images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weather_Icon.src = 'images/mist.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weather_Icon.src = 'images/rain.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weather_Icon.src = 'images/snow.png';
        }


    }

}


search_Btn.addEventListener('click', () => {
    check_Weather(search_Box.value)
    // button.classList.add('.btn')


})
menu_bar.addEventListener("click", () => {
    menu_bar.classList.toggle('fa-times');
    side_bar.classList.toggle('active')
    alert('hello...its working')

})











