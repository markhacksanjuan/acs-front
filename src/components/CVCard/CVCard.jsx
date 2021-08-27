import React from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './CVCard.style'

const CVCard = ({ cvs, setIdCV }) => {
    const classes = useStyles()
    const history = useHistory()

    const onClick = (id) => {
        setIdCV(id)
        history.push(`/cv/${id}`)
    }

    const renderCV = () =>{
        return cvs.map(cv => {
            return(
                <div className={classes.cvCard} key={cv._id} onClick={() => onClick(cv._id)} >
                    <div>
                        <p>Nombre: {cv.nombre} {cv.apellido1} {cv.apellido2}</p>
                        <p>DNI: {cv.dni}</p>
                        <p>email: {cv.email}</p>
                        <p>Sexo: {cv.sexo}</p>
                        <p>Provincia: {cv.provincia}</p>
                        <p>País: {cv.pais}</p>
                    </div>
                    <div>
                        {/* {renderEstudios(cv.estudios)} */}
                    </div>
                    <div>
                        {/* {renderEstudios2(cv.estudios2)} */}
                    </div>
                </div>
            )
        })
    }

    const renderEstudios = estudios => {
        return estudios.map(estudio => {
            return(
                <div key={estudio._id}>
                    <p>Titulación: {estudio.titulacion}</p>
                    <p>Último año: {estudio.ultimoAno}</p>
                    <p>Especialidad: {estudio.especialidad}</p>
                    <p>Comentario: {estudio.comentarioEstudio}</p>
                    <p>Estudios finalizados: {estudio.estudiosFinalizados ? <span>Sí</span> : <span>No</span>}</p>
                </div>
            )
        })
    }

    const renderEstudios2 = estudios => {
        return estudios.map(estudio => {
            return(
                <div key={estudio._id}>
                    <p>Centro: {estudio.centro}</p>
                </div>
            )
        })
    }

    return(
        <>
            {renderCV()}
        </>
    )
}
export default CVCard