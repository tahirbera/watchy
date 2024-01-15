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
          <tr>
            <td key={movie.title}>
              {movie.title}
            </td>
            <td key={movie.imdbRating}>
              {movie.imdbRating}
            </td>
            <td key={movie.genre}>
              {movie.genre}
            </td>
            <td key={movie.plot}>
              {movie.plot}
            </td>
            <td key={movie.director}>
              {movie.director}
            </td>
            <td key={movie.actors}>
              {movie.actors}
            </td>
            <td key={movie.Title + movie.year}>
              {movie.year}
            </td>
            <td  key={movie.poster}>
              <img className="moviePoster" src={movie.poster}></img>
            </td>
            <td>
              <button onClick={() => (
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
  