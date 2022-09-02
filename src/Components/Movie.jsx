import { Component } from "react";
import { Figure } from "react-bootstrap";

class Movie extends Component {
    state = {};
    //prop si chiama movieItem
    render() {
        return (
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt={this.props.movieItem.imbdID}
                    src={this.props.movieItem.Poster}
                />
                <Figure.Caption>{this.props.movieItem.Title}</Figure.Caption>
            </Figure>
        );
    }
}

export default Movie;
