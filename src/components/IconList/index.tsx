import React from 'react'
import Icon, { IconName } from '../Icon'
import icons from '../Icon/svg'
import getMotherSentenceFromWeather from '../../utils/getMotherSentenceFromWeather'

const IconList: React.FC = () => {
  return (
    <ul>
      {
        Object.keys(icons)
          .map(key => key as IconName)
          .map(icon => (
            <li className={getMotherSentenceFromWeather(icon)}>
              <Icon name={icon} />
              <p><strong>{icon}</strong></p>
              <p>{getMotherSentenceFromWeather(icon)}</p>
            </li>
          )) 
      }
    </ul>
  )
}

export default IconList