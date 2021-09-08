import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, user, ...rest }) => {
    return (
    <Route {...rest} render={props => {
        if(user.role !== 'admin'){
            return <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }}
    />
    )
}
export default PrivateRoute