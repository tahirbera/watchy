import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import MovieList from './MovieList';


function Header(){
  return(
    <>
   <div className='topof'>
    <div style={{
      'padding-top': '200px'
    }}>
      <h1 style={{
        'textAlign': 'left',
        'color' : 'white',
        'padding': '20px',
        'fontSize': '60px',
        'fontFamily': 'roboto'
        
    }}>Create your perfect watch list</h1>
      <h2 style={{
        'textAlign': 'left',
        'color' : 'white',
        'padding': '20px',
        'opacity': '0.9',
        'fontFamily': 'roboto'

    }}>WITHOUT any subscription or registration</h2>
      <h3 style={{
        'textAlign': 'left',
        'color' : 'white',
        'padding': '20px',
        'opacity': '0.8',
        'fontFamily': 'roboto'

    }}>
        Just scroll down and create dream watch list
      </h3>
      <h4 style={{
        'textAlign': 'left',
        'color' : 'white',
        'padding': '20px',
        'opacity': '0.7',
        'fontFamily': 'roboto'

    }}>
        Movies, series and more!
      </h4>
      <h5 style={{
        'textAlign': 'left',
        'color' : 'white',
        'padding': '20px',
        'opacity': '0.6',
        'fontFamily': 'roboto'

    }}>
        Watchy by bera.dev
      </h5>
    </div>
    <div className='header'>      
    </div>
   </div>
    
    </>
  )
}


export default function App(){
  return(
    <>
    <div className="listing">
    <Header />
    </div>
    <div className='tablesArea'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <MovieList />
    </div>

    
    </>
  )
}