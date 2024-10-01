import styles from './App.module.css'
import ClimaDetalle from './components/ClimaDetalle/ClimaDetalle'
import Form from './components/Form/Form'
import useClima from './hooks/useClima'
function App() {

  const { fetchClima, clima } = useClima()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchClima={fetchClima}
        />
        <ClimaDetalle
          clima={clima}
        />
      </div>
    </>
  )
}

export default App
