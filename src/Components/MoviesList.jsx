import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Movie from "./Movie";

class MoviesList extends Component {
    state = {
        movies: [],
    };

    fetchMovies = () => {
        console.log("Ottenimento dei film");
        fetch(
            `http://www.omdbapi.com/?apikey=9570e6e6&s=${this.props.movieSearch}`,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies: data.Search,
                });
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    };

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <Row>
                {this.state.movies.map((movie) => (
                    <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                        <Movie movieItem={movie} />
                    </Col>
                ))}
            </Row>
        );
    }
}

export default MoviesList;
