import React, { useEffect, useState } from 'react'
import Icon, { IconName } from './components/Icon'
import './App.css'

import api from './services/WeatherAPI'
import getMotherSentenceFromWeather from './utils/getMotherSentenceFromWeather'
import IconList from './components/IconList'

const App: React.FC = () => {
  const [weatherIcon, setWeatherIcon] = useState<IconName>('clearsky_day')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [shouldShowModal, setShouldShowModal] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      error => {
        console.log(error)
      },
      {
        timeout: 3000
      }
    )
  }, [])

  useEffect(() => {
    fetchData()
    
    async function fetchData(){
      const response = await api.get('/complete', {
        params: { lat: latitude, lon: longitude }
      })
      
      setWeatherIcon(response.data.properties.timeseries[0].data.next_1_hours.summary.symbol_code)
    }
  }, [latitude, longitude])

  return (
    <div className="App">
      {shouldShowModal &&
        <div className="modal"> 
          <div className="modal-content">
            <header>
              <h2>Climas e frases</h2>
              <button className="close-btn" onClick={() => setShouldShowModal(false)}>&times;</button>
            </header>
            <IconList />
          </div>
        </div>
      }

      <h1>Mother Weather</h1>
      <Icon name={weatherIcon} />

      <div className="quote">
        <q>{getMotherSentenceFromWeather(weatherIcon)}</q>
        <p> - Mãe, {new Date().getFullYear()}</p>
      </div>

      <footer>
        <p>
          Feito com <span className="heart">&hearts;</span> por
          <a href="https://guilhermebalog.github.io"> Guilherme Balog</a>
        </p> 
        <p>
          <button type="button" onClick={() => setShouldShowModal(true)}>Ver todas os climas e frases disponíveis</button>
        </p>
      </footer>
    </div>
  );
}

export default App;
