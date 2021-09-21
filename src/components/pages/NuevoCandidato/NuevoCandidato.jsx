import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './nuevoCandidato.style'

import cvService from '../../../services/cvService'


import { Input,
Button,
Grid,
Checkbox,
Select,
MenuItem } from '@material-ui/core'

const NuevoCandidato = ({ setIdCV }) => {
    const classes = useStyles()
    const [foto, setFoto] = useState()
    const [titulacion, setTitulacion] = useState()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            apellido1: '',
            apellido2: '',
            dni: '',
            email: '',
            telefono: '',
            nacimiento: '',
            sexo: '',
            pais: '',
            provincia: '',
            tecnologias: '',
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
    const history = useHistory()

    // const onChangeTitulacion = (e) => {
    //     setTitulacion(e.target.value)
    // }

    useEffect(() => {

    }, [foto, titulacion])

    const onSubmit = async data => {
        console.log(data)
        try{
            const response = await cvService.createCV(data)
            if(foto){
                const newFoto = new FormData()
                newFoto.append('fotografia', foto)
                await cvService.addFoto(newFoto, response._id)
            }
            setIdCV(response._id)
            history.push(`/cv/${response._id}`)
        }catch(e) {

        }
    }
    const onChangeFoto = e => {
        setFoto(e.target.files[0])
    }

    const renderCandidatoForm = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <p className={classes.label}>DNI</p>
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
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>NOMBRE</p>
                        <Controller 
                            name='nombre'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nombre'
                                    id='nombre'
                                    fullWidth
                                    disableUnderline={true}
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>APELLIDO 1</p>
                        <Controller 
                            name='apellido1'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Primer Apellido'
                                    id='apellido1'
                                    fullWidth
                                    disableUnderline={true}
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>APELLIDO 2</p>
                        <Controller 
                            name='apellido2'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Segundo Apellido'
                                    id='apellido2'
                                    fullWidth
                                    disableUnderline={true}
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>TU CORREO ELECTRÓNICO</p>
                        <Controller 
                            name='email'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='email'
                                    placeholder='Correo Electrónico'
                                    id='email'
                                    fullWidth
                                    disableUnderline={true}
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>TU TELÉFONO</p>
                        <Controller 
                            name='telefono'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Teléfono'
                                    id='telefono'
                                    fullWidth
                                    disableUnderline={true}
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>FECHA DE NACIMIENTO</p>
                        <Controller 
                            name='nacimiento'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='date'
                                    placeholder='Fecha de nacimiento'
                                    id='nacimiento'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>SEXO</p>
                        <Controller 
                            name='sexo'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Sexo'
                                    id='sexo'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>PAÍS</p>
                        <Controller 
                            name='pais'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='País'
                                    id='pais'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>PROVINCIA</p>
                        <Controller 
                            name='provincia'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Provincia'
                                    id='provincia'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>TECNOLOGíAS:</p>
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
                                    inputComponent='textarea'
                                    required
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>FOTOGRAFIA</p>
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
                    <p className={classes.label}>TIPO DE TITULACIÓN</p>
                        <Controller 
                            name='titulacion'
                            control={control}
                            render={({ field }) =>
                                <Select
                                    {...field}
                                    type='text'
                                    placeholder='Titulación'
                                    id='titulacion'
                                    fullWidth
                                    disableUnderline={true}
                                    // native
                                    displayEmpty
                                    // onChange={e => onChangeTitulacion(e)}
                                >
                                    <MenuItem value='Ciclo Formativo de Grado Medio'>Ciclo Formativo de Grado Medio</MenuItem>
                                    <MenuItem value='Ciclo Formativo de Grado Superior'>Ciclo Formativo de Grado Superior</MenuItem>
                                    <MenuItem value='COU/BUP/EGP/Básicos'>COU/BUP/EGP/Básicos</MenuItem>
                                    <MenuItem value='Diplomatura e Ingenierías Técnicas'>Diplomatura e Ingenierías Técnicas</MenuItem>
                                    <MenuItem value='Doctorado'>Doctorado</MenuItem>
                                    <MenuItem value='Licenciaturas e Ingenierías'>Licenciaturas e Ingenierías</MenuItem>
                                    <MenuItem value='Titulación No Homologada'>Titulación No Homologada</MenuItem>
                                    <MenuItem value='Sin Estudios'>Sin Estudios</MenuItem>
                                    <MenuItem value='Técnico Auxiliar FP1'>Técnico Auxiliar FP1</MenuItem>
                                    <MenuItem value='Técnico Especialista FP2'>Técnico Especialista FP2</MenuItem>
                                </Select>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>ESPECIALIDAD</p>
                        <Controller 
                            name='especialidad'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Especialidad'
                                    id='especialidad'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>COMENTARIO:</p>
                        <Controller 
                            name='comentarioEstudio'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Comentario'
                                    id='comentarioEstudio'
                                    fullWidth
                                    disableUnderline={true}
                                    inputComponent='textarea'
                                />
                            }
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                    <p className={classes.label}>ÚLTIMO AÑO CURSADO</p>
                        <Controller 
                            name='ultimoAno'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='date'
                                    placeholder='Ultimo año'
                                    id='ultimoAno'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.checkbox} >
                        <Controller 
                            name='estudiosFinalizados'
                            control={control}
                            className={classes.radio}
                            render={({ field }) =>
                                <Checkbox 
                                    {...field}
                                    id='estudiosFinalizados'
                                />
                                // <RadioGroup>
                                //     <Radio name='estudiosFinalizados' />
                                //     <Radio name='estudiosFinalizados' />
                                // </RadioGroup>
                            }
                        />
                        <div>
                            Estudios finalizados
                        </div>
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
                    <p className={classes.label}>NOMBRE</p>
                        <Controller 
                            name='nombreEstudio'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nombre del estudio'
                                    id='nombreEstudio'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.label}>CENTRO</p>
                        <Controller 
                            name='centro'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Centro'
                                    id='centro'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.label}>FECHA DESDE</p>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.label}>FECHA HASTA</p>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.label}>Nº DE HORAS</p>
                        <Controller 
                            name='horasEstudio'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='number'
                                    placeholder='Horas de estudio'
                                    id='horasEstudio'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.label}>COMENTARIO:</p>
                        <Controller 
                            name='comentarioEstudio2'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Comentario'
                                    id='comentarioEstudio2'
                                    fullWidth
                                    disableUnderline={true}
                                    inputComponent='textarea'
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
                    <p className={classes.label}>IDIOMA</p>
                        <Controller 
                            name='idioma'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Idioma'
                                    id='idioma'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>TÍTULO OFICIAL</p>
                        <Controller 
                            name='titulo'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Titulacion idioma'
                                    id='titulo'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>NIVEL CONVERSACIÓN</p>
                        <Controller 
                            name='nivelConversacion'
                            control={control}
                            render={({ field }) =>
                                <Select
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de conversación'
                                    id='nivelConversacion'
                                    fullWidth
                                    disableUnderline={true}
                                    displayEmpty
                                >
                                    <MenuItem value='Básico'>Básico</MenuItem>
                                    <MenuItem value='Medio'>Medio</MenuItem>
                                    <MenuItem value='Avanzado'>Avanzado</MenuItem>
                                    <MenuItem value='Experto'>Experto</MenuItem>
                                </Select>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>NIVEL ESCRITO</p>
                        <Controller 
                            name='nivelEscrito'
                            control={control}
                            render={({ field }) =>
                                <Select
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de escritura'
                                    id='nivelEscrito'
                                    fullWidth
                                    disableUnderline={true}
                                    displayEmpty
                                >
                                    <MenuItem value='Básico'>Básico</MenuItem>
                                    <MenuItem value='Medio'>Medio</MenuItem>
                                    <MenuItem value='Avanzado'>Avanzado</MenuItem>
                                    <MenuItem value='Experto'>Experto</MenuItem>
                                </Select>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>NIVEL COMPRENSIÓN</p>
                        <Controller 
                            name='nivelComprension'
                            control={control}
                            render={({ field }) =>
                                <Select
                                    {...field}
                                    type='text'
                                    placeholder='Nivel de comprensión'
                                    id='nivelComprension'
                                    fullWidth
                                    disableUnderline={true}
                                    displayEmpty
                                >
                                    <MenuItem value='Básico'>Básico</MenuItem>
                                    <MenuItem value='Medio'>Medio</MenuItem>
                                    <MenuItem value='Avanzado'>Avanzado</MenuItem>
                                    <MenuItem value='Experto'>Experto</MenuItem>
                                </Select>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>COMENTARIO:</p>
                        <Controller 
                            name='comentarioIdioma'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Comentario'
                                    id='comentarioIdioma'
                                    fullWidth
                                    disableUnderline={true}
                                    inputComponent='textarea'
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
                    <p className={classes.label}>EMPRESA</p>
                        <Controller 
                            name='empresa'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Empresa'
                                    id='empresa'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>RESPONSABILIDADES</p>
                        <Controller 
                            name='responsabilidades'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Responsabilidades'
                                    id='responsabilidades'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>DESCRIPCIÓN</p>
                        <Controller 
                            name='descripcion'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Descripción del puesto'
                                    id='descripcion'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>FECHA DESDE</p>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>FECHA HASTA</p>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <p className={classes.label}>DESCRIPCIÓN</p>
                        <Controller 
                            name='descripcion'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Descripción del puesto'
                                    id='descripcion'
                                    fullWidth
                                    disableUnderline={true}
                                    inputComponent='textarea'
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
                    <p className={classes.label}>COMENTARIOS:</p>
                        <Controller 
                            name='comentarioOtros'
                            control={control}
                            render={({ field }) =>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Comentario'
                                    id='comentarioOtros'
                                    fullWidth
                                    disableUnderline={true}
                                    inputComponent='textarea'
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
            <h3>DATOS GENERALES</h3>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off' >
                {renderCandidatoForm()}
                <h3>DATOS DE ESTUDIOS</h3>
                {renderEstudioForm()}
                <h3>OTROS ESTUDIOS</h3>
                {renderEstudio2Form()}
                <h3>DATOS IDIOMAS</h3>
                {renderIdiomaForm()}
                <h3>DATOS EXPERIENCIA</h3>
                {renderExperienciaForm()}
                <h3>DATOS OTROS</h3>
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