import Ejemplo from './Ejemplo'
import './App.css'

function App() {
const alumnos=[
  {
    nombre: 'Carlos',
    edad: 23
  },
  {
    nombre: 'Ana',
    edad: 22
  }
]
  return (
    <Ejemplo alumnos={alumnos}/>
  )
  }

export default App
