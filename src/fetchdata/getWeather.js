const apiKey = '9d07f9e78b6f9c732bcc49d154d8f5d7';

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
