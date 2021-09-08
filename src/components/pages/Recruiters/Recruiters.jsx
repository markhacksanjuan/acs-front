import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './recruiters.style'
import userService from '../../../services/userService'

import RecruiterCard from '../../RecruiterCard/RecruiterCard'

const Recruiters = ({ setIdRecruiter }) => {
    const classes = useStyles()
    const history = useHistory()
    const [recruiters, setRecruiters] = useState()

    const getRecruiters = async () => {
        const users = await userService.getUsers()
        setRecruiters(users)
    }

    useEffect(() => {
        getRecruiters()
    }, [])

    return(
        <div className={classes.container}>
            <h1>Recruiters</h1>
            <div className={classes.recruiters}>
                {recruiters && <RecruiterCard setIdRecruiter={setIdRecruiter} recruiters={recruiters} />}
            </div>
        </div>
    )
}
export default Recruiters