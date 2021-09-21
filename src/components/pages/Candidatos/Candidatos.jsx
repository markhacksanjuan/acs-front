import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller, useFormState } from 'react-hook-form'
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
    const [searchTec, setSearchTec] = useState()
    const [searchName, setSearchName] = useState()
    const [searchDni, setSearchDni] = useState()
    const [searchTelefono, setSearchTelefono] = useState()
    const [searchApellido, setSearchApellido] = useState()
    const history = useHistory()
    const { control, setValue } = useForm({
        defaultValues: {
            searchTec,
            searchName,
            searchDni,
            searchTelefono,
            searchApellido
        }
    })
    const { dirtyFields } = useFormState({ control })
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
    }, [searchName, searchTec, searchDni, searchTelefono, searchApellido])

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
    const onClick = () => {
        if(dirtyFields.searchTec){
            setValue('searchTec', '')
            setSearchTec('')
        }else if(dirtyFields.searchName){
            setValue('searchTec', '')
        }
    }
    const renderInputTec = () => {
        return(
            <>
                <Grid container spacing={2} className={classes.search}>
                    <Grid item xs={12}>
                        <Controller 
                            name='searchTec'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='searchTec'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeTec(e)}
                                    placeholder='Búsqueda por Tecnología'
                                    onClick={onClick}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderInputName = () => {
        return(
            <>
                <Grid container spacing={2} className={classes.search}>
                    <Grid item xs={12}>
                        <Controller 
                            name='searchName'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='searchName'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeName(e)}
                                    placeholder='Búsqueda por Nombre'
                                    onClick={onClick}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderInputDni = () => {
        return(
            <>
                <Grid container spacing={2} className={classes.search}>
                    <Grid item xs={12}>
                        <Controller 
                            name='searchDni'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='searchDni'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeDni(e)}
                                    placeholder='Búsqueda por DNI'
                                    onClick={onClick}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderInputTelefono = () => {
        return(
            <>
                <Grid container spacing={2} className={classes.search}>
                    <Grid item xs={12}>
                        <Controller 
                            name='searchTelefono'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='searchTelefono'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeTelefono(e)}
                                    placeholder='Búsqueda por Teléfono'
                                    onClick={onClick}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const renderInputApellido = () => {
        return(
            <>
                <Grid container spacing={2} className={classes.search}>
                    <Grid item xs={12}>
                        <Controller 
                            name='searchApellido'
                            control={control}
                            render={({ field }) => 
                                <Input 
                                    {...field}
                                    type='search'
                                    id='searchApellido'
                                    fullWidth
                                    disableUnderline={true}
                                    onChange={e => onChangeApellido(e)}
                                    placeholder='Búsqueda por Apellido'
                                    onClick={onClick}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    const onChangeTec = (e) => {
        setSearchTec(e.target.value)
    }
    const onChangeName = (e) => {
        setSearchName(e.target.value)
    }
    const onChangeDni = (e) => {
        setSearchDni(e.target.value)
    }
    const onChangeTelefono = (e) => {
        setSearchTelefono(e.target.value)
    }
    const onChangeApellido = (e) => {
        setSearchApellido(e.target.value)
    }
    let filteredCandidatos = cvs
    if(cvs) {
        if(searchTec){
            filteredCandidatos = cvs.filter(cv => {
                // console.log(cv.tecnologias)
                const tecno = cv.tecnologias?.toLowerCase()
                if(!tecno){
                    return null
                }else if(tecno.includes(searchTec)) {
                    return tecno.includes(searchTec)
                }else if(!tecno.includes(searchTec)) {
                    return null
                }
            })
        }else if(searchName){
            filteredCandidatos = cvs.filter(cv => {
                // console.log(cv.tecnologias)
                const nombre = cv.nombre?.toLowerCase()
                if(!nombre){
                    return null
                }else {
                    return nombre.includes(searchName)
                }
            })
        }else if(searchDni) {
            filteredCandidatos = cvs.filter(cv => {
                // console.log(cv.tecnologias)
                const dni = cv.dni?.toLowerCase()
                if(!dni){
                    return null
                }else {
                    return dni.includes(searchDni)
                }
            })
        }else if(searchTelefono) {
            filteredCandidatos = cvs.filter(cv => {
                const telefono = cv.telefono?.toLowerCase()
                if(!telefono){
                    return null
                }else {
                    return telefono.includes(searchTelefono)
                }
            })
        }else if(searchApellido) {
            filteredCandidatos = cvs.filter(cv => {
                const apellido = cv.apellido1?.toLowerCase()
                if(!apellido){
                    return null
                }else {
                    return apellido.includes(searchApellido)
                }
            })
        }
    }
    

    return(
        <div className={classes.container}>
            {cvs && <h1>Candidatos</h1>}
            <form className={classes.form}>
                {cvs && renderInputTec()}
                {cvs && renderInputName()}
                {cvs && renderInputDni()}
                {cvs && renderInputTelefono()}
                {cvs && renderInputApellido()}
            </form>
            {/* {cvs && renderButtons()} */}
            <div className={classes.candidatos}>
                {cvs ? <CVCard cvs={filteredCandidatos.length !== 0 ? filteredCandidatos : null} setIdCV={setIdCV} /> : <Loading label='Cargando candidatos' />}
            </div>

        </div>
    )
}
export default Candidatos