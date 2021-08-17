import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, useFormState, Controller } from 'react-hook-form'
import useStyles from './home.style'

import { Alert } from '@material-ui/lab'
import { Input,
Button,
Grid } from '@material-ui/core'

import authService from '../../../services/authService'


const Home = () => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const { dirtyFields } = useFormState({ control })
    const [error, setError] = useState()
    const history = useHistory()
    const classes = useStyles()

    useEffect(() => {

    }, [error])

    const onSubmit = async (data, e) => {
        try{
            const user = await authService.login(data)
            console.log(user)
            if(user){
                history.push('/dashboard')
            }
        }catch(e) {
            console.error(e)
        }
    }

    const renderForm = () => {
        return(
            <>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' >
                    <Grid container spacing={2}>
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
                                        autoFocus
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller 
                                name='password'
                                control={control}
                                render={({ field }) => 
                                    <Input 
                                        {...field}
                                        type='password'
                                        placeholder='Contraseña'
                                        required
                                        id='password'
                                        fullWidth
                                        disableUnderline
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        className={classes.submit}
                        disabled={!dirtyFields.email || !dirtyFields.password}
                    >
                        Iniciar sesión
                    </Button>
                </form>
            </>
        )
    }

    return(
        <div className={classes.container}>
            <h1>ACS Technologies</h1>
            <div className={classes.card}>
                {renderForm()}
            </div>
        </div>
    )
}
export default Home