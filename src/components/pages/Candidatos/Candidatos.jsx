import React, { useEffect, useState } from 'react'
import useStyles from './candidatos.style'

import cvService from '../../../services/cvService'

import CVCard from '../../CVCard/CVCard'

const Candidatos = (props) => {
    const classes = useStyles()
    const [cvs, setCvs] = useState()
    const setIdCV = props.setIdCV

    const getCVs = async () => {
        const cvS = await cvService.getCV()
        console.log(cvS)
        setCvs(cvS)
    }

    useEffect(() => {
        getCVs()
    }, [])
    return(
        <div className={classes.container}>
            <h1>Candidatos</h1>
            <div className={classes.candidatos}>
                {cvs && <CVCard cvs={cvs} setIdCV={setIdCV} />}
            </div>
        </div>
    )
}
export default Candidatos