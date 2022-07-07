import React,{Component} from 'react';
import Like from './common/like';

class MoviesTable extends Component {
    raiseSort=path=>{
        const sortColumn = {...this.props.sortColumn}
      if(sortColumn.path === path)
      sortColumn.order=(sortColumn.order === 'asc')?'desc':'asc'
      else{
         sortColumn.path=path;
         sortColumn.order='asc'
      }
      this.props.onSort(sortColumn)
    }    
    render() { 
        const{movies,onDelete,onLike}=this.props
    return ( 
        <table className="table">
                <thead>
                    <tr> 
                        <td onClick={()=>this.raiseSort('title')}>Title</td>
                        <td onClick={()=>this.raiseSort('genre.name')}>Genre</td>
                        <td onClick={()=>this.raiseSort('numberInStock')}>Stock</td>
                        <td onClick={()=>this.raiseSort('dailyRentals')}>Rate</td>
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
                            <Like onClick={()=>onLike(movie)} liked={movie.liked}/>
                        </th>
                        <th><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></th>
                    </tr>)}
                   
                </tbody>
            </table>
    
      )}
}
export default MoviesTable
 
 
