import { Clima } from "../../hooks/useClima"
import { formatTemperature } from "../../utils"



type ClimaProps = {
  clima: Clima
}
export default function ClimaDetalle({ clima }: ClimaProps) {
  return (
    <div>
      <h2> Clima de: {clima.name}</h2>
      <p>{formatTemperature(clima.main.temp)}&deg;C</p>
      <div>
        <p>Min: <span>{formatTemperature(clima.main.temp_min)}&deg;C</span></p>
        <p>Max: <span>{formatTemperature(clima.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}

