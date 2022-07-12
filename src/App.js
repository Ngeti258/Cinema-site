
import { Route,Redirect,Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import Rentals from './components/rentals';
import NavBar from './components/navbar';
import './App.css';
import React from 'react';
function App() {
  return (
    <React.Fragment>
    <NavBar/>
   <main className="container">
    <Switch>
    <Route path='/movies/:id' component={MovieForm}/>
    <Route path='/movies' component={Movies}/>
    <Route path='/customers' component={Customers}/>
    <Route path='/rentals' component={Rentals}/>
    <Route path='/notFound' component={NotFound}/>
    <Route path='/moviesforms' component={MovieForm}/>
    <Redirect from='/' exact to ='/movies'/>
    <Redirect to= '/notFound'/>
    </Switch>
   </main>
   </React.Fragment>
  );
}

export default App;
