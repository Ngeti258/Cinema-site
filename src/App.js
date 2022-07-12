import './App.css';
import { Route } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import Rentals from './components/rentals';
function App() {
  return (
   <main className="container">
    <Route path='/movies' component={Movies}></Route>
    <Route path='/customers' component={Customers}></Route>
    <Route path='/rentals' component={Rentals}></Route>
    <Route path='/not-found' component={NotFound}></Route>
    <Route path='/moviesforms' component={MovieForm}></Route>



   </main>
  );
}

export default App;
