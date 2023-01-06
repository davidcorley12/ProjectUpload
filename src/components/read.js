import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class Read extends React.Component{
    

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        movies:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Read about upcoming movies</h3>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}