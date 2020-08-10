import React from 'react'
import './style.css'

import icons from './svg'

export type IconName =
    'clearsky_day' |
    'clearsky_night' |
    'clearsky_polartwilight' |
    'cloudy' |
    'fair_day' |
    'fair_night' |
    'fair_polartwilight' |
    'fog' |
    'heavyrainandthunder' |
    'heavyrainshowersandthunder_day' |
    'heavyrainshowersandthunder_night' |
    'heavyrainshowersandthunder_polartwilight' |
    'heavyrainshowers_day' |
    'heavyrainshowers_night' |
    'heavyrainshowers_polartwilight' |
    'heavyrain' |
    'heavysleetandthunder' |
    'heavysleetshowersandthunder_day' |
    'heavysleetshowersandthunder_night' |
    'heavysleetshowersandthunder_polartwilight' |
    'heavysleetshowers_day' |
    'heavysleetshowers_night' |
    'heavysleetshowers_polartwilight' |
    'heavysleet' |
    'heavysnowandthunder' |
    'heavysnowshowersandthunder_day' |
    'heavysnowshowersandthunder_night' |
    'heavysnowshowersandthunder_polartwilight' |
    'heavysnowshowers_day' |
    'heavysnowshowers_night' |
    'heavysnowshowers_polartwilight' |
    'heavysnow' |
    'lightrainandthunder' |
    'lightrainshowersandthunder_day' |
    'lightrainshowersandthunder_night' |
    'lightrainshowersandthunder_polartwilight' |
    'lightrainshowers_day' |
    'lightrainshowers_night' |
    'lightrainshowers_polartwilight' |
    'lightrain' |
    'lightsleetandthunder' |
    'lightsleetshowers_day' |
    'lightsleetshowers_night' |
    'lightsleetshowers_polartwilight' |
    'lightsleet' |
    'lightsnowandthunder' |
    'lightsnowshowers_day' |
    'lightsnowshowers_night' |
    'lightsnowshowers_polartwilight' |
    'lightsnow' |
    'lightssleetshowersandthunder_day' |
    'lightssleetshowersandthunder_night' |
    'lightssleetshowersandthunder_polartwilight' |
    'lightssnowshowersandthunder_day' |
    'lightssnowshowersandthunder_night' |
    'lightssnowshowersandthunder_polartwilight' |
    'partlycloudy_day' |
    'partlycloudy_night' |
    'partlycloudy_polartwilight' |
    'rainandthunder' |
    'rainshowersandthunder_day' |
    'rainshowersandthunder_night' |
    'rainshowersandthunder_polartwilight' |
    'rainshowers_day' |
    'rainshowers_night' |
    'rainshowers_polartwilight' |
    'rain' |
    'sleetandthunder' |
    'sleetshowersandthunder_day' |
    'sleetshowersandthunder_night' |
    'sleetshowersandthunder_polartwilight' |
    'sleetshowers_day' |
    'sleetshowers_night' |
    'sleetshowers_polartwilight' |
    'sleet' |
    'snowandthunder' |
    'snowshowersandthunder_day' |
    'snowshowersandthunder_night' |
    'snowshowersandthunder_polartwilight' |
    'snowshowers_day' |
    'snowshowers_night' |
    'snowshowers_polartwilight' |
    'snow'

interface Props{
    name: IconName,
}

const Icon: React.FC<Props> = ({ name }) => {

    return (
        <div className="icon">
            <img src={icons[name]} alt={name} />
        </div>
    )
}

export default Icon