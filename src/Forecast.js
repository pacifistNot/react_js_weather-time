import axios from 'axios'
import React, { useState } from "react";
import './style.css';

function Forecast () {

    const [data, setData] = useState({
        celcius: '',
        name: '',
        humidity: '',
        speed: ''
    })

    const [name, setName] = useState('');
    const [error, setError] = useState('');



    const handleClick = () => {
        if(name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=75297dd427a167d5997bd922e0e3fb3d&units=metric`;     
            axios.get(apiUrl)
            .then(res => {

                let cloudPath = '';
                if(res.data.weather[0].main == "Clouds") {
                    cloudPath = "Облачно"
                } else if(res.data.weather[0].main == "Clear") {
                    cloudPath = "Ясно"
                }else if(res.data.weather[0].main == "Rain") {
                    cloudPath = "Дождь"
                }else if(res.data.weather[0].main == "Drizzle") {
                    cloudPath = "Мелкий дождь"
                }else if(res.data.weather[0].main == "Mist") {
                    cloudPath = "Туман"
                }

                console.log(res.data);
                setData({...data, celcius: res.data.main.temp, 
                                    name: res.data.name, 
                                    humidity: res.data.main.humidity,
                                    speed: res.data.wind.speed,
                                    cloud: cloudPath })
                setError('');
            })
            .catch( err => {
                if(err.response.status == 404) {
                    setError("Такого города нет")
                } else {
                    setError('');
                }
                console.log(err)
            });
        }
    }

    return (
        <div className="container">
            <div className="weather">
                <div className='weather__search__container'>
                    <div className="weather__search">
                        <input type="text" placeholder="Введите название города " onChange={e => setName(e.target.value)}/>
                        <button onClick={handleClick}>Поиск</button>
                    </div>
                    <div className='weather__input__error'>
                        <p>{error}</p>
                    </div>
                </div>
                <div className="weather__info">
                    <h1>{Math.round(data.celcius)}°C</h1>
                    <h4 className='weather__cloud'>{data.cloud}</h4>
                    <h2 className='weather__city'>{data.name}</h2>
                    <div className="weather__info__details">
                        <div className="weather__info__details__left-col">
                            <p>Влажность</p>
                            <p>{Math.round(data.humidity)}%</p>
                        </div>
                        <div className="weather__info__details__right-col">
                            <p>Ветер</p>
                            <p>{Math.round(data.speed)} км/ч</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forecast