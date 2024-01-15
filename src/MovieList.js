import MoviesArray from "./data";
import { useState } from "react";
import UserList from "./UserList";
import  List from "./List";
import SeriesArray from "./series";
import CartoonArray from "./cartoons";


const userList = []

export default function  MovieList(){
    const [userLastList, setUserLastList] = useState(userList);
    const [nextId, setNextId] = useState(1);
    const [arrayName, setArrayName] = useState(MoviesArray);
  
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = arrayName.slice(firstIndex, lastIndex);
    const npage = Math.ceil(arrayName.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
  
    function addToList(e){
      setNextId(nextId + 1);
  
      setUserLastList([
        ...userLastList,
        {
          id: nextId,
          title: e.movie.Title,
          imdbRating: e.movie.imdbRating,
          genre: e.movie.Genre,
          plot: e.movie.Plot,
          director: e.movie.Director,
          actors: e.movie.Actors,
          year: e.movie.Year,
          poster: e.movie.Poster
        }
      ])
      console.log(userLastList);
  
    }
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
    console.log(CartoonArray)
    return(
      <>
      <div className="tables">
        <div className='listArea'>
        <div className="listAreaItem1">

          
          <select
            className="selectClass"
             onChange={(e) => {
            const selectedOpinion = e.target.value;
            if (selectedOpinion === 'Movie') {
              setArrayName(MoviesArray);
            } else if (selectedOpinion === 'Series') {
              setArrayName(SeriesArray);
            } else if (selectedOpinion === 'Cartoons') {
              setArrayName(CartoonArray);
            }
          }}>
              <option value='Movie'>Movie List</option>
              <option value='Series'>Serie List</option>
              <option value='Cartoons'>Cartoon List</option>
           </select>
            

            {(arrayName === MoviesArray) && (
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
                     <td data-cell="actors">
                       {movie.Actors}
                     </td>
                     <td data-cell="year">
                       {movie.Year}
                     </td>
                     <td data-cell="poster">
                       <img className="moviePoster" src={movie.Poster}></img>
                     </td>
                     <td data-cell="add">
                       <button
                       className="addButton"
                        onClick={() => {
                         addToList({movie})
                       }}>Add</button>
                     </td>
                   </tr>
                 ))}
                 </table>
            )}

            {(arrayName === SeriesArray) && (   
              <List records={records} addToList={addToList}/>
            )}
           
           {(arrayName === CartoonArray) && (   
              <List records={records} addToList={addToList}/>
            )}
          
      
        
        <nav>
          <ul className="pagination">
              <li              
              className="page-item">
                <a href='#' 
                className="page-link"
                onClick={((e) => {
                  e.preventDefault();
                  prePage();
                })}
                >Prev</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href="#" className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCurrentPage(n)}}>{n}</a>
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
        <div>
          <UserList userLastList={userLastList} setUserLastList={setUserLastList}/>
        </div>
      </div>
      </div>
      </>
    )
  }