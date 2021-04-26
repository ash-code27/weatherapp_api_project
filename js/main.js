function getJson() {
    let city = document.querySelector('#city').value;
    let zipcode = document.querySelector('#zipcode').value;
    
let apikey = "360c647577b28652d64cc2f476398b38" ////REPLACE API KEY HERE//////


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipcode}&appid=${apikey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
    console.log(data)


    
        let city_sect = document.getElementById('city_output')
        city_sect.innerHTML = city

        let zipcode_sect = document.getElementById('zip_output')
        zipcode_sect.innerHTML = zipcode

        let high = data.main.temp_max
        let high_tempsect = document.getElementById('high')
        high_tempsect.innerHTML = high


        let low = data.main.temp_min
        let low_tempsect = document.getElementById('low')
        low_tempsect.innerHTML = low

    
        let forecast = data.weather[0].main
        let forecast_sect = document.getElementById('forecast')
        forecast_sect.innerHTML = forecast


        let humidity = data.main.humidity
        let humidity_sect = document.getElementById('humidity')
        humidity_sect.innerHTML = humidity 
       
        }
    )
    
}




// Temperature Conversion
// function Temp_conversion(temp){
//     return Math.round((temp-273.15)*1.8)+32
// }
