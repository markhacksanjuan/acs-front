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

const App = () => {
  const [idCV, setIdCV] = useState()
  const [idOferta, setIdOferta] = useState()
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
              <Home setUser={setUser} />
            )
          }} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/candidatos' component={() => {
            return(
              <Candidatos setIdCV={setIdCV} />
            )
          }} />
          <Route exact path='/cv/:id' component={() => {
            return(
              <CV idCV={idCV} />
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
          <Route exact path='/oferta/:id' component ={() => {
            return(
              <Oferta idOferta={idOferta} />
            )
          }} />
        </Switch>
      </Router>
      
    </>
  )
}

export default App;

