import React, { useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { fetchDataAlquran } from './store/actions/dataAlquran'
import Home from './views/Home.jsx'
import Detail from './views/Detail.jsx'
import NavBar from './views/NavBar.jsx'
import Favorite from './views/Favorite.jsx'
import {
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataAlquran())
  }, [dispatch])

  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
  // }

}