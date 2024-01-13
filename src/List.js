export default function List({ records, addToList }){
    return(
        <>
              <table className="movieTable">
                 <tr>
                   <th>Movie Name</th>
                   <th>IMDb</th>
                   <th>Genre</th>
                   <th>Plot</th>
                   <th>Director</th>
                   <th>Actors</th>
                   <th>Year</th>
                   <th>Poster</th>
                   <th>Add to Your List</th>
                 </tr>
                 {records.map((movie) => (
                   <tr key={movie.Title}>
                     <td data-cell="title">
                       {movie.Title}
                     </td>
                     <td data-cell="imdb">
                       {movie.imdbRating}
                     </td>
                     <td data-cell="genre">
                       {movie.Genre}
                     </td>
                     <td data-cell="plot">
                       {movie.Plot}
                     </td>
                     <td data-cell="director">
                       {movie.Director}
                     </td>
                     <td data-cell="title">
                       {movie.Actors}
                     </td>
                     <td data-cell="year">
                       {movie.Year}
                     </td>
                     <td data-cell="poster">
                       <img className="moviePoster" src={movie.Poster}></img>
                     </td>
                     <td data-cell="add">
                       <button onClick={() => {
                         addToList({movie})
                       }}>Add</button>
                     </td>
                   </tr>
                 ))}
                 </table>
        </>
    )
}