import React,{Component} from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

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
        {path:'title',label:'Title',content:movie=> <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'stock'},
        {path:'dailyRentalRate',label:'Rate'},
        { key:'like',content:movie=><Like onClick={()=>this.props.onLike(movie)} liked={movie.liked}/>
    },
        { key:'delete',content:movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}

    ]
  
    render() { 
        const{movies,onSort,sortColumn}=this.props
    return ( 
        <Table columns={this.columns} data={movies} 
        sortColumn={sortColumn}
        onSort={onSort}/>
    
    )
}}
export default MoviesTable
 
 
