import { useState } from 'react';
import './App.css';

  
export default function UserList({userLastList, setUserLastList}){

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = userLastList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(userLastList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
  
    function changeCurrentPage(id) {
      setCurrentPage(id);
    }
    function prePage(){
      if (currentPage !== 1){
        setCurrentPage(currentPage - 1);
      }
    }
    function nextPage(){
      if (currentPage !== npage){
        setCurrentPage(currentPage + 1);
      }
    }
  
    function movieDelete(m) {
      const thisList = userLastList.filter((movie) => (movie.id !== m.movie.id));
      setUserLastList(thisList);
  
    }
    return(
      <>
      <div className='tables'>
      
      <select className='selectClass withoutArrow'>
        <option>Watch List</option>
      </select>
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
          <th>Delete from Your List</th>
        </tr>
        {records.map((movie) => (
          <tr key={movie.Title}>
            <td data-cell="title">
              {movie.title}
            </td>
            <td data-cell="imdb">
              {movie.imdbRating}
            </td>
            <td data-cell="genre">
              {movie.genre}
            </td>
            <td data-cell="plot">
              {movie.plot}
            </td>
            <td data-cell="director">
              {movie.director}
            </td>
            <td data-cell="title">
              {movie.actors}
            </td>
            <td data-cell="year">
              {movie.year}
            </td>
            <td data-cell="poster">
              <img className="moviePoster" src={movie.poster}></img>
            </td>
            <td data-cell="delete">
              <button
               className='deleteButton'
               onClick={() => (
                movieDelete({ movie })
              )}>Delete</button>
            </td>
          </tr>
        ))}
        </table>
        
        <nav>
          <ul className="pagination">
              <li className="page-item">
                <a href='#' 
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  prePage();
                }}
                >Prev</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href="#" className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCurrentPage(n);
                    }}>{n}</a>
                  </li>
                ))
              }
              <li className="page-item">
                <a href='#' 
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  nextPage();
                }}
                >Next</a>
              </li>
              
          </ul>
        </nav>
        </div>
      </>
    )
  }
  