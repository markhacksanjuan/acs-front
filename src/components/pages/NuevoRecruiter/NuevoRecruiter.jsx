import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useStyles from './nuevoRecruiter.style'

import userService from '../../../services/userService'

import { Input,
    Button } from '@material-ui/core'

const NuevoRecruiter = () => {
    const classes = useStyles()
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })
    const history = useHistory()
    const [error, setError] = useState()

    const onSubmit = async data => {
        const response = await userService.createUser(data)
        console.log(response)
        if(response.message){
            history.push('/recruiters')
        }
        if(response.errorMessage){
            setError(response.errorMessage)
            setValue('username', '')
            setValue('password', '')
        }
    }
    const renderRecruiterForm = () => {
        return (
            <>
                <p className={classes.label}>Username</p>
                <Controller 
                    name='username'
                    control={control}
                    render={({ field }) => 
                        <Input 
                        {...field}
                        type='text'
                        placeholder='Username'
                        required
                        fullWidth
                        disableUnderline={true}
                        autoFocus
                        className={error && classes.inputError}
                        />
                    }
                />
                <p className={classes.label}>Contraseña</p>
                <Controller 
                    name='password'
                    control={control}
                    render={({ field }) => 
                        <Input 
                        {...field}
                        type='password'
                        placeholder='Contraseña'
                        required
                        fullWidth
                        disableUnderline={true}
                        className={error && classes.inputError}
                        />
                    }
                />
            </>
        )
    }

    return(
        <div className={classes.container}>
            <h1>Nuevo Recruiter</h1>
            {error && <p className={classes.error}>{error}</p> }
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                {renderRecruiterForm()}
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
export default NuevoRecruiter