import React from 'react'
import Icon, { IconName } from '../Icon'
import icons from '../Icon/svg'
import getMotherSentenceFromWeather from '../../utils/getMotherSentenceFromWeather'

import './style.css'

interface Props{
  iconsToShow ?: IconName[]
  onIconClick(fn: IconName): void
}

const IconList: React.FC<Props> = ({ iconsToShow, onIconClick }) => {
  return (
      <ul>
        {
          (iconsToShow || Object.keys(icons).map(key => key as IconName))
            .map(icon => (
              <li onClick={() => { onIconClick(icon) }} key={icon}>
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