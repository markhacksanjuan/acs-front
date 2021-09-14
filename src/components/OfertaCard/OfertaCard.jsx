import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './ofertaCard.style'

const OfertaCard = ({ ofertas, setIdOferta }) => {
    const classes = useStyles()
    const history = useHistory()

    const onClick = (id) => {
        setIdOferta(id)
        history.push(`/oferta/${id}`)
    }

    useEffect(() => {

    }, [])

    const renderOfertas = () => {
        return ofertas.map(oferta => {
            return(
                <div className={classes.ofertaCard} key={oferta._id} onClick={() => onClick(oferta._id)}>
                    <p>Servicio: {oferta.servicio}</p>
                    <p>Titulación: {oferta.titulacion}</p>
                    <p>Experiencia: {oferta.experiencia}</p>
                    <p>Puesto: {oferta.puesto}</p>
                    <p>Ubicación: {oferta.ubicacion}</p>
                    <p>Desplazamientos: {oferta.desplazamientos}</p>
                    <p>Idiomas: {oferta.idiomas}</p>
                    <p>Tecnologías: {oferta.tecnologias}</p>
                </div>
            )
        })
    }

    return(
        <>
            {renderOfertas()}
        </>
    )
}
export default OfertaCard