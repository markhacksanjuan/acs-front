import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import useStyles from './candidatos.style'

import cvService from '../../../services/cvService'

import CVCard from '../../CVCard/CVCard'
import Loading from '../../Loading/Loading'

import { Button,
Input,
Grid } from '@material-ui/core'
// import { Chip } from '@material-ui/core'

const Candidatos = (props) => {
    const classes = useStyles()
    // const tecnologias = ['Javascript', 'React']
    const [cvs, setCvs] = useState()
    const [searchName, setSearchName] = useState()
    const history = useHistory()
    const { control } = useForm({
        defaultValues: {
            search: searchName
        }
    })
    const setIdCV = props.setIdCV
    // const [chipData, setChipData] = useState([
    //     { key: 0, label: 'Javascript'}
    // ])

    const getCVs = async () => {
        const cvS = await cvService.getCV()
        setCvs(cvS)
    }

    useEffect(() => {
        getCVs()
    }, [])

    // const renderChips = () => {
    //     return chipData.map(data => {
    //         return(
    //             <li key={data.key}>
    //                 <Chip 
    //                 label={data.label} 
    //                 onDelete={handleDelete(data)}
    //                 />
    //             </li>
    //         )
    //     })
    // }
    // const handleDelete = (chipToDelete) => () => {
    //     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    //   };

    // const onDelete = async (e) => {
    //     const response = await cvService.deleteCsv()
    //     console.log(response)
    //     history.push('/dashboard')
    // }
    // const renderButtons = () => {
    //     return(
    //         <Button
    //         variant='contained'
    //         className={classes.deleteBtn}
    //         onClick={(e) => {
    //             onDelete(e)
    //         }}
    //         >
    //             Delete all from csv
    //         </Button>
    //     )
    // }
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
                                    placeholder='Búsqueda por Tecnología'
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const onChange = (e) => {
        setSearchName(e.target.value)
    }
    let filteredCandidatos 
    if(cvs) {
        filteredCandidatos = cvs.filter(cv => {
            // console.log(cv.tecnologias)
            const tecno = cv.tecnologias?.toLowerCase()
            if(!tecno){
                return null
            }else {
                return tecno.includes(searchName)
            }
        })
    }
    

    return(
        <div className={classes.container}>
            {cvs && <h1>Candidatos</h1>}
            <form>
                {cvs && renderInput()}
            </form>
            {/* {cvs && renderButtons()} */}
            <div className={classes.candidatos}>
                {cvs ? <CVCard cvs={filteredCandidatos.length !== 0 ? filteredCandidatos : cvs} setIdCV={setIdCV} /> : <Loading label='Cargando candidatos' />}
            </div>

        </div>
    )
}
export default Candidatos