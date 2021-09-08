import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import useStyles from './user.style'

import userService from '../../../services/userService'

import { Input,
Button } from '@material-ui/core'

const User = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const [recruiter, setRecruiter] = useState()
    const[editRecruiter, setEditRecruiter] = useState(false)
    const { control, handleSubmit } = useForm({})

    let idRecruiter = props.idRecruiter
    if(!idRecruiter){
        const pathnameArr = history.location.pathname.split('/')
        const id = pathnameArr[pathnameArr.length -1]
        idRecruiter = id
    }

    useEffect(() => {
        getRecruiter(idRecruiter)
    }, [])
    const getRecruiter = async id => {
            const newRecruiter = await userService.getOneUser(id)
            console.log(newRecruiter)
            setRecruiter(newRecruiter)
    }
    const onClickEdit = () => {
        setEditRecruiter(!editRecruiter)
    }

    // ----------- RECRUITER --------------
    const renderRecruiter = () => {
        if(recruiter) {
            return(
                <>
                <div className={classes.head}>
                    <h3>Recruiter</h3>
                    <p className={classes.edit} onClick={onClickEdit}>Editar recruiter</p>
                </div>
                <p>Username: {recruiter.username}</p>
                <p>Role: {recruiter.role}</p>
                </>
            )
        }else {
            return null
        }
    }
    const onSubmit = (data) => {

    }
    const renderRecruiterForm = () => {
        return(
            <div className={classes.form}>
                <div className={classes.head}>
                    <h3>Editar recruiter</h3>
                    <p className={classes.edit} onClick={onClickEdit}>Cancelar</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className={classes.label}>USERNAME</p>
                    <Controller 
                        name='username'
                        control={control}
                        render={({ field }) => 
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={recruiter.username}
                    />
                    <p className={classes.label}>ROLE</p>
                    <Controller 
                        name='role'
                        control={control}
                        render={({ field }) =>
                            <Input 
                                {...field}
                                type='text'
                                fullWidth
                                disableUnderline={true}
                            />
                        }
                        defaultValue={recruiter.role}
                    />
                </form>
            </div>
        )
    }

    const onDelete = async (e) => {
        e.preventDefault()
        await userService.deleteUser(idRecruiter)
        history.push('/recruiters')
    }
    const renderButtons = () => {
        return(
            <div>
                <Button
                    variant='contained'
                    className={classes.deleteBtn}
                    onClick={e => onDelete(e)}
                >
                    Eliminar Recruiter
                </Button>
            </div>
        )
    }

    return(
        <div className={classes.container}>
            <h1>Recruiter</h1>
            {renderButtons()}
            <div className={classes.card}>
            {editRecruiter ? renderRecruiterForm() : renderRecruiter()}
            </div>
        </div>
    )
}
export default User