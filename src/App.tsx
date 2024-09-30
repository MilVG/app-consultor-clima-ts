import styles from './App.module.css'
import Form from './components/Form/Form'
import useClima from './hooks/useClima'
function App() {

  const { fetchClima } = useClima()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchClima={fetchClima}
        />
        <p>2</p>
      </div>
    </>
  )
}

export default App
