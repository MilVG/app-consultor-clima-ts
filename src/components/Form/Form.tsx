import { dbpaises } from "../../data/dbpaises";

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor='city'>Ciudad</label>
        <input
          id='city'
          type='text'
          name='city'
          placeholder='ciudad'
        />
      </div>
      <div>
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

      <input type="submit" value="Consultar Clima" />
    </form>
  )
}

