import '../App.css';
import getWeather from '../fetchdata/getWeather';
import { useState, useEffect } from 'react';

export default function WeatherApp() {
    const [city, setCity] = useState('Pretoria');
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [rainChance, setRainChance] = useState(0);
    const [hourlyForecast, setHourlyForecast] = useState([]);  // For hourly forecast

    const handleSearch = async () => {
        const data = await getWeather(city);
        if (data) {
            setTemp(data.list[0].main.temp);  // Current temp
            setDescription(data.list[0].weather[0].description);  // Current description
            setIcon(data.list[0].weather[0].icon);  // Current icon
            setRainChance(data.list[0].pop || 0);  // Rain chance if available

            // Extract hourly forecast (first 5 intervals as an example)
            const hourlyData = data.list.slice(0, 5).map((item) => ({
                time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                temp: item.main.temp,
                icon: item.weather[0].icon,
            }));
            setHourlyForecast(hourlyData);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [city]);

    return (
        <>  
            <div className="search-section">
                <input 
                    type="text"
                    placeholder='Search City'
                    onChange={(e) => setCity(e.target.value)}
                    className='search-city' 
                />
                <button className='btn-search' onClick={handleSearch}>Search</button>
            </div>
            <div className="weather-forecast">
                <div className='weather-app'>
                    <div className="weather-section">
                        <h1 className='city-name'>{city}</h1>
                        <div className="weather-information">
                            <div className='temperature'>  
                                <p>Chances of rain: {rainChance > 0 ? `${Math.round(rainChance * 100)}%` : '0%'}</p>
                                {temp && <h1>{temp}°C</h1>}
                                <p>{description}</p>
                            </div>
                            <div className="weatherIcon">
                                {icon && (
                                    <img 
                                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                                        alt="Weather Icon" className='icon'
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="todays-forecast">
                        <p className='todays-forecast-header'>Today's Forecast</p>
                        <div className="forecast-display">
                            <div className="forecast-container">
                                {hourlyForecast.map((hour, index) => (
                                    <div key={index} className="forecast-item">
                                        <p>{hour.time}</p>
                                        <img 
                                            src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`} 
                                            alt="Weather Icon" className='forecast-icon'
                                        />
                                        <p>{hour.temp}°C</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="air-condition">
                        <p className='todays-forecast-header'>AIR CONDITION</p>
                    </div>
                </div>
            </div>
        </>
    );
}
