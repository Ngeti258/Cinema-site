import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import 'font-awesome/css/font-awesome.css'
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listgroup';
class Movies extends Component {
    state = { 
        movies:[],
        pageSize:4,
        currentPage:1,
        genres:[]
     } 
     componentDidMount(){
        this.setState({movies:getMovies(),genres:getGenres() })
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
        this.setState({selectedGenre:genre})
     }     
    
    render() { 
        const { length:count }=this.state.movies
        const {pageSize,currentPage,selectedGenre,movies:allMovies}=this.state
        if (count === 0)
        return <p>there are no movies in the database.</p>
        const filtered = selectedGenre 
        ? allMovies.filter
        (m=>m.genre._id === selectedGenre._id):allMovies
        const movies = paginate(filtered,currentPage,pageSize)
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
            <table className="table">
                <thead>
                    <tr> 
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Stock</td>
                        <td>Rate</td>
                        <td></td>
                        <td/>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>
                    <tr key={movie._id}>
                        <th>{movie.title}</th>
                        <th>{movie.genre.name}</th>
                        <th>{movie.numberInStock}</th>
                        <th>{movie.dailyRentalRate}</th>
                        <th>
                            <Like onClick={()=>this.handleLike(movie)} liked={movie.liked}/>
                        </th>
                        <th><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></th>
                    </tr>)}
                   
                </tbody>
            </table>

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