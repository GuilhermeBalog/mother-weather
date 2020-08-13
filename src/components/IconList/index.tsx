import React from 'react'
import Icon, { IconName } from '../Icon'
import icons from '../Icon/svg'
import getMotherSentenceFromWeather from '../../utils/getMotherSentenceFromWeather'

import './style.css'

const IconList: React.FC = () => {
  return (
    <ul>
      {
        Object.keys(icons)
          .map(key => key as IconName)
          .map(icon => (
            <li className={getMotherSentenceFromWeather(icon)}>
              <Icon name={icon} />
              <p><strong>{icon.replace('_', ' ')}</strong></p>
              <q>{getMotherSentenceFromWeather(icon)}</q>
            </li>
          )) 
      }
    </ul>
  )
}

export default IconList