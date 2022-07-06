import React from 'react';
import Like from './common/like';


const MoviesTable = (props) => {
    const{movies,onDelete,onLike,onSort}=props
    return ( 
        <table className="table">
                <thead>
                    <tr> 
                        <td  onClick={()=>onSort('title')}>Title</td>
                        <td onClick={()=>onSort('genre.name')}>Genre</td>
                        <td onClick={()=>onSort('numberInStock')}>Stock</td>
                        <td onClick={()=>onSort('dailyRentals')}>Rate</td>
                        <td></td>
                        <td/>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>
                    <tr key={movie._id}>
                        <th>{movie.title}</th>
                        <th >{movie.genre.name}</th>
                        <th>{movie.numberInStock}</th>
                        <th>{movie.dailyRentalRate}</th>
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