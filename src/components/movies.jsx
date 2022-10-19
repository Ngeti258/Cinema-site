import React, { Component } from 'react'
import ListGroup from './common/listgroup';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreService';
import {paginate} from '../utils/paginate';
import _ from 'lodash'
class Movie extends Component {
   state = { 
      movies:[],
      currentPage:1,
      pageSize:4,
      genres:[],
      sortColumn:{path:'title',order:'asc'}
      };
   componentDidMount(){
      const genres=[{_id:'',name:'All genres'},...getGenres()]
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
   handleSort=sortColumn=>{
      this.setState({sortColumn})
   }
   getPagedData=()=>{
      const{pageSize,currentPage,sortColumn,selectedGenre,movies:allMovies}=this.state
      const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=>m.genre._id === selectedGenre._id):allMovies;
      const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order])
      const movies = paginate(sorted,currentPage,pageSize)
      return {totalCount: filtered.length,data:movies}
   }
   render() {
      const {length:count}=this.state.movies;
      const {pageSize,sortColumn,currentPage}=this.state

      if(count === 0) return <p>There are no movies in the database.</p>
      const {totalCount,data:movies} = this.getPagedData()
      return(
      <div className='row'>
         <div className="col-3">  
            <ListGroup items={this.state.genres} 
            selectedItem={this.state.selectedGenre}
            onItemSelected={this.handleGenreSelect}
         />
      </div>         
      <div className="col">
         <p>There are {totalCount.length} movies in the database</p>
         <MoviesTable
         movies={movies}
         sortColumn={sortColumn}
         onLike={this.handleLike}
         onDelete={this.handleDelete}
         onSort={this.handleSort}      
      />
      
      <Pagination
         itemsCount={totalCount.length}
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