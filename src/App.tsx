import styles from './App.module.css'
import ClimaDetalle from './components/ClimaDetalle/ClimaDetalle'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import useClima from './hooks/useClima'
function App() {

  const { fetchClima, clima, datosvaciosClima, loading } = useClima()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchClima={fetchClima}
        />
        {loading && <Spinner />}
        {datosvaciosClima &&

          <ClimaDetalle
            clima={clima}
          />
        }
      </div>
    </>
  )
}

export default App
