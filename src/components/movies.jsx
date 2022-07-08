import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import 'font-awesome/css/font-awesome.css'
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listgroup';
import _ from 'lodash'
class Movies extends Component {
    state = { 
        movies:[],   
        pageSize:4,
        currentPage:1,
        genres:[],
        sortColumn:{path:'title',order:'asc'}
     } 
     componentDidMount(){
        const genres = [{_id:'', name:'All Genres'},...getGenres()]
        this.setState({movies:getMovies(),genres})
     }
     handleDelete=(movie)=>{
        let movies=this.state.movies.filter(m=>m._id!==movie._id)
        this.setState({movies})
     }
     handleLike=(movie)=>{
       const movies=[...this.state.movies]
       const index=movies.indexOf(movie)
       movies[index]={...movies[index]}
       movies[index].liked = ! movies[index].liked
       this.setState({movies})
     }
     handlePageChange=page=>{
        this.setState({currentPage:page})
     }
     handleGenreSelected=genre=>{
        this.setState({selectedGenre:genre,currentPage:1})
     }   
     handleSort=sortColumn=>{
      this.setState({sortColumn})     
   }
    
    render() { 
        const { length:count }=this.state.movies

        const {pageSize,currentPage,selectedGenre,movies:allMovies,sortColumn}=this.state
        if (count === 0)        
        return <p>there are no movies in the database.</p>

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter
        (m=>m.genre._id === selectedGenre._id):allMovies

        const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order])


        const movies = paginate(sorted,currentPage,pageSize)
        return (           
            <div> 
            <div className="row">
            <div className="col-3 m-2">
            <ListGroup 
            items={this.state.genres} 
            onItemSelected={this.handleGenreSelected} 
            selectedItem={this.state.selectedGenre}           
            />
            </div>
            <div className="col m-2">
            <p>showing {filtered.length} in the site</p>
            <MoviesTable 
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
             />
            <Pagination
             itemsCount={filtered.length}  
             pageSize={pageSize}
             currentPage={currentPage}
             onPageChange={this.handlePageChange}/>
                </div>  
            </div>          

            </div>
        );
    }
}
 
export default Movies;