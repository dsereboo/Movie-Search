import './App.css';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-10">
          <h1 className="text-center">Search Movies App</h1>
        </div>
        <div className="col-md-12 col-xs-10">
          <SearchMovies/>
        </div>
      </div>
    </div>
    
  )
}

export default App;
