export type SearchType = {
  ciudad: string
  pais: string
}

export type Pais = {
  code: string
  name: string
}

export type Clima = {
  name: string
  main: {
    temp: number
    temp_min: number
    temp_max: number
  }
}
