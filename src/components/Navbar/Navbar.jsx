import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import useStyles from './navbar.style'

const Navbar = ({ user, setUser }) => {
    const classes = useStyles()
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        history.push('/')
    }

    if(user) {
        return(
            <div className={classes.navbar}>
                <p>Hola, {user.username}</p>
                <ul className={classes.list}>
                    <li className={classes.item}><Link className={classes.link} to='/dashboard' underline='none'>Dashboard</Link></li>
                    <li className={classes.item} onClick={logOut}>Cerrar sesión</li>
                </ul> 
            </div>
        )
    }else {
        return null
    }


}
export default Navbar
