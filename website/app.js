// Personal API Key for OpenWeatherMap API
const key = '464d29d0d34ae63dfa7d86da179ccf44'
const url = 'https://api.openweathermap.org/data/2.5/weather?zip='
const date = new Date(Date.now()).toLocaleString()
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', async () => {
    /* Function called by event listener */
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    //check if there is no input
    if (zipcode != '' && feelings != '') {
        /* Function to GET Web API Data*/
        const weather_data = await fetch(url + zipcode + '&appid=' + key)
        const json = await weather_data.json()
        console.log(json)
        const data = {
            temp: json.main.temp,
            date: date,
            feeling: feelings
        }
        console.log(data)
        /* Function to POST data */
        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const post = await fetch('/weather', options)
        /* updateUI */
        document.getElementById('temp').textContent = 'Temperature: ' + data.temp + '° Kelvin'
        document.getElementById('date').textContent = 'Date: ' + data.date
        document.getElementById('content').textContent = 'feeling: ' + data.feeling
    }else{
        window.alert('missing inputs')
    }
});
