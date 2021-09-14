import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, useFormState, Controller } from 'react-hook-form'
import useStyles from './home.style'

import { Input,
Button,
Grid } from '@material-ui/core'

import authService from '../../../services/authService'


const Home = ({ setUser, user }) => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })
    const { dirtyFields } = useFormState({ control })
    const [error, setError] = useState()
    const history = useHistory()
    const classes = useStyles()

    if (user){
        history.push('/dashboard')
    }

    useEffect(() => {

    }, [])

    const onSubmit = async (data, e) => {
        try{
            const response = await authService.login(data)
            console.log(response)
            if(response.user){
                setUser(response.user)
                history.push('/dashboard')
            }
            if(response.errorMessage){
                setError(response.errorMessage)
                setValue('username', '')
                setValue('password', '')
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
                                name='username'
                                control={control}
                                render={({ field }) =>
                                    <Input 
                                        {...field}
                                        type='text'
                                        placeholder='Usuario'
                                        required
                                        id='username'
                                        fullWidth
                                        disableUnderline={true}
                                        autoFocus
                                        className={error && classes.inputError}
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
                                        className={error && classes.inputError}
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
                        disabled={!dirtyFields.username || !dirtyFields.password}
                    >
                        Iniciar sesión
                    </Button>
                </form>
            </>
        )
    }

    return(
        <div className={classes.container}>
            <h1>ACS Informáticos</h1>
           {error && <p className={classes.error}>{error}</p> }
            <div className={classes.card}>
                {renderForm()}
            </div>
        </div>
    )
}
export default Home