import { ChangeEvent, FormEvent, useState } from "react";
import { SearchType } from "../../types";
import { dbpaises } from "../../data/dbpaises";
import styles from "./Form.module.css"
import Alert from "../Alert/Alert";

type FetchlimaProps = {
  fetchClima: (search: SearchType) => Promise<void>
}
export default function Form({ fetchClima }: FetchlimaProps) {
  const [search, setSearch] = useState<SearchType>({
    ciudad: '',
    pais: ''
  })

  const [alert, setAlert] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios')

    }
    fetchClima(search)
  }
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {alert && <Alert>{alert}</Alert>}
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

