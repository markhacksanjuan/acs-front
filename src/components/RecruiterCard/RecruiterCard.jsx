import React from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './recruiterCard.style'

const RecruiterCard = ({ recruiters, setIdRecruiter }) => {
    const classes = useStyles()
    const history = useHistory()

    const onClick = (id) => {
        setIdRecruiter(id)
        history.push(`/recruiter/${id}`)
    }

    const renderRecruiters = () => {
        return recruiters.map(user => {
            return(
                <div className={classes.recruiterCard} key={user._id} onClick={() => onClick(user._id)}>
                    <p>Username: {user.username}</p>
                    <p>Role: {user.role}</p>
                </div>
            )
        })
    }

    return(
        <>
            {renderRecruiters()}
        </>
    )
}

export default RecruiterCard