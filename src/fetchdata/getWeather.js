const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const getWeather = async (cityName) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data; // Return the data
    } catch (error) {
        console.error(error);
    }
};

export default getWeather;
