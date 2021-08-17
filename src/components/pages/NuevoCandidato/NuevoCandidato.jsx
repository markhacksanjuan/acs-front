import React, { useEffect, useState } from 'react'
import { useForm, useFormState, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './nuevoCandidato.style'

import cvService from '../../../services/cvService'

import { Alert } from '@material-ui/lab'
import { Input,
Button,
Grid,
Checkbox } from '@material-ui/core'

const NuevoCandidato = () => {
    const classes = useStyles()
    const [foto, setFoto] = useState()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            apellido1: '',
            apellido2: '',
            dni: '',
            email: '',
            sexo: '',
            pais: '',
            provincia: '',
            foto,
            titulacion: '',
            especialidad: '',
            estudiosFinalizados: false,
            ultimoAno: '',
            comentarioEstudio: '',
            nombreEstudio: '',
            centro: '',
            horasEstudio: '',
            desdeEstudio: '',
            hastaEstudio: '',
            comentarioEstudio2: '',
            idioma: '',
            titulo: '',
            nivelConversacion: '',
            nivelEscrito: '',
            nivelComprension: '',
            comentarioIdioma: '',
            empresa: '',
            puesto: '',
            responsabilidades: '',
            descripcion: '',
            desdeExperiencia: '',
            hastaExperiencia: '',
            disponibilidadViajar: false,
            cambioResidencia: false,
            carnetConducir: false,
            comentarioOtros: ''
        }
    })
    const { dirtyFields } = useFormState({ control })
    const history = useHistory()

    useEffect(() => {

    }, [])

    const onSubmit = async data => {
        const newFoto = new FormData()
        newFoto.append('fotografia', foto)
        const response = await cvService.createCV(data, newFoto)
        const responseFoto = await cvService.addFoto(newFoto, response._id)
        history.push('/candidatos')
    }
    const onChangeFoto = e => {
        setFoto(e.target.files[0])
    }

    const renderCandidatoForm = () => {
        return(
            <>
                <Grid container spacing={2}>
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
                                    autoFocus
                                />
                            }
                        />
                    </Grid>
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
                                />
                            }
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='sexo'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Sexo'
                                    required
                                    id='sexo'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='foto'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='file'
                                    inputProps={{
                                        accept: '.jpg'
                                    }}
                                    placeholder='Fotografia'
                                    required
                                    id='fotografia'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeFoto(e)}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderEstudioForm = () => {
        return(
            <>
                <Grid container spacing={2}>
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
                                />
                            }
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
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderEstudio2Form = () => {
        return(
            <>
                <Grid container spacing={2}>
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
                                    required
                                    id='desdeEstudio'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
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
                                    required
                                    id='hastaEstudio'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
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
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderIdiomaForm = () => {
        return(
            <>
                <Grid container spacing={2}>
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
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderExperienciaForm = () => {
        return(
            <>
                <Grid container spacing={2}>
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
                                    required
                                    id='desdeExperiencia'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
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
                                    required
                                    id='hastaExperiencia'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderOtrosForm = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.checkbox}>
                        <Controller 
                            name='disponibilidadViajar'
                            control={control}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='disponibilidadViajar'
                                />
                            }
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
                                />
                            }
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
                                />
                            }
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
                        />
                    </Grid>
                </Grid>
            </>
        )
    }

    return(
        <div className={classes.container}>
            <h1>Nuevo Candidato</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off' >
                {renderCandidatoForm()}
                <h3>Estudios</h3>
                {renderEstudioForm()}
                <h3>Otros estudios</h3>
                {renderEstudio2Form()}
                <h3>Idiomas</h3>
                {renderIdiomaForm()}
                <h3>Experiencia</h3>
                {renderExperienciaForm()}
                <h3>Otros datos</h3>
                {renderOtrosForm()}
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                >Enviar</Button>
            </form>

        </div>
    )
}

export default NuevoCandidato