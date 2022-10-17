import React, { Component } from 'react'
import Like from './common/like';
import ListGroup from './common/listgroup';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreService';
import {paginate} from '../utils/paginate'
class Movie extends Component {
   state = { 
      movies:[],
      currentPage:1,
      pageSize:4,
      genres:[],
      };
   componentDidMount(){
      const genres=[{name:'All genres'},...getGenres()]
      this.setState({movies:getMovies(),genres})

    }
   handleDelete= movie => {
      const movies = this.state.movies.filter(m=>m._id !== movie._id)
      this.setState({movies})
   }
   handleLike = movie => {
      const movies = [...this.state.movies]
      const index=movies.indexOf(movie)
      movies[index]={...movies[index]}
      movies[index].liked = !movies[index].liked
      this.setState({movies})
   }
   handlePageChange=page=>{
      this.setState({currentPage:page});
   }
   handleGenreSelect=genre=>{
      this.setState({selectedGenre:genre,currentPage:1})
   }
   render() {
      const {length:count}=this.state.movies;
      const {pageSize,currentPage,selectedGenre ,movies:allmovies}=this.state
      if(count === 0) return <p>There are no movies in the database.</p>
      const filtered = selectedGenre && selectedGenre._id ? allmovies.filter(m=>m.genre._id === selectedGenre._id):allmovies;
      const movies = paginate(filtered,currentPage,pageSize)
      return(
      <div className='row'>
         <div className="col-3">  
            <ListGroup items={this.state.genres} 
            selectedItem={this.state.selectedGenre}
            onItemSelected={this.handleGenreSelect}
            />
         </div>         
      <div className="col">
      <p>There are {filtered.length} movies in the database</p>
      <table className="table">
         <thead>
            <tr>
               <th>Title</th>
               <th>Genre</th>
               <th>Stock</th>
               <th>Rate</th>
               <th />
               <th />
            </tr>
         </thead>
         <tbody>
            {movies.map(movie=>(
            <tr key={movie._id}>
               <td>{movie.title}</td>
               <td>{movie.genre.name}</td>
               <td>{movie.numberInStock}</td>
               <td>{movie.dailyRentalRate}</td>
               <td>
               <Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/>
               </td>
               <td>
                  <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
               </td>              
            </tr>
            ))}            
         </tbody>
      </table>
      <Pagination
         itemsCount={filtered.length}
         pageSize={pageSize}
         currentPage={currentPage}
         onPageChange={this.handlePageChange}     
      />
      </div>
      </div>
      );
   };
}
     
 
export default Movie;