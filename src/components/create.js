import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
        
        this.state = {
            title:'',
            poster:'',
            director:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.poster},
        ${this.state.director}`);

        const movie ={
            title:this.state.title,
            poster:this.state.poster,
            director:this.state.director
        }

        axios.post('http://localhost:4000/api/movies',movie)
        .then()
        .catch();

        this.setState({
            title:'',
            poster:'',
            director:''
        })
    }

    onChangeMovieTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeMoviePoster(e){
        this.setState({
            poster:e.target.value
        })
    }
    onChangeMovieDirector(e){
        this.setState({
            director:e.target.value
        })
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeMovieTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Director: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.director}
                            onChange={this.onChangeMovieDirector}
                        />
                    </div>

                    <input type="submit" value="Add Movie" />
                </form>
            </div>
        );
    }
}