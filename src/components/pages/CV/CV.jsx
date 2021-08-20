import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './cv.style'
import SwipeableViews from 'react-swipeable-views'

import cvService from '../../../services/cvService'

import { useTheme } from '@material-ui/core/styles'
import { Button,
Typography,
Box,
AppBar,
Tabs,
Tab, 
ThemeProvider} from '@material-ui/core'

const CV = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const theme = useTheme()
    const [value, setValue] = useState(0)

    const [candidato, setCandidato] = useState()

    const idCV = props.idCV

    const getCV = async id => {
        const newCv = await cvService.getOneCV(id)
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

    const renderCandidato = () => {
        return(
            <>
                <h3>Información</h3>
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
                <h3>Estudios</h3>
                {estudios()}
            </>
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
                <h3>Otros Estudios</h3>
                {estudios()}
            </>
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
                <h3>Experiencia</h3>
                {experiencia()}
            </>
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
                <h3>Idiomas</h3>
                {idiomas()}
            </>
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
                <h3>Otros Datos</h3>
                {otros()}
            </>
        )
    }

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
                <Button
                    variant='contained'
                    className={classes.editBtn}
                    onClick={onEdit}
                >Editar Candidato
                </Button>
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

    useEffect(() => {
        getCV(idCV)
    }, [])

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
                        variant='fullWidth'
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
                {candidato && renderCandidato()}
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                {candidato && renderEstudios()}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                {candidato && renderEstudios2()}
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                {candidato && renderExperiencia()}
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                {candidato && renderIdiomas()}
                    </TabPanel>
                    <TabPanel value={value} index={5} dir={theme.direction}>
                {candidato && renderOtros()}
                    </TabPanel>

                </SwipeableViews>
            </div>
        </div>
    )

}

export default CV