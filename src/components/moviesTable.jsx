import React,{Component} from 'react';
import Like from './common/like';

class MoviesTable extends Component {
    raiseSort = path => {
     const sortColumn = {...this.props.sortColumn};
    if(sortColumn.path === path)
    sortColumn.order = (sortColumn.order === 'asc') ? 'desc':'asc'
    else{
       sortColumn.order='asc';
       sortColumn.path= path;
    }      
     this.props.onSort(sortColumn)        
    }     


    column=[
        {path:'title',label:'title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'stock'},
        {path:'dailyRentals',label:'Rate'},
    ]
  
    render() { 
        const{movies,onDelete,onLike}=this.props
    return ( 
        <table className="table">
                <thead>
                    <tr> 
                        <th onClick={()=>this.raiseSort('title')}>Title</th>
                        <th onClick={()=>this.raiseSort('genre.name')}>Genre</th>
                        <th onClick={()=>this.raiseSort('numberInStock')}>Stock</th>
                        <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th>
                        <th></th>
                        <th/>
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
                            <Like onClick={()=>onLike(movie)} liked={movie.liked}/>
                        </th>
                        <th><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></th>
                    </tr>)}
                   
                </tbody>
            </table>
    
      )}
}
export default MoviesTable
 
 
