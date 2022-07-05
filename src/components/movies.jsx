import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import 'font-awesome/css/font-awesome.css'
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'


class Movies extends Component {
    state = { 
        movies:getMovies(),
        pageSize:4,
        currentPage:1
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
     handlePageChange=(page)=>{
        this.setState({currentPage:page})

     }
    
     
    
    render() { 
        let { length:count }=this.state.movies
        const {pageSize,currentPage,movies:allMovies}=this.state
        if (count === 0)
        return <p>there are no movies in the database.</p>
        const movies = paginate(allMovies,currentPage,pageSize)
        return (           
            <main className='container'>             
                <p>showing {count} in the site</p>

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
                 itemsCount={count} 
                 pageSize={pageSize}
                 currentPage={currentPage}
                 onPageChange={this.handlePageChange}/>

            </main>
        );
    }
}
 
export default Movies;