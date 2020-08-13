import { IconName } from "../components/Icon"

export default function getMotherSentenceFromWeather(weather: IconName){
    switch (weather){
        case "clearsky_day":
        case "clearsky_polartwilight":
        case "fair_day":
        case "fair_polartwilight":
            return "Filho, passa protetor, vai fazer sol"

        case "heavyrain":
        case "heavyrainshowers_day":
        case "heavyrainshowers_night":
        case "heavyrainshowers_polartwilight":
        case "lightrain":
        case "lightrainshowers_day":
        case "lightrainshowers_night":
        case "lightrainshowers_polartwilight":
        case "rain":
        case "rainshowers_day":
        case "rainshowers_night":
        case "rainshowers_polartwilight":
            return "Filho, leva um guarda chuva, vai chover"

        case "heavyrainandthunder":
        case "heavyrainshowersandthunder_day":
        case "heavyrainshowersandthunder_night":
        case "heavyrainshowersandthunder_polartwilight":
        case "heavysnowandthunder":
        case "heavysnowshowersandthunder_day":
        case "heavysnowshowersandthunder_night":
        case "heavysnowshowersandthunder_polartwilight":
        case "lightrainshowersandthunder_day":
        case "lightrainshowersandthunder_night":
        case "lightrainshowersandthunder_polartwilight":
        case "lightrainandthunder":
        case "lightsnowandthunder":
        case "lightssnowshowersandthunder_day":
        case "lightssnowshowersandthunder_night":
        case "lightssnowshowersandthunder_polartwilight":
        case "rainandthunder":
        case "rainshowersandthunder_day":
        case "rainshowersandthunder_night":
        case "rainshowersandthunder_polartwilight":
        case "snowandthunder":
        case "snowshowersandthunder_day":
        case "snowshowersandthunder_night":
        case "snowshowersandthunder_polartwilight":
            return "Filho, fica em casa, tá trovejando"

        case "heavysleetandthunder":
        case "heavysleetshowersandthunder_day":
        case "heavysleetshowersandthunder_night":
        case "heavysleetshowersandthunder_polartwilight":
        case "heavysleetshowers_day":
        case "heavysleetshowers_night":
        case "heavysleetshowers_polartwilight":
        case "heavysleet":
        case "lightsleetandthunder":
        case "lightsleetshowers_day":
        case "lightsleetshowers_night":
        case "lightsleetshowers_polartwilight":
        case "lightsleet":
        case "lightssleetshowersandthunder_day":
        case "lightssleetshowersandthunder_night":
        case "lightssleetshowersandthunder_polartwilight":
        case "sleetandthunder":
        case "sleetshowersandthunder_day":
        case "sleetshowersandthunder_night":
        case "sleetshowersandthunder_polartwilight":
        case "sleetshowers_day":
        case "sleetshowers_night":
        case "sleetshowers_polartwilight":
        case "sleet":
            return "Filho, fica em casa que vai cair granizo"

        case "lightsnow":
        case "lightsnowshowers_day":
        case "lightsnowshowers_night":
        case "lightsnowshowers_polartwilight":
        case "snowshowers_day":
        case "snowshowers_night":
        case "snowshowers_polartwilight":
        case "snow":
        case "heavysnowshowers_day":
        case "heavysnowshowers_night":
        case "heavysnowshowers_polartwilight":
        case "heavysnow":
            return "Filho, leva um casaco que vai esfriar"

        case "clearsky_night":
        case "fair_night":
            return "Filho, não volta muito tarde"

        case "cloudy":
        case "partlycloudy_day":
        case "partlycloudy_night":
        case "partlycloudy_polartwilight":
            return "Ta com nuvem, acho que o tempo vai virar"
        
        case "fog":
            return "Não consigo ver nada nessa neblina"
    }
}
