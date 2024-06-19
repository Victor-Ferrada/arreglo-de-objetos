function Ejemplo(props){
    return(
        //leer el contenido del arreglo
        <div>
        {
            props.alumnos.map((datosAlumnos,index)=>(
                <div>
                    <h1>Alumno: {index+1}</h1>
                    <h1>nombre alumno: {datosAlumnos.nombre}</h1>
                    <h1>edad alumno: {datosAlumnos.edad}</h1>
                </div>
            ))
        }    
        </div>
    )
}
export default Ejemplo

//api de pokemon tengo que elegir 6 
//mostrar el nombre del pokemon y la foto