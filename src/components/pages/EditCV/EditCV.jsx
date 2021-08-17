import React, { useEffect, useState } from 'react'
import { useForm, useFormState, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './editCV.style'

import cvService from '../../../services/cvService'

import { Alert } from '@material-ui/lab'
import { Input,
Button,
Grid,
Checkbox } from '@material-ui/core'

const EditCV = ({ idCV }) => {
    const classes = useStyles()
    const [cv, setCV] = useState()
    const { control, handleSubmit } = useForm({
    })
    const history = useHistory()

    const getCV = async id => {
        const response = await cvService.getOneCV(id)
        setCV(response)
    }
    // Function transform UTC date to input format
    const getDate = date => {
        const d = new Date(date)
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    }

    useEffect(() => {
        getCV(idCV)
    }, [])

    const onSubmit = async data => {
        console.log(data)
        // history.push(`/cv/${idCV}`)
        history.goBack()
    }

    const renderCandidatoForm = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller 
                            name='nombre'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nombre'
                                    required
                                    id='nombre'
                                    fullWidth
                                    disableUnderline={true}
                                    autoFocus
                                />
                            }
                            defaultValue={cv.nombre}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='apellido1'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Primer Apellido'
                                    required
                                    id='apellido1'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.apellido1}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='apellido2'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Segundo Apellido'
                                    required
                                    id='apellido2'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.apellido2}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='dni'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='DNI'
                                    required
                                    id='dni'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.dni}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='email'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='email'
                                    placeholder='Correo Electrónico'
                                    required
                                    id='email'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='pais'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='País'
                                    required
                                    id='pais'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.pais}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='provincia'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Provincia'
                                    required
                                    id='provincia'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={cv.provincia}
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderEstudioForm = () => {
        return cv.estudios.map(estudio => {
            return(
                <>
                    <Grid container spacing={2} key={estudio._id}>
                        <Grid item xs={12}>
                            <Controller 
                                name='titulacion'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Titulación'
                                        required
                                        id='titulacion'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.titulacion}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='especialidad'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Especialidad'
                                        required
                                        id='especialidad'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.especialidad}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.checkbox}>
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
                    </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='ultimoAno'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='number'
                                        placeholder='Ultimo año'
                                        required
                                        id='ultimoAno'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.ultimoAno}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='comentarioEstudio'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Comentario'
                                        required
                                        id='comentarioEstudio'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.comentarioEstudio}
                            />
                        </Grid>
                    </Grid>
                </>
            )

        })
    }
    const renderEstudio2Form = () => {
        return cv.estudios2.map(estudio => {
            return(
                <>
                    <Grid container spacing={2} key={estudio._id}>
                        <Grid item xs={12}>
                            <Controller 
                                name='nombreEstudio'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Nombre del estudio'
                                        required
                                        id='nombreEstudio'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.nombreEstudio}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='centro'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Centro'
                                        required
                                        id='centro'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.centro}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='horasEstudio'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='number'
                                        placeholder='Horas de estudio'
                                        required
                                        id='horasEstudio'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.horasEstudio}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='desdeEstudio'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='date'
                                        placeholder='Fecha de inicio'
                                        id='desdeEstudio'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={getDate(estudio.desdeEstudio)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='hastaEstudio'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='date'
                                        placeholder='Fecha de finalización'
                                        id='hastaEstudio'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={getDate(estudio.hastaEstudio)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='comentarioEstudio2'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Comentario'
                                        required
                                        id='comentarioEstudio2'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={estudio.comentarioEstudio2}
                            />
                        </Grid>
                    </Grid>
                </>
            )

        })
    }
    const renderIdiomaForm = () => {
        return cv.idiomas.map(idioma => {
          return(
            <>
                <Grid container spacing={2} key={idioma._id}>
                    <Grid item xs={12}>
                        <Controller 
                            name='idioma'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Idioma'
                                    required
                                    id='idioma'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.idioma}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='titulo'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Titulacion idioma'
                                    required
                                    id='titulo'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.titulo}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='nivelConversacion'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de conversación'
                                    required
                                    id='nivelConversacion'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelConversacion}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='nivelEscrito'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de escritura'
                                    required
                                    id='nivelEscrito'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelEscrito}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='nivelComprension'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de comprensión'
                                    required
                                    id='nivelComprension'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.nivelComprension}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='comentarioIdioma'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Comentario'
                                    required
                                    id='comentarioIdioma'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                            defaultValue={idioma.comentarioIdioma}
                        />
                    </Grid>
                </Grid>
            </>
        )  
        })
    }
    const renderExperienciaForm = () => {
        return cv.experiencia.map(exp => {
            return(
                <>
                    <Grid container spacing={2} key={exp._id}>
                        <Grid item xs={12}>
                            <Controller 
                                name='empresa'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Empresa'
                                        required
                                        id='empresa'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={exp.empresa}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='puesto'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Puesto'
                                        required
                                        id='puesto'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={exp.puesto}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='responsabilidades'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Responsabilidades'
                                        required
                                        id='responsabilidades'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={exp.responsabilidades}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='descripcion'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder='Descripción del puesto'
                                        required
                                        id='descripcion'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={exp.descripcion}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='desdeExperiencia'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='date'
                                        placeholder='Inicio del trabajo'
                                        id='desdeExperiencia'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={getDate(exp.desdeExperiencia)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='hastaExperiencia'
                                control={control}
                                render={({ field }) =>
                                    <Input
                                        {...field}
                                        type='date'
                                        placeholder='Fin del trabajo'
                                        id='hastaExperiencia'
                                        fullWidth
                                        disableUnderline={true}
                                    />
                                }
                                defaultValue={getDate(exp.hastaExperiencia)}
                            />
                        </Grid>
                    </Grid>
                </>
            )
        })
    }
    const renderOtrosForm = () => {
        return cv.otrosDatos.map(dato => {
            return(
                <>
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
                </>
            )
        })
    }

    return(
        <div className={classes.container}>
            <h1>Actualizar Candidato</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off' >
                {cv && renderCandidatoForm()}
                <h3>Estudios</h3>
                {cv && renderEstudioForm()}
                <h3>Otros estudios</h3>
                {cv &&renderEstudio2Form()}
                <h3>Idiomas</h3>
                {cv && renderIdiomaForm()}
                <h3>Experiencia</h3>
                {cv && renderExperienciaForm()}
                <h3>Otros datos</h3>
                {cv && renderOtrosForm()}
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                >Editar CV</Button>
            </form>

        </div>
    )
}

export default EditCV