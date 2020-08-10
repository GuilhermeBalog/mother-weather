import React, { useEffect, useState } from 'react'
import Icon, { IconName } from './Icon'
import './App.css'

import api from './services/WeatherAPI'


const App: React.FC = () => {
  const [weatherIcon, setWeatherIcon] = useState<IconName>('clearsky_day')

  useEffect(() => {
    fetchData()
    
    async function fetchData(){
      // 16.407215, 106.528151
      const lat = 16.407215
      const lon = 106.528151
      const response = await api.get('/complete', {
        params: { lat, lon }
      })
      
      setWeatherIcon(response.data.properties.timeseries[0].data.next_1_hours.summary.symbol_code)
    }
  }, [])

  return (
    <div className="App">
      <Icon name={weatherIcon} />
      <h1>Filho, leva um casaco</h1>
    </div>
  );
}

export default App;
