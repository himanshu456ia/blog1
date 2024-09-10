import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Blog from './pages/Blog'
import Home from './pages/Home';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import NewBlog from './pages/NewBlog/NewBlog';

const App = () => (
    <div className='app-container'>
      <Header />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/new' component={NewBlog}/>
      <Route path='/blog/:id' component={Blog}/>
      </Switch>
      <Footer/>
    </div>

);
export default App

