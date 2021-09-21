import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './dashboard.style'

import Loading from '../../Loading/Loading'

import { Button } from '@material-ui/core'

const Dashboard = ({ user }) => {
    const classes = useStyles()
    const history = useHistory()


    useEffect(() => {
    }, [])

    const renderButtonCandidato = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/candidatos')}
                >
                    Ver Candidatos
                </Button>
            </>
        )
    }
    const renderButtonNewCandidato = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/newCV')}
                >
                    Añadir nuevo Candidato
                </Button>
            </>
        )
    }
    // const renderButtonCandidatoCsv = () => {
    //     return(
    //         <>
    //             <Button
    //                 type='submit'
    //                 fullWidth
    //                 variant='contained'
    //                 className={classes.submit}
    //                 onClick={() => history.push('/newOfertaCsv')}
    //             >
    //                 Añadir Candidatos CSV
    //             </Button>
    //         </>
    //     )
    // }
    const renderButtonOferta = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/ofertas')}
                >
                    Ver Ofertas
                </Button>
            </>
        )
    }
    const renderButtonNewOferta = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/newOferta')}
                >
                    Añadir nueva Oferta
                </Button>
            </>
        )
    }
    const renderButtonOfertasCsv = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/newOfertaCsv')}
                >
                    Añadir Ofertas desde archivo
                </Button>
            </>
        )
    }
    const renderButtonRecruiter = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/recruiters')}
                >
                    Ver Recruiters
                </Button>
            </>
        )
    }
    const renderButtonNewRecruiter = () => {
        return(
            <>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    onClick={() => history.push('/newRecruiter')}
                >
                    Añadir nuevo Recruiter
                </Button>
            </>
        )
    }
    const renderComponent = () => {
        return(
            <>
                <h1>ACS Informáticos</h1>
                <div className={classes.containerCards}>
                    <div className={classes.card}>
                        <h3>Candidatos</h3>
                        {renderButtonCandidato()}
                        {renderButtonNewCandidato()}
                        {/* {renderButtonCandidatoCsv()} */}
                    </div>
                    <div className={classes.card}>
                        <h3>Ofertas</h3>
                        {renderButtonOferta()}
                        {renderButtonNewOferta()}
                        {renderButtonOfertasCsv()}
                    </div>
                    {user.role === 'admin' && <div className={classes.card}>
                        <h3>Recruiters</h3>
                        {renderButtonRecruiter()}
                        {renderButtonNewRecruiter()}
                    </div>}
                </div>
            </>
        )
    }
    return(
        <div className={classes.container}>
            {user ? renderComponent() : <Loading label='Cargando dashboard' />}
        </div>
    )
}
export default Dashboard