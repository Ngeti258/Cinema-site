import React, { Component } from 'react'
import Joi from 'joi-browser'
import { getGenres } from '../services/fakeGenreService'
import { getMovie, saveMovie } from '../services/fakeMovieService'

class AddMovies extends Component {
    state = {
        data:{title:'',genreId:'',numberInStock:'',Rate:''},
        errors:{},
        genres:[]
      }
      schema={
        _id:Joi.string(),
        title:Joi.string().required().label('title'),
        genre:Joi.string().required().label('Genre'),
        numberInStock:Joi.string().min(0).max(100)
        .required().label('Number in Stock'),
        Rate:Joi.string().min(0).max(10)
        .required().label('Rate')
      }
      componentDidMount(){
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params._id
        if(movieId === 'new') return;

        const movie = getMovie(movieId)
        if(!movie) return this.props.history.replace("/not-found");
        this.setState({data:this.mapToViewModel(movie)})
      }
      mapToViewModel(movie){
        return{
            _id:movie._id,
            title:movie.title,
            genreId:movie.genre._id,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate


        }
    }
        doSubmit=()=>{
            saveMovie(this.state.data);
            this.props.history.push('/movies')
        }
      
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('title','Title')}
               {this.renderSelect('genre','Genre')}
               {this.renderInput('numberInStock','Number in Stock')}
               {this.renderInput('Rate','Rate')}            
               {this.renderButton('Svae')}
            </form>

        );
    }
}
 
export default AddMovies;