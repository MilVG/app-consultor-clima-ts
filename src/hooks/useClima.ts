import axios from "axios";
import { SearchType } from "../types";

export default function useClima() {

  const fetchClima = async (search: SearchType) => {
    try {
      const appId = import.meta.env.VITE_API_KEY
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.pais},${search.pais}&appid=${appId}`

      const { data } = await axios(geoUrl)
      console.log(data);


    } catch (error) {
      console.log(error);

    }
  }

  return {
    fetchClima
  }
}
