import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import ofertaService from '../../../services/ofertaService'
import useStyles from './nuevaOfertaCsv.style'

import { Input,
Button,
Grid } from '@material-ui/core'

const NuevaOfertaCsv = () => {
    const classes = useStyles()
    const [csv, setCsv] = useState()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            csv
        }
    })
    const history = useHistory()

    useEffect(() => {

    }, [])

    const onSubmit = async data => {
        const newData = new FormData()
        newData.append('csv', csv)
        await ofertaService.addCsv(newData)
        history.push('/ofertas')
    }
    const onChangeCsv = e => {
        setCsv(e.target.files[0])
    }

    const renderFormCsv = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller 
                            name='csv'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='file'
                                    inputProps={{
                                        accept: '.csv'
                                    }}
                                    required
                                    id='csv'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeCsv(e)}
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
            <h1>Insertar CSV</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                {renderFormCsv()}
                <Button 
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                >
                    Añadir CSV
                </Button>
            </form>
        </div>
    )
}
export default NuevaOfertaCsv