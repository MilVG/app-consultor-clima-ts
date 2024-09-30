import { ChangeEvent, useState } from "react";
import { SearchType } from "../../types";
import { dbpaises } from "../../data/dbpaises";
import styles from "./Form.module.css"
export default function Form() {
  const [search, setSearch] = useState<SearchType>({
    ciudad: '',
    pais: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor='ciudad'>Ciudad</label>
        <input
          id='ciudad'
          type='text'
          name='ciudad'
          placeholder='ciudad'
          value={search.ciudad}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="pais">País</label>
        <select
          id="pais"
          value={search.pais}
          name="pais"
          onChange={handleChange}
        >
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

