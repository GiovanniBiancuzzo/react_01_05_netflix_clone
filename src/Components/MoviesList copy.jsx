import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Movie from "./Movie";

class MoviesList extends Component {
    state = {
        movies1: [],
        movies2: [],
        movies3: [],
    };

    fetchMovies1 = (saga) => {
        console.log("Ottenimento dei film");
        // fetch("http://www.omdbapi.com/?apikey=9570e6e6&s=harry%20potter");
        fetch(`http://www.omdbapi.com/?apikey=9570e6e6&s=${saga}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies1: data.Search,
                });
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    };

    fetchMovies2 = (saga) => {
        console.log("Ottenimento dei film");
        // fetch("http://www.omdbapi.com/?apikey=9570e6e6&s=harry%20potter");
        fetch(`http://www.omdbapi.com/?apikey=9570e6e6&s=${saga}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies2: data.Search,
                });
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    };

    fetchMovies3 = (saga) => {
        console.log("Ottenimento dei film");
        // fetch("http://www.omdbapi.com/?apikey=9570e6e6&s=harry%20potter");
        fetch(`http://www.omdbapi.com/?apikey=9570e6e6&s=${saga}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies3: data.Search,
                });
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    };

    componentDidMount() {
        this.fetchMovies1("harry%20potter");
        this.fetchMovies2("star%20wars");
        this.fetchMovies3("avengers");
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <h3>Trending Now</h3>
                </Row>
                <Row>
                    {this.state.movies1.map((movie) => (
                        <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                            <Movie movieItem={movie} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <h3>Watch it again</h3>
                </Row>
                <Row>
                    {this.state.movies2.map((movie) => (
                        <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                            <Movie movieItem={movie} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <h3>New Releases</h3>
                </Row>
                <Row>
                    {this.state.movies3.map((movie) => (
                        <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                            <Movie movieItem={movie} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default MoviesList;
