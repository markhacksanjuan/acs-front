import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import useStyles from './navbar.style'

const Navbar = () => {
    const classes = useStyles()

    return(
        <div>
        <ul className={classes.list}>
            <li><Link className={classes.link} to='/dashboard'>Dashboard</Link></li>
        </ul> 
        </div>
    )
}
export default Navbar
