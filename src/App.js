import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/NavbarComponent';
import TitlebarComponent from './Components/TitlebarComponent';
import MoviesList from './Components/MoviesList';
import FooterComponent from './Components/FooterComponent';

function App () {
  return (
    <div className="App">
      <NavbarComponent />
      <TitlebarComponent />
      <MoviesList />
      <FooterComponent />
    </div>
  );
}

export default App;
