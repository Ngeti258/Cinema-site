import React from 'react';
import Like from './common/like';


const MoviesTable = (props) => {
    const{movies,onDelete,onLike,onSort}=props
    return ( 
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
                        <th onClick={()=>onSort('title')}>{movie.title}</th>
                        <th onClick={()=>onSort('genre.name')}>{movie.genre.name}</th>
                        <th onClick={()=>onSort('numberInStock')}>{movie.numberInStock}</th>
                        <th onClick={()=>onSort('dailyRentals')}>{movie.dailyRentalRate}</th>
                        <th>
                            <Like onClick={()=>onLike(movie)} liked={movie.liked}/>
                        </th>
                        <th><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></th>
                    </tr>)}
                   
                </tbody>
            </table>
     );
}
 
export default MoviesTable;