import { dbpaises } from "../../data/dbpaises";
import styles from "./Form.module.css"
export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor='city'>Ciudad</label>
        <input
          id='city'
          type='text'
          name='city'
          placeholder='ciudad'
        />
      </div>
      <div className={styles.field}>
        <label htmlFor='city'>País</label>
        <select>
          <option value="">--Seleccione un País--</option>
          {
            dbpaises.map(pais => (
              <option
                key={pais.code}
                value={pais.code}
              >{pais.name}</option>
            ))
          }
        </select>

      </div>

      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  )
}

