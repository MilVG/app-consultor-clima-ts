import { Clima } from "../../hooks/useClima"
import { formatTemperature } from "../../utils"
import styles from "./ClimaDetalle.module.css"


type ClimaProps = {
  clima: Clima
}
export default function ClimaDetalle({ clima }: ClimaProps) {
  return (
    <div className={styles.container}>
      <h2> Clima de: {clima.name}</h2>
      <p className={styles.current}>{formatTemperature(clima.main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>Min: <span>{formatTemperature(clima.main.temp_min)}&deg;C</span></p>
        <p>Max: <span>{formatTemperature(clima.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}

