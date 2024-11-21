import './App.css';
//import Header from './components/Header';  //here import single function
//import {Header, Footer} from './Header'; //here we import multiple function
//import Header,{Footer} from './Header';  //here we import both function 
// import {Header, Footer} from './components/Header';
// import Container from './components/Container';
// import Student from "./components/Student";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="main">
        {
          movies.map((element, index) => {
            return (
              <Movie
                key={index}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })
        }

      </div>
    </div>
  );
}
export default App;
