import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/NavbarComponent';
import TitlebarComponent from './Components/TitlebarComponent';
import MoviesList from './Components/MoviesList';
import FooterComponent from './Components/FooterComponent';
import { Container, Row } from 'react-bootstrap';

function App () {
  return (
    <div className="App">
      <NavbarComponent />
      <TitlebarComponent />
      <Container fluid>
        <Row>
          <h3>Star Wars</h3>
        </Row>
        <MoviesList movieSearch="star%20wars" />
        <Row>
          <h3>Harry Potter</h3>
        </Row>
        <MoviesList movieSearch="harry%20potter" />
        <Row>
          <h3>Avengers</h3>
        </Row>
        <MoviesList movieSearch="avengers" />
      </Container>
      <FooterComponent />
    </div>
  );
}

export default App;
