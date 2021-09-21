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
                        <p>Provincia: {cv.provincia}</p>
                        <p>Tecnologías: {cv.tecnologias}</p>
                    </div>
                </div>
            )
        })
    }

    return(
        <>
            {cvs && renderCV()}
        </>
    )
}
export default CVCard