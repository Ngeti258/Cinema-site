import React,{Component} from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

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


    columns=[
        {path:'title',label:'title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'stock'},
        {path:'dailyRentalRate',label:'Rate'},
        { key:'like' },
        { key:'like' }

    ]
  
    render() { 
        const{movies,onDelete,onLike,onSort,sortColumn}=this.props
    return ( 
        <table className="table">
                <TableHeader columns={this.columns}  sortColumn={sortColumn} 
                onSort={onSort}/>
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
 
 
