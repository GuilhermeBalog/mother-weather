import React, { useEffect, useState } from 'react'
import Icon, { IconName } from './Icon'
import './App.css'

import api from './services/WeatherAPI'

const App: React.FC = () => {
  const [weatherIcon, setWeatherIcon] = useState<IconName>('clearsky_day')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

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
      <Icon name={weatherIcon} />
      <h1>Filho, leva um casaco</h1>
    </div>
  );
}

export default App;
