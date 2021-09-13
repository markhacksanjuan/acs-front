import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/pages/Dashboard/Dashboard'
import Home from './components/pages/Home/Home'
import Candidatos from './components/pages/Candidatos/Candidatos'
import CV from './components/pages/CV/CV'
import NuevoCandidato from './components/pages/NuevoCandidato/NuevoCandidato'
import EditCV from './components/pages/EditCV/EditCV'
import NuevaOferta from './components/pages/NuevaOferta/NuevaOferta'
import Ofertas from './components/pages/Ofertas/Ofertas'
import AddCsv from './components/pages/AddCsv/AddCsv'
import Oferta from './components/pages/Oferta/Oferta'
import Recruiters from './components/pages/Recruiters/Recruiters'
import User from './components/pages/User/User'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import NuevoRecruiter from './components/pages/NuevoRecruiter/NuevoRecruiter'
import NuevaOfertaCsv from './components/pages/NuevaOfertaCsv/NuevaOfertaCsv'

const App = () => {
  const [idCV, setIdCV] = useState()
  const [idOferta, setIdOferta] = useState()
  const [idRecruiter, setIdRecruiter] = useState()
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState()

  const getUserLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoggedIn(user)
      setUser(user)
    }
  }

  useEffect(() => {
    getUserLoggedIn()
  }, [])

  return (
    <>
      <Router>
      <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path='/' component={() => {
            return(
              <Home setUser={setUser} user={user} />
            )
          }} />
          <Route exact path='/dashboard' component={() => {
            return(
              <Dashboard user={user} />
            )
          }} />
          <Route exact path='/candidatos' component={() => {
            return(
              <Candidatos setIdCV={setIdCV} user={user} />
            )
          }} />
          <Route exact path='/cv/:id' component={() => {
            return(
              <CV idCV={idCV} user={user} />
            )
          }} />
          <Route exact path='/newCV' component={NuevoCandidato} />
          <Route exact path='/addCsv' component={AddCsv} />
          <Route exact path='/editCV' component={() => {
            return(
              <EditCV idCV={idCV} />
            )
          }} />
          <Route exact path='/newOferta' component={NuevaOferta} />
          <Route exact path='/ofertas' component={() => {
            return(
              <Ofertas setIdOferta={setIdOferta} />
            )
            }} />
          <Route exact path='/oferta/:id' component={() => {
            return(
              <Oferta idOferta={idOferta} />
            )
          }} />
          <Route exact path='/newOfertaCsv' component={() => {
            return(
              <NuevaOfertaCsv />
            )
          }} />
          <PrivateRoute exact path='/recruiters' user={user} component={() => {
            return(
              <Recruiters setIdRecruiter={setIdRecruiter} />
            )
          }} />
          <PrivateRoute exact path='/recruiter/:id' user={user} component={() => {
            return(
              <User idRecruiter={idRecruiter} />
            )
          }} />
          <PrivateRoute exact path='/newRecruiter' user={user} component={() => {
            return(
              <NuevoRecruiter />
            )
          }}
          />
        </Switch>
      </Router>
      
    </>
  )
}

export default App;

