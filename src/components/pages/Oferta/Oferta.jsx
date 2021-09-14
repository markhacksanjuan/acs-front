import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './oferta.style'

import ofertaService from '../../../services/ofertaService'
import { Button,
    Input } from '@material-ui/core'

const Oferta = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const { control, handleSubmit } = useForm({})
    const [oferta, setOferta] = useState()
    const [editOferta, setEditOferta] = useState(false)

    const user = props.user
    let idOferta = props.idOferta
    if(!idOferta){
        const pathnameArr = history.location.pathname.split('/')
        const id = pathnameArr[pathnameArr.length -1]
        idOferta = id
    }

    useEffect(() => {
        getOferta(idOferta)
    },[editOferta])
    const getOferta = async id => {
        const newOferta = await ofertaService.getOneOferta(id)
        setOferta(newOferta)
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
                    <p>Servicio: {oferta.servicio}</p>
                    <p>Titulación: {oferta.titulacion}</p>
                    <p>Experiencia: {oferta.experiencia}</p>
                    <p>Puesto: {oferta.puesto}</p>
                    <p>Ubicación: {oferta.ubicacion}</p>
                    <p>Desplazamientos: {oferta.desplazamientos}</p>
                    <p>Idiomas: {oferta.idiomas}</p>
                    <p>Tecnologías: {oferta.tecnologias}</p>
                </>
            )
        }else {
            return null
        }
    }
    const onSubmitOferta = async (data) => {
        await ofertaService.updateOneOferta(idOferta, data)
        setEditOferta(false)
    }
    const renderOfertaForm = () => {
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar Oferta</h3>
                    <p onClick={onClickEdit} className={classes.edit}>Cancelar</p>
                </div>
                <form onSubmit={handleSubmit(onSubmitOferta)}>
                    
                <p className={classes.label}>SERVICIO</p>
                    <Controller 
                        name='servicio'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Servicio'
                                id='servicio'
                                fullWidth
                                disableUnderline={true}
                                autoFocus
                            />
                        }
                        defaultValue={oferta.servicio}
                    />
                    <p className={classes.label}>TITULACIÓN</p>
                    <Controller 
                        name='titulacion'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Titulación'
                                id='titulacion'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.titulacion}
                    />
                    <p className={classes.label}>EXPERIENCIA</p>
                    <Controller 
                        name='experiencia'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Experiencia'
                                id='experiencia'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.experiencia}
                    />
                    <p className={classes.label}>PUESTO</p>
                    <Controller 
                        name='puesto'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Puesto'
                                id='puesto'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.puesto}
                    />
                    <p className={classes.label}>UBICACIÓN</p>
                    <Controller 
                        name='ubicacion'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Ubicación'
                                id='ubicacion'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.ubicacion}
                    />
                    <p className={classes.label}>DESPLAZAMIENTOS</p>
                    <Controller 
                        name='desplazamientos'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Desplazamientos'
                                id='desplazamientos'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.desplazamientos}
                    />
                    
                    <p className={classes.label}>IDIOMAS</p>
                    <Controller 
                        name='idiomas'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Idiomas'
                                id='idiomas'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.idiomas}
                    />
                    <p className={classes.label}>TECNOLOGÍAS</p>
                    <Controller 
                        name='tecnologias'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                placeholder='Tecnologías'
                                id='tecnologias'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={oferta.tecnologias}
                    />
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                    >Editar Oferta</Button>
                </form>
            </div>
        )
    }

    // ------------- BOTONES ------------
    const onDelete = async (e) => {
        e.preventDefault()
        await ofertaService.deleteOneOferta(idOferta)
        history.push('/ofertas')
    }
    const renderButtons = () => {
        return(
            <div>
                <Button
                    variant='contained'
                    className={classes.deleteBtn}
                    onClick={e => {
                        onDelete(e)
                    }}
                >
                    Eliminar Oferta
                </Button>
            </div>
        )
    }

    // ------------- RETURN DEL COMPONENTE --------------
    return(
        <div className={classes.container}>
            <h1>Oferta</h1>
            {user.role === 'admin' && renderButtons()}
            <div className={classes.card}>
            {editOferta ? renderOfertaForm() : renderOferta()}
            </div>
        </div>
    )
}
export default Oferta   