import React, { useEffect, useState } from 'react'
import useStyles from './ofertas.style'

import OfertaCard from '../../OfertaCard/OfertaCard'

import ofertaService from '../../../services/ofertaService'

const Ofertas = props => {
    const classes = useStyles()
    const [ofertas, setOfertas] = useState()

    const getOfertas = async () => {
        const offers = await ofertaService.getAllOfertas()
        setOfertas(offers)
        console.log(offers)
    }

    useEffect(() => {
        getOfertas()
    }, [])
    return(
        <div className={classes.container}>
            <h1>Ofertas</h1>
            <div className={classes.ofertas}>
                {ofertas && <OfertaCard ofertas={ofertas} />}
            </div>
        </div>
    )
}
export default Ofertas