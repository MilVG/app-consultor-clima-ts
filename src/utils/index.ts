export const formatTemperature = (temperarure: number): number => {
  const kelvin = 273.15
  return parseInt((temperarure - kelvin).toString())
}
