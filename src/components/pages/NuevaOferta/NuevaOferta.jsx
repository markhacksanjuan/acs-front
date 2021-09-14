import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './nuevaOferta.style'

import ofertaService from '../../../services/ofertaService'

import { Input,
Button,
Grid} from '@material-ui/core'

const NuevaOferta = () => {
    const classes = useStyles()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            servicio: '',
            puesto: '',
            ubicacion: '',
            titulacion: '',
            tecnologias: '',
            experiencia: '',
            desplazamientos: '',
            idiomas: '',

        }
    })
    const history = useHistory()

    const onSubmit = async data => {
        console.log(data)
        const response = await ofertaService.createOferta(data)
        console.log(response)
        history.push('/ofertas')
    }

    const renderOfertaForm = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller 
                            name='servicio'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Servicio'
                                    required
                                    id='servicio'
                                    fullWidth
                                    disableUnderline={true}
                                    autoFocus
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
                            name='ubicacion'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Ubicación'
                                    required
                                    id='ubicacion'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='tecnologias'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Tecnologías'
                                    required
                                    id='tecnologias'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
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
                            name='experiencia'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Experiencia'
                                    required
                                    id='experiencia'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='desplazamientos'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Desplazamientos'
                                    required
                                    id='desplazamientos'
                                    fullWidth
                                    disableUnderline={true}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller 
                            name='idiomas'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='text'
                                    placeholder='Idiomas'
                                    required
                                    id='idiomas'
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
            <h1>Nueva Oferta</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                {renderOfertaForm()}
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
export default NuevaOferta

