import axios from "axios";
import { SearchType } from "../types";

export default function useClima() {

  const fetchClima = async (search: SearchType) => {
    try {
      const appId = import.meta.env.VITE_API_KEY
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.ciudad},${search.pais}&appid=${appId}`


      const { data } = await axios(geoUrl)

      const lat = data[0].lat
      const lon = data[0].lon

      const climaurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      const { data: ClimaResult } = await axios(climaurl)

      console.log(ClimaResult);


    } catch (error) {
      console.log(error);

    }
  }

  return {
    fetchClima
  }
}
