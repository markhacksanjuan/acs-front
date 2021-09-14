import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './oferta.style'

import ofertaService from '../../../services/ofertaService'
import cvService from '../../../services/cvService'

const Oferta = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const { control, handleSubmit } = useForm({})
    const [oferta, setOferta] = useState()
    const [editOferta, setEditOferta] = useState(false)

    let idOferta = props.idOferta
    if(!idOferta){
        const pathnameArr = history.location.pathname.split('/')
        const id = pathnameArr[pathnameArr.length -1]
        idOferta = id
    }

    useEffect(() => {
        getOferta(idOferta)
    },[])
    const getOferta = async id => {
        const newOferta = await ofertaService.getOneOferta(id)
        setOferta(newOferta)
        console.log(newOferta)
    }
    const onClickEdit = () => {
        setEditOferta(!editOferta)
    }

    // --------------- OFERTA -------------
    const renderOferta = () => {
        if(oferta) {
            return(
                <>
                    <div className={classes.head}>
                        <h3>Oferta</h3>
                        <p className={classes.edit} onClick={onClickEdit}>Editar oferta</p>
                    </div>
                    <p>Titulación: {oferta.titulacion}</p>
                    <p>Experiencia: {oferta.experiencia}</p>
                    <p>Puesto: {oferta.puesto}</p>
                    <p>Ubicación: {oferta.ubicacion}</p>
                    <p>Servicio: {oferta.servicio}</p>
                    <p>Idiomas: {oferta.idiomas}</p>
                    <p>Tecnologías: {oferta.tecnologias}</p>
                </>
            )
        }else {
            return null
        }
    }
    const onSubmitOferta = async (data) => {
        console.log(data)
    }
    const renderOfertaForm = () => {

    }

    // ------------- BOTONES ------------
    const onDelete = async (e) => {
        e.preventDefault()
        await ofertaService.deleteOneOferta(idOferta)
        history.push('/ofertas')
    }

    // ------------- RETURN DEL COMPONENTE --------------
    return(
        <div className={classes.container}>
            <h1>Oferta</h1>
            <div className={classes.card}>
            {editOferta ? renderOfertaForm() : renderOferta()}
            </div>
        </div>
    )
}
export default Oferta   