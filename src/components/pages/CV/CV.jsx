import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import useStyles from './cv.style'
import SwipeableViews from 'react-swipeable-views'

import cvService from '../../../services/cvService'
import candidatoService from '../../../services/candidatoService'
import estudioService from '../../../services/estudioService'
import otrosEstudiosService from '../../../services/otrosEstudiosService'
import expService from '../../../services/expService'
import idiomasService from '../../../services/idiomasService'
import otrosDatosService from '../../../services/otrosDatosService'

import { useTheme } from '@material-ui/core/styles'
import { Button,
Typography,
Box,
AppBar,
Tabs,
Tab, 
Input,
Checkbox,
Grid} from '@material-ui/core'

const CV = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const theme = useTheme()
    const [value, setValue] = useState(0)
    const { control, handleSubmit } = useForm({})
    const [candidato, setCandidato] = useState()
    const [editInfo, setEditInfo] = useState(false)
    const [editEstudios, setEditEstudios] = useState(false)
    const [editOtrosEstudios, setEditOtrosEstudios] = useState(false)
    const [editExp, setEditExp] = useState(false)
    const [editIdiomas, setEditIdiomas] = useState(false)
    const [editOtrosDatos, setEditOtrosDatos] = useState(false)

    let idCV = props.idCV
    if(!idCV){
        const pathnameArr = history.location.pathname.split('/')
        const id = pathnameArr[pathnameArr.length - 1]
        idCV = id
    }

    useEffect(() => {
        getCV(idCV)
    }, [editInfo, editEstudios, editOtrosEstudios,
    editExp, editIdiomas, editOtrosDatos])

    const getCV = async id => {
        const newCv = await cvService.getOneCV(id)
        console.log(newCv)
        setCandidato(newCv)
    }
    const getDate = date => {
            const d = new Date(date)
            return(
                <>
                <span>{d.getDate()}-</span><span>{d.getMonth() + 1}-</span><span>{d.getFullYear()}</span>
                </>
            )
    }
    const getDateForm = date => {
        const d = new Date(date)
        let day = d.getDate()
        let month = d.getMonth()
        if(day.toString().length < 2) {
            day = `0${day}`
        }
        if(month.toString().length < 2) {
            month = `0${month + 1}`
        }
        return `${d.getFullYear()}-${month}-${day}`
    }
    const onChange = (e, newValue) => {
        setValue(newValue)
    }
    const onChangeIndex = (index) => {
        setValue(index)
    }
    const TabPanel = props => {
        const { children, value, index, ...other } = props
        return(
            <Typography 
                component='div'
                role='tabpanel'
                hidden={value !== index}
                id={`action-tabpanel-${index}`}
                aria-labelledby={`action-tab-${index}`}
                {...other}
            >
                {value === index && <Box>{children}</Box>}
            </Typography>
        )
    }

    const onClickEdit = (edit) => {
        switch(edit) {
            case 'info':
                return setEditInfo(!editInfo);
            case 'estudios':
                return setEditEstudios(!editEstudios);
            case 'otrosEstudios':
                return setEditOtrosEstudios(!editOtrosEstudios)
            case 'exp':
                return setEditExp(!editExp)
            case 'idiomas':
                return setEditIdiomas(!editIdiomas)
            case 'otrosDatos':
                return setEditOtrosDatos(!editOtrosDatos)
            default: 
                return null
        }
    }

    // --------- INFORMACION CANDIDATO -----------
    const onSubmitInfo = async (data) => {
        const response = await candidatoService.updateCandidato(idCV, data)
        console.log(response)
        setEditInfo(false)
    }
    const renderCandidatoForm = () => {
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar información</h3>
                    <p onClick={() => onClickEdit('info')} className={classes.edit}>Cancelar</p>
                </div>
                <form onSubmit={handleSubmit(onSubmitInfo)} >
                    <Controller 
                        name='nombre'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.nombre}
                    />
                    <Controller 
                        name='apellido1'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.apellido1}
                    />
                    <Controller 
                        name='apellido2'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.apellido2}
                    />
                    <Controller 
                        name='dni'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.dni}
                    />
                    <Controller 
                        name='email'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.email}
                    />
                    <Controller 
                        name='pais'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.pais}
                    />
                    <Controller 
                        name='provincia'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.provincia}
                    />
                    <Controller 
                        name='sexo'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={candidato.sexo}
                    />
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                    >Editar Información</Button>
                </form>

            </div>
        )
    }
    const renderCandidato = () => {
        if(candidato){
            return (
                <>
                    <div className={classes.head}>
                        <h3>Información</h3>
                        <p className={classes.edit} onClick={() => onClickEdit('info')}>Editar información</p>
                    </div>
                    <p>Nombre: {candidato.nombre}</p>
                    <p>Primer Apellido: {candidato.apellido1}</p>
                    <p>Segundo Apellido: {candidato.apellido2}</p>
                    <p>DNI: {candidato.dni}</p>
                    <p>E-mail: {candidato.email}</p>
                    <p>País: {candidato.pais}</p>
                    <p>Provincia: {candidato.provincia}</p>
                    <p>Sexo: {candidato.sexo}</p>
                </>
            )
        }else {
            return null
        }
        
    }

    //----------------- ESTUDIO ---------------------
    const onSubmitEstudio = async (data, id) => {
        const response = await estudioService.updateEstudio(id, data)
        console.log(response)
        setEditEstudios(false)
    }
    const renderEstudiosForm = () => {
        const estudios = () => {
            return candidato.estudios.map(estudio => {
                return(
                    <form key={estudio._id} onSubmit={handleSubmit((data) => onSubmitEstudio(data, estudio._id))} >
                        <Controller 
                            name='titulacion'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.titulacion}
                        />
                        <Controller 
                            name='especialidad'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.especialidad}
                        />
                        <Controller 
                            name='estudiosFinalizados'
                            control={control}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='estudiosFinalizados'
                                    checked={estudio.estudiosFinalizados}
                                />
                            }
                            defaultValue={estudio.estudiosFinalizados}
                        />
                        <div>
                            Estudios finalizados
                        </div>
                        <Controller 
                            name='ultimoAno'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.ultimoAno}
                        />
                        <Controller 
                            name='comentarioEstudio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.comentarioEstudio}
                        />
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        >Editar Estudio</Button>
                    </form>
                )
        } )}
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar estudios</h3>
                    <p onClick={() => onClickEdit('estudios')} className={classes.edit}>Cancelar</p>
                </div>
                {estudios()}
            </div>
        )
    }
    const renderEstudios = () => {
        const estudios = () => {
            return candidato.estudios.map(estudio => {
                return(
                    <div key={estudio._id}>
                        <p>Titulación: {estudio.titulacion}</p>
                        <p>Especialidad: {estudio.especialidad}</p>
                        <p>Estudios Finalizados: {estudio.estudiosFinalizados ? <span>Sí</span> : <span>No</span>}</p>
                        <p>Último año: {estudio.ultimoAno}</p>
                        <p>Comentario: {estudio.comentarioEstudio}</p>
                    </div>
                )
            })
        }
        return(
            <>
                <div className={classes.head}>
                    <h3>Estudios</h3>
                    <p className={classes.edit} onClick={() => onClickEdit('estudios')}>Editar estudios</p>
                </div>
                {candidato && estudios()}
            </>
        )
    }

    // ------------- OTROS ESTUDIOS --------------
    const onSubmitEstudio2 = async (data, id) => {
        const response = await otrosEstudiosService.updateOtrosEstudios(id, data)
        console.log(response)
        setEditOtrosEstudios(false)
    }
    const renderEstudio2Form = () => {
        const estudios = () => {
            return candidato.estudios2.map(estudio => {
                return(
                    <form key={estudio._id} onSubmit={handleSubmit((data) => onSubmitEstudio2(data, estudio._id))} >
                        <Controller 
                            name='nombreEstudio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.nombreEstudio}
                        />
                        <Controller 
                            name='centro'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.centro}
                        />
                        <Controller 
                            name='horasEstudio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='number'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.horasEstudio}
                        />
                        <Controller 
                            name='desdeEstudio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='date'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={getDateForm(estudio.desdeEstudio)}
                        />
                        <Controller 
                            name='hastaEstudio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='date'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={getDateForm(estudio.hastaEstudio)}
                        />
                        <Controller 
                            name='comentarioEstudio2'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={estudio.comentarioEstudio2}
                        />
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        >Editar Estudio</Button>
                    </form>
                )
        } )}
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar estudios</h3>
                    <p onClick={() => onClickEdit('otrosEstudios')} className={classes.edit}>Cancelar</p>
                </div>
                {estudios()}
            </div>
        )
    }
    const renderEstudios2 = () => {
        const estudios = () => {
            return candidato.estudios2.map(estudio => {
                return(
                    <div key={estudio._id}>
                        <p>Nombre: {estudio.nombreEstudio}</p>
                        <p>Centro: {estudio.centro}</p>
                        <p>Fecha de inicio: {getDate(estudio.desdeEstudio)}</p>
                        <p>Fecha de finalización: {getDate(estudio.hastaEstudio)}</p>
                        <p>Horas totales: {estudio.horasEstudio}</p>
                        <p>Comentario: {estudio.comentarioEstudio2}</p>
                    </div>
                )
            })
        }
        return(
            <>
                <div className={classes.head}>
                    <h3>Otros Estudios</h3>
                    <p onClick={() => onClickEdit('otrosEstudios')} className={classes.edit}>Editar estudios</p>
                </div>
                {candidato && estudios()}
            </>
        )
    }
    
    // ---------------- EXPERIENCIA -----------------------
    const onSubmitExp = async (data, id) => {
        const response = await expService.updateExp(id, data)
        console.log(response)
        setEditExp(false)
    }
    const renderExpForm = () => {
        const estudios = () => {
            return candidato.experiencia.map(exp => {
                return(
                    <form key={exp._id} onSubmit={handleSubmit((data) => onSubmitExp(data, exp._id))} >
                        <Controller 
                            name='empresa'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={exp.empresa}
                        />
                        <Controller 
                            name='puesto'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={exp.puesto}
                        />
                        <Controller 
                            name='responsabilidades'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={exp.responsabilidades}
                        />
                        <Controller 
                            name='descripcion'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={exp.descripcion}
                        />
                        <Controller 
                            name='desdeExperiencia'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='date'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={getDateForm(exp.desdeExperiencia)}
                        />
                        <Controller 
                            name='hastaExperiencia'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='date'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={getDateForm(exp.hastaExperiencia)}
                        />
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        >Editar Estudio</Button>
                    </form>
                )
        } )}
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar experiencia</h3>
                    <p onClick={() => onClickEdit('exp')} className={classes.edit}>Cancelar</p>
                </div>
                {candidato && estudios()}
            </div>
        )
    }
    const renderExperiencia = () => {
        const experiencia = () => {
            return candidato.experiencia.map(exp => {
                return(
                    <div key={exp._id}>
                        <p>Empresa: {exp.empresa}</p>
                        <p>Puesto: {exp.puesto}</p>
                        <p>Descripción: {exp.descripcion}</p>
                        <p>Responsabilidades: {exp.responsabilidades}</p>
                        <p>Fecha de inicio: {getDate(exp.desdeExperiencia)}</p>
                        <p>Fecha de finalización: {getDate(exp.hastaExperiencia)}</p>
                    </div>
                )
            })
        }
        return(
            <>
                <div className={classes.head}>
                    <h3>Experiencia</h3>
                    <p onClick={() => onClickEdit('exp')} className={classes.edit}>Editar experiencia</p>
                </div>
                {candidato && experiencia()}
            </>
        )
    }

    // ------------------ IDIOMAS -----------------------
    const onSubmitIdioma = async (data, id) => {
        const response = await idiomasService.updateIdiomas(id, data)
        console.log(response)
        setEditIdiomas(false)
    }
    const renderIdiomaForm = () => {
        const estudios = () => {
            return candidato.idiomas.map(idioma => {
                return(
                    <form key={idioma._id} onSubmit={handleSubmit((data) => onSubmitIdioma(data, idioma._id))} >
                        <Controller 
                            name='idioma'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.idioma}
                        />
                        <Controller 
                            name='titulo'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.titulo}
                        />
                        <Controller 
                            name='nivelConversacion'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelConversacion}
                        />
                        <Controller 
                            name='nivelEscrito'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelEscrito}
                        />
                        <Controller 
                            name='nivelComprension'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelComprension}
                        />
                        <Controller 
                            name='comentarioIdioma'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.comentarioIdioma}
                        />
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        >Editar Estudio</Button>
                    </form>
                )
        } )}
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar Idioma</h3>
                    <p onClick={() => onClickEdit('idiomas')} className={classes.edit}>Cancelar</p>
                </div>
                {candidato && estudios()}
            </div>
        )
    }
    const renderIdiomas = () => {
        const idiomas = () => {
            return candidato.idiomas.map(idioma => {
                return(
                    <div key={idioma._id}>
                        <p>Idioma: {idioma.idioma}</p>
                        <p>Título: {idioma.titulo}</p>
                        <p>Nivel de comprensión: {idioma.nivelComprension}</p>
                        <p>Nivel de conversación: {idioma.nivelConversacion}</p>
                        <p>Nivel escrito: {idioma.nivelEscrito}</p>
                        <p>Comentario: {idioma.comentarioIdioma}</p>
                    </div>
                )
            })
        }
        return(
            <>
                <div className={classes.head}>
                    <h3>Idiomas</h3>
                    <p onClick={() => onClickEdit('idiomas')} className={classes.edit}>Editar idioma</p>
                </div>
                {candidato && idiomas()}
            </>
        )
    }

    // ----------------- OTROS DATOS ---------------------
    const onSubmitOtrosDatos = async (data, id) => {
        const response = await otrosDatosService.updateOtrosDatos(id, data)
        console.log(response)
        setEditOtrosDatos(false)
    }
    const renderOtrosDatosForm = () => {
        const estudios = () => {
            return candidato.otrosDatos.map(dato => {
                return(
                    <form key={dato._id} onSubmit={handleSubmit((data) => onSubmitOtrosDatos(data, dato._id))} >
                        <Grid container spacing={2} key={dato._id}>
                    <Grid item xs={12} className={classes.checkbox}>
                        <Controller 
                            name='disponibilidadViajar'
                            control={control}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='disponibilidadViajar'
                                    checked={dato.disponibilidadViajar}
                                />
                            }
                            defaultValue={dato.disponibilidadViajar}
                        />
                        <div>
                            Disponibilidad para viajar
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.checkbox}>
                        <Controller 
                            name='cambioResidencia'
                            control={control}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='cambioResidencia'
                                    checked={dato.cambioResidencia}
                                />
                            }
                            defaultValue={dato.cambioResidencia}
                        />
                        <div>
                            Disponibilidad para cambiar de residencia
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.checkbox}>
                        <Controller 
                            name='carnetConducir'
                            control={control}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='carnetConducir'
                                    checked={dato.carnetConducir}
                                />
                            }
                            defaultValue={dato.carnetConducir}
                        />
                        <div>
                            Dispone de carnet de conducir
                        </div>
                    </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='comentarioOtros'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Comentario'
                                        required
                                        id='comentarioOtros'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={dato.comentarioOtros}
                            />
                        </Grid>
                    </Grid>
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        >Editar Estudio</Button>
                    </form>
                )
        } )}
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar Otros Datos</h3>
                    <p onClick={() => onClickEdit('otrosDatos')} className={classes.edit}>Cancelar</p>
                </div>
                {candidato && estudios()}
            </div>
        )
    }
    const renderOtros = () => {
        const otros = () => {
            return candidato.otrosDatos.map(otros => {
                return(
                    <div key={otros._id}>
                        <p>Carnet de Conducir: {otros.carnetConducir ? <span>Sí</span> : <span>No</span>}</p>
                        <p>Disponibilidad de cambio de residencia: {otros.cambioResidencia ? <span>Sí</span> : <span>No</span>}</p>
                        <p>Disponibilidad para viajar: {otros.disponibilidadViajar ? <span>Sí</span> : <span>No</span>}</p>
                        <p>Comentario: {otros.comentarioOtros}</p>
                    </div>
                )
            })
        }
        return(
            <>
                <div className={classes.head}>
                    <h3>Otros Datos</h3>
                    <p onClick={() => onClickEdit('otrosDatos')} className={classes.edit}>Editar Datos</p>
                </div>
                {candidato && otros()}
            </>
        )
    }


    // ------------- BOTONES ------------
    const onEdit = () => {
        history.push('/editCV')
    }
    const onDelete = async (e) => {
        e.preventDefault()
        await cvService.deleteCV(idCV)
        history.push('/candidatos')
    }
    const renderButtons = () => {
        return(
            <div className={classes.containerBtn}>
                {/* <Button
                    variant='contained'
                    className={classes.editBtn}
                    onClick={onEdit}
                >Editar Candidato
                </Button> */}
                <Button
                    variant='contained'
                    className={classes.deleteBtn}
                    onClick={(e) => {
                        onDelete(e)
                    }}
                >
                    Eliminar Candidato
                </Button>
            </div>
        )
    }

    // ---------------- RETURN DEL COMPONENTE ---------------
    return(
        <div className={classes.container}>
            {candidato && <h1>CV de {candidato.nombre}</h1>}
            {renderButtons()}
            <div className={classes.card}>
                <AppBar position='static' color='default'>
                    <Tabs
                        value={value}
                        onChange={onChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='scrollable'
                        aria-label='action tabs example'
                    >
                        <Tab label='Información' />
                        <Tab label='Estudio' />
                        <Tab label='Otros Estudios' />
                        <Tab label='Experiencia' />
                        <Tab label='Idiomas' />
                        <Tab label='Otros Datos' />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={onChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                {editInfo ? renderCandidatoForm() : renderCandidato()}
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                {editEstudios ? renderEstudiosForm() : renderEstudios()}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                {editOtrosEstudios ? renderEstudio2Form() : renderEstudios2()}
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                {editExp ? renderExpForm() : renderExperiencia()}
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                {editIdiomas ? renderIdiomaForm() : renderIdiomas()}
                    </TabPanel>
                    <TabPanel value={value} index={5} dir={theme.direction}>
                {editOtrosDatos ? renderOtrosDatosForm() : renderOtros()}
                    </TabPanel>

                </SwipeableViews>
            </div>
        </div>
    )

}

export default CV