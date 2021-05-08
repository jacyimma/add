import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import Liked from './pages/Liked'
import './index.css'
import Contact from './pages/Contact'
import Category from './components/Category'
import Recipe from './components/Recipe'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
export default function App() {
  return (
 <Router basename='/food'>
    <Header/>
    <main className="content">
       <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/liked' component={Liked}/>
        <Route path='/join' component={Contact}/>
        <Route path='/category/:name' component={Category}/>
        <Route path='/meal/:id' component={Recipe}/>
        <Route component={NotFound}/>
        <Route path='/product' component={Product}/>
       </Switch>
    </main>
    <Footer/>
    </Router>
  )
}

