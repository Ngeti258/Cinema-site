import React, { Component } from 'react'
//import Like from '.common/Like'
import { getMovies } from '../services/fakeMovieService';
class Movie extends Component {
   state = { 
      movies:getMovies()
    };
   handleDelete=movie=>{
      const movies = this.state.movies.filter(m=>m.id !==movie._id);
      this.setState({movies})
   }
   render() {
      const {length:count}=this.state.movies;
      if(count === 0) return <p>There are no movies in the database.</p>
      return <table className="table">
         <thead>
            <tr>
               <th>Title</th>
               <th>Genre</th>
               <th>Stock</th>
               <th>Rate</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {this.state.movies.map(movie=>(
            <tr key={movie._id}>
               <td>{movie.title}</td>
               <td>{movie.genre.name}</td>
               <td>{movie.numberInStock}</td>
               <td>{movie.dailyRentalRate}</td>
               <td>
                  <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
                  </td>              
            </tr>
            ))}
            
         </tbody>
      </table>
   }
}
     
 
export default Movie;