import React, { useEffect, useState } from 'react'
import useStyles from './ofertas.style'

import OfertaCard from '../../OfertaCard/OfertaCard'
import Loading from '../../Loading/Loading'

import ofertaService from '../../../services/ofertaService'

const Ofertas = ({ setIdOferta }) => {
    const classes = useStyles()
    const [ofertas, setOfertas] = useState()

    const getOfertas = async () => {
        const offers = await ofertaService.getAllOfertas()
        setOfertas(offers)
    }

    useEffect(() => {
        getOfertas()
    }, [])
    return(
        <div className={classes.container}>
            {ofertas && <h1>Ofertas</h1>}
            <div className={classes.ofertas}>
                {ofertas ? <OfertaCard ofertas={ofertas} setIdOferta={setIdOferta}  /> : <Loading label='Cargando ofertas' />}
            </div>
        </div>
    )
}
export default Ofertas