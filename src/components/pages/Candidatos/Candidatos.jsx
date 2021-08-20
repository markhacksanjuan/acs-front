import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import useStyles from './candidatos.style'

import cvService from '../../../services/cvService'

import CVCard from '../../CVCard/CVCard'

import { Button,
Input,
Grid } from '@material-ui/core'

const Candidatos = (props) => {
    const classes = useStyles()
    const [cvs, setCvs] = useState()
    const [searchName, setSearchName] = useState()
    const [searchResult, setSearchResult] = useState()
    const history = useHistory()
    const { control } = useForm({
        defaultValues: {
            search: searchName
        }
    })
    const setIdCV = props.setIdCV

    const getCVs = async () => {
        const cvS = await cvService.getCV()
        setCvs(cvS)
    }

    useEffect(() => {
        if(!cvs){
            getCVs()
        }
        if(cvs){
            
        }
    }, [searchName, cvs])

    const onDelete = async (e) => {
        const response = await cvService.deleteCsv()
        console.log(response)
        history.push('/dashboard')
    }
    const onChange = (e) => {
        setSearchName(e.target.value)
        const result = cvs.filter(item => {
                const name = item.nombre.toLowerCase()
                return name.includes(searchName)
            })
            console.log(result)
            setSearchResult(result)
    }
    const renderButtons = () => {
        return(
            <Button
            variant='contained'
            className={classes.deleteBtn}
            onClick={(e) => {
                onDelete(e)
            }}
            >
                Delete all from csv
            </Button>
        )
    }
    const renderInput = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller 
                            name='search'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='search'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChange(e)}
                                    placeholder='Búsqueda por nombre'
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
            <h1>Candidatos</h1>
            <form>
                {cvs && renderInput()}
            </form>
            {cvs && renderButtons()}
            <div className={classes.candidatos}>
                {(cvs && !searchResult) && <CVCard cvs={cvs} setIdCV={setIdCV} /> }
                {searchResult && <CVCard cvs={searchResult} setIdCV={setIdCV} />}
            </div>
        </div>
    )
}
export default Candidatos