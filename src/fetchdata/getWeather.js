// dont commit the apikey's into the public repository
const apiKey = ''; // move this to .env and dont commit the config file

const getWeather = async (cityName) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data; // Return the data
    } catch (error) {
        console.error(error);
    }
};

export default getWeather;
