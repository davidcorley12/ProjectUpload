import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export class MovieItem extends React.Component {
    render() {
        return (
            <div>

                <Card>
            <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.movie.cover}></img>
            <footer >
                {this.props.movie.author}
                    </footer>
                        </blockquote>
                        
                    </Card.Body>
                    <Link to={'/edit/'+this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}