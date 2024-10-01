import axios from "axios";
import { SearchType } from "../types";
import { z } from "zod";
/* TYPE GUARD O ASSERTION*/

// function isClimaResponse(clima: unknown): clima is Clima {
//   return (
//     Boolean(clima) &&
//     typeof clima === 'object' &&
//     typeof (clima as Clima).name === 'string' &&
//     typeof (clima as Clima).main.temp === 'number' &&
//     typeof (clima as Clima).main.temp_min === 'number' &&
//     typeof (clima as Clima).main.temp_max === 'number'
//   )
// }

/* UTILIZNADO LA LIBRERIA ZOD */

const Clima = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  })
})

type Clima = z.infer<typeof Clima>

export default function useClima() {

  const fetchClima = async (search: SearchType) => {
    try {
      const appId = import.meta.env.VITE_API_KEY
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.ciudad},${search.pais}&appid=${appId}`


      const { data } = await axios(geoUrl)

      const lat = data[0].lat
      const lon = data[0].lon

      const climaurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      /*PRIMERA FORMA DE TIPEAR UNA LLAMADA DE DATOS*/
      //const { data: ClimaResult } = await axios<Clima>(climaurl)
      //console.log(ClimaResult.name);
      //console.log(ClimaResult.main.temp);

      /*USANDO SEGUNDA FORMA DE TIPAR LLAMADO TYPE GUARDS */
      // const { data: ClimaResult } = await axios(climaurl)
      // const result = isClimaResponse(ClimaResult)
      // if (result) {
      //   console.log(ClimaResult.name);
      // } else {
      //   console.log('Respuesta mal formada');
      //
      // }

      /*USANSO LA LIBRERIA ZOD*/
      const { data: ClimaResult } = await axios(climaurl)
      const result = Clima.safeParse(ClimaResult)
      if (result) {

        console.log(result.data?.name);
        console.log(result.data?.main.temp);

      }



    } catch (error) {
      console.log(error);

    }
  }

  return {
    fetchClima
  }
}
